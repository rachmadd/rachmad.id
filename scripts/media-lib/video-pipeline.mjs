// Encodes the four MP4 roles (card/detail x desktop/mobile) plus the two
// poster WebP stills for one source video. H.264 main profile, yuv420p,
// no audio, faststart; CRF steps up until the byte budget is met.

import { existsSync, mkdirSync, mkdtempSync, rmSync, statSync, writeFileSync } from "node:fs";
import sharp from "sharp";
import { tmpdir } from "node:os";
import path from "node:path";
import {
  POSTER_TARGETS,
  VIDEO_CARD_TRIM_SECONDS,
  VIDEO_CRF_MAX,
  VIDEO_CRF_START,
  VIDEO_CRF_STEP,
  VIDEO_FPS,
  VIDEO_TARGETS,
} from "./constants.mjs";
import { outputFileName } from "./naming.mjs";
import { probeVideo, runFfmpeg } from "./probe.mjs";
import { encodeWebpWithBudget } from "./webp-budget.mjs";

function computeOutputSize(nativeWidth, nativeHeight, targetWidth, targetHeight) {
  const reachable = nativeWidth >= targetWidth && nativeHeight >= targetHeight;
  return reachable
    ? { width: targetWidth, height: targetHeight, resolutionLimited: false }
    : { width: nativeWidth, height: nativeHeight, resolutionLimited: true };
}

function isUpToDate(outputPath, sourceMtimeMs) {
  if (!existsSync(outputPath)) return false;
  return statSync(outputPath).mtimeMs >= sourceMtimeMs;
}

async function encodeWithCrfBudget({ sourceAbsolutePath, outputPath, width, height, trimSeconds, budgetBytes }) {
  let crf = VIDEO_CRF_START;
  let size;
  while (true) {
    const args = ["-i", sourceAbsolutePath];
    if (trimSeconds) args.push("-t", String(trimSeconds));
    args.push(
      "-vf", `scale=${width}:${height}`,
      "-r", String(VIDEO_FPS),
      "-an",
      "-c:v", "libx264",
      "-profile:v", "main",
      "-pix_fmt", "yuv420p",
      "-crf", String(crf),
      "-preset", "medium",
      "-movflags", "+faststart",
      outputPath,
    );
    await runFfmpeg(args);
    size = statSync(outputPath).size;
    if (size <= budgetBytes || crf >= VIDEO_CRF_MAX) break;
    crf += VIDEO_CRF_STEP;
    if (crf > VIDEO_CRF_MAX) crf = VIDEO_CRF_MAX;
  }
  return { crf, size };
}

export async function encodeVideoOutputs({
  sourceAbsolutePath,
  sourceMtimeMs,
  nativeWidth,
  nativeHeight,
  nativeDurationSeconds,
  outputDir,
  stem,
  force,
}) {
  mkdirSync(outputDir, { recursive: true });
  const results = [];
  const wasTrimmed = nativeDurationSeconds > VIDEO_CARD_TRIM_SECONDS;

  for (const target of Object.values(VIDEO_TARGETS)) {
    const filename = outputFileName(stem, target.role, "mp4");
    const outputPath = path.join(outputDir, filename);
    const trimSeconds = target.trim && wasTrimmed ? VIDEO_CARD_TRIM_SECONDS : null;

    if (!force && isUpToDate(outputPath, sourceMtimeMs)) {
      const existing = statSync(outputPath);
      const info = await probeVideo(outputPath);
      results.push({
        role: target.role,
        filename,
        width: info.width,
        height: info.height,
        crf: null,
        bytes: existing.size,
        budgetBytes: target.budgetBytes,
        overBudget: existing.size > target.budgetBytes,
        resolutionLimited: info.width < target.width || info.height < target.height,
        trimmed: Boolean(trimSeconds),
        skipped: true,
      });
      continue;
    }

    const { width, height, resolutionLimited } = computeOutputSize(
      nativeWidth,
      nativeHeight,
      target.width,
      target.height,
    );
    const { crf, size } = await encodeWithCrfBudget({
      sourceAbsolutePath,
      outputPath,
      width,
      height,
      trimSeconds,
      budgetBytes: target.budgetBytes,
    });

    results.push({
      role: target.role,
      filename,
      width,
      height,
      crf,
      bytes: size,
      budgetBytes: target.budgetBytes,
      overBudget: size > target.budgetBytes,
      resolutionLimited,
      trimmed: Boolean(trimSeconds),
      skipped: false,
    });
  }

  return { results, wasTrimmed };
}

export async function encodePosterOutputs({
  sourceAbsolutePath,
  sourceMtimeMs,
  nativeWidth,
  nativeHeight,
  outputDir,
  stem,
  force,
}) {
  mkdirSync(outputDir, { recursive: true });
  const results = [];

  const needsExtraction = Object.values(POSTER_TARGETS).some((target) => {
    const outputPath = path.join(outputDir, outputFileName(stem, target.role, "webp"));
    return force || !isUpToDate(outputPath, sourceMtimeMs);
  });

  let framePngPath = null;
  if (needsExtraction) {
    const tempDir = mkdtempSync(path.join(tmpdir(), "media-poster-"));
    framePngPath = path.join(tempDir, "frame.png");
    await runFfmpeg(["-i", sourceAbsolutePath, "-frames:v", "1", framePngPath]);
  }

  for (const target of Object.values(POSTER_TARGETS)) {
    const filename = outputFileName(stem, target.role, "webp");
    const outputPath = path.join(outputDir, filename);

    if (!force && isUpToDate(outputPath, sourceMtimeMs)) {
      const existing = statSync(outputPath);
      const metadata = await sharp(outputPath).metadata();
      results.push({
        role: target.role,
        filename,
        width: metadata.width,
        height: metadata.height,
        quality: null,
        bytes: existing.size,
        budgetBytes: target.budgetBytes,
        overBudget: existing.size > target.budgetBytes,
        resolutionLimited: metadata.width < target.width || metadata.height < target.height,
        skipped: true,
      });
      continue;
    }

    const { width, height, resolutionLimited } = computeOutputSize(
      nativeWidth,
      nativeHeight,
      target.width,
      target.height,
    );
    const { buffer, quality } = await encodeWebpWithBudget(
      framePngPath,
      width,
      height,
      target.budgetBytes,
      target.minQuality,
    );
    writeFileSync(outputPath, buffer);

    results.push({
      role: target.role,
      filename,
      width,
      height,
      quality,
      bytes: buffer.length,
      budgetBytes: target.budgetBytes,
      overBudget: buffer.length > target.budgetBytes,
      resolutionLimited,
      skipped: false,
    });
  }

  if (framePngPath) rmSync(path.dirname(framePngPath), { recursive: true, force: true });

  return results;
}
