// Shared WebP quality-stepping encoder. Used for screenshot outputs and
// for video poster frames (same budget/quality-floor rules apply).

import sharp from "sharp";
import { WEBP_QUALITY_START, WEBP_QUALITY_STEP } from "./constants.mjs";

export async function encodeWebpWithBudget(input, width, height, budgetBytes, minQuality) {
  let quality = WEBP_QUALITY_START;
  let buffer;
  while (true) {
    buffer = await sharp(input)
      .resize({ width, height, fit: "fill", kernel: "lanczos3" })
      .webp({ quality })
      .toBuffer();
    if (buffer.length <= budgetBytes || quality <= minQuality) break;
    quality -= WEBP_QUALITY_STEP;
    if (quality < minQuality) quality = minQuality;
  }
  return { buffer, quality };
}
