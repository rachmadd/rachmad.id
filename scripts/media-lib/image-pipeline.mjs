// Encodes the four WebP roles (card/detail x desktop/mobile) for one
// source image, never upscaling and stepping quality down to fit budget.

import { existsSync, mkdirSync, statSync, writeFileSync } from "node:fs";
import path from "node:path";
import sharp from "sharp";
import { IMAGE_TARGETS } from "./constants.mjs";
import { outputFileName } from "./naming.mjs";
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

export async function encodeImageOutputs({
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

  for (const target of Object.values(IMAGE_TARGETS)) {
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
      sourceAbsolutePath,
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

  return results;
}
