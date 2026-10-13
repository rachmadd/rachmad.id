// Shared sizing/budget/encoding constants for the media pipeline.
// See MEDIA.md for the rationale behind each number.

export const SOURCE_DIR = "media-src/projects";
export const OUTPUT_DIR = "public/projects";
export const MANIFEST_PATH = "src/data/project-media.ts";
export const MEDIA_MAP_PATH = "scripts/media-map.json";

export const BASE_WIDTH = 1038;
export const BASE_HEIGHT = 648;
export const ASPECT_RATIO = BASE_WIDTH / BASE_HEIGHT; // 16:10
export const ASPECT_TOLERANCE = 0.01;

export const IMAGE_SCALES = [1, 2, 3];

// Projects that intentionally have no screenshots (shown via a designed
// concept card elsewhere). Skipped by the pipeline even if a folder exists.
export const SKIP_SLUGS = ["maybank-digital-branch"];

export const IMAGE_TARGETS = {
  cardDesktop: { role: "card-desktop", width: 1038, height: 648, budgetBytes: 150_000, minQuality: 60 },
  cardMobile: { role: "card-mobile", width: 720, height: 450, budgetBytes: 150_000, minQuality: 60 },
  detailDesktop: { role: "detail-desktop", width: 1600, height: 1000, budgetBytes: 300_000, minQuality: 60 },
  detailMobile: { role: "detail-mobile", width: 800, height: 500, budgetBytes: 200_000, minQuality: 70 },
};

export const VIDEO_TARGETS = {
  cardDesktop: { role: "card-desktop", width: 960, height: 600, budgetBytes: 2_000_000, trim: true },
  cardMobile: { role: "card-mobile", width: 640, height: 400, budgetBytes: 1_000_000, trim: true },
  detailDesktop: { role: "detail-desktop", width: 1038, height: 648, budgetBytes: 5_000_000, trim: false },
  detailMobile: { role: "detail-mobile", width: 720, height: 450, budgetBytes: 2_500_000, trim: false },
};

// Posters share pixel dimensions with the detail video targets; budgeted
// the same as the equivalent-size WebP role since the spec gives no
// dedicated poster budget.
export const POSTER_TARGETS = {
  posterDesktop: { role: "poster-desktop", width: 1038, height: 648, budgetBytes: 300_000, minQuality: 60 },
  posterMobile: { role: "poster-mobile", width: 720, height: 450, budgetBytes: 200_000, minQuality: 70 },
};

export const WEBP_QUALITY_START = 82;
export const WEBP_QUALITY_STEP = 4;

export const VIDEO_FPS = 24;
export const VIDEO_CRF_START = 26;
export const VIDEO_CRF_MAX = 34;
export const VIDEO_CRF_STEP = 2;
export const VIDEO_CARD_TRIM_SECONDS = 10;

export const IMAGE_EXTENSIONS = new Set([".webp", ".png", ".jpg", ".jpeg"]);
export const VIDEO_EXTENSIONS = new Set([".mp4", ".mov", ".webm"]);
export const GIF_EXTENSIONS = new Set([".gif"]);
