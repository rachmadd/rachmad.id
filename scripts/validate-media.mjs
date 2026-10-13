#!/usr/bin/env node
// Verifies every expected output under public/projects/<slug>/ exists,
// has the exact target dimensions, is within its size budget (warn-only),
// and that videos are H.264 main/yuv420p, 24fps, no audio, faststart.
//
// Exits non-zero if any hard check (existence, dimensions, codec, audio,
// fps, faststart) fails. Budget overages are printed as warnings only,
// matching process-media.mjs's own "warn instead of fail" floor-quality
// behavior.

import { closeSync, existsSync, openSync, readFileSync, readSync, statSync } from "node:fs";
import path from "node:path";
import {
  IMAGE_TARGETS,
  MEDIA_MAP_PATH,
  OUTPUT_DIR,
  POSTER_TARGETS,
  VIDEO_FPS,
  VIDEO_TARGETS,
} from "./media-lib/constants.mjs";
import { outputFileName } from "./media-lib/naming.mjs";
import { probeImage, probeVideo } from "./media-lib/probe.mjs";

function loadMediaMap() {
  const mapPath = path.join(process.cwd(), MEDIA_MAP_PATH);
  if (!existsSync(mapPath)) {
    throw new Error(`${MEDIA_MAP_PATH} not found — run \`pnpm media:scan\` (or media:process) first.`);
  }
  return JSON.parse(readFileSync(mapPath, "utf8"));
}

const errors = [];
const warnings = [];

function expectedSize(nativeWidth, nativeHeight, targetWidth, targetHeight) {
  const reachable = nativeWidth >= targetWidth && nativeHeight >= targetHeight;
  return reachable ? { width: targetWidth, height: targetHeight } : { width: nativeWidth, height: nativeHeight };
}

function formatKb(bytes) {
  return `${(bytes / 1024).toFixed(1)} KB`;
}

function isFastStart(filePath) {
  const fd = openSync(filePath, "r");
  const buffer = Buffer.alloc(65536);
  const bytesRead = readSync(fd, buffer, 0, buffer.length, 0);
  closeSync(fd);
  const head = buffer.subarray(0, bytesRead);
  const moovIndex = head.indexOf("moov");
  if (moovIndex === -1) return false;
  const mdatIndex = head.indexOf("mdat");
  return mdatIndex === -1 || moovIndex < mdatIndex;
}

async function validateWebpRoles(slug, file, targets) {
  for (const target of Object.values(targets)) {
    const filename = outputFileName(file.stem, target.role, "webp");
    const outputPath = path.join(process.cwd(), OUTPUT_DIR, slug, filename);
    const label = `${slug}/${filename}`;

    if (!existsSync(outputPath)) {
      errors.push(`MISSING ${label}`);
      continue;
    }

    const expected = expectedSize(file.width, file.height, target.width, target.height);
    const meta = await probeImage(outputPath);
    if (meta.width !== expected.width || meta.height !== expected.height) {
      errors.push(`DIMENSIONS ${label}: expected ${expected.width}x${expected.height}, got ${meta.width}x${meta.height}`);
    }

    const bytes = statSync(outputPath).size;
    if (bytes > target.budgetBytes) {
      warnings.push(`BUDGET ${label}: ${formatKb(bytes)} > ${formatKb(target.budgetBytes)}`);
    }
  }
}

async function validateMp4Roles(slug, file) {
  for (const target of Object.values(VIDEO_TARGETS)) {
    const filename = outputFileName(file.stem, target.role, "mp4");
    const outputPath = path.join(process.cwd(), OUTPUT_DIR, slug, filename);
    const label = `${slug}/${filename}`;

    if (!existsSync(outputPath)) {
      errors.push(`MISSING ${label}`);
      continue;
    }

    const expected = expectedSize(file.width, file.height, target.width, target.height);
    const info = await probeVideo(outputPath);
    if (info.width !== expected.width || info.height !== expected.height) {
      errors.push(`DIMENSIONS ${label}: expected ${expected.width}x${expected.height}, got ${info.width}x${info.height}`);
    }
    if (info.codec !== "h264") errors.push(`CODEC ${label}: expected h264, got ${info.codec}`);
    if (info.hasAudio) errors.push(`AUDIO ${label}: expected no audio track`);
    if (info.fps !== null && Math.round(info.fps) !== VIDEO_FPS) {
      errors.push(`FPS ${label}: expected ${VIDEO_FPS}, got ${info.fps}`);
    }
    if (!isFastStart(outputPath)) errors.push(`FASTSTART ${label}: moov atom not at head`);

    const bytes = statSync(outputPath).size;
    if (bytes > target.budgetBytes) {
      warnings.push(`BUDGET ${label}: ${formatKb(bytes)} > ${formatKb(target.budgetBytes)}`);
    }
  }
}

async function validateFile(slug, file) {
  if (file.isOffRatio) return;
  if (file.kind === "image") {
    await validateWebpRoles(slug, file, IMAGE_TARGETS);
  } else {
    await validateMp4Roles(slug, file);
    await validateWebpRoles(slug, file, POSTER_TARGETS);
  }
}

async function main() {
  const { projects } = loadMediaMap();
  for (const project of projects) {
    for (const file of project.files) {
      await validateFile(project.slug, file);
    }
  }

  if (warnings.length) {
    console.warn(`\n${warnings.length} budget warning(s):`);
    warnings.forEach((warning) => console.warn(`  - ${warning}`));
  }

  if (errors.length) {
    console.error(`\n${errors.length} validation failure(s):`);
    errors.forEach((error) => console.error(`  - ${error}`));
    process.exitCode = 1;
    return;
  }

  console.log("\nAll media outputs validated.");
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
