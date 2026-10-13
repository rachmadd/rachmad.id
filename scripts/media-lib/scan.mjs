// Walks media-src/projects and builds the structure written to
// scripts/media-map.json: one entry per project, one row per file, with
// real pixel size, inferred scale, off-ratio flag, and an alt-text
// placeholder derived from the project's existing content title.

import { readdirSync, readFileSync, statSync } from "node:fs";
import path from "node:path";
import {
  ASPECT_RATIO,
  ASPECT_TOLERANCE,
  BASE_HEIGHT,
  BASE_WIDTH,
  GIF_EXTENSIONS,
  IMAGE_EXTENSIONS,
  SKIP_SLUGS,
  SOURCE_DIR,
  VIDEO_EXTENSIONS,
} from "./constants.mjs";
import { detectFilenameScale, normalizeStem, slugifyFolderName } from "./naming.mjs";
import { probeImage, probeVideo } from "./probe.mjs";

function classifyKind(extension) {
  if (IMAGE_EXTENSIONS.has(extension)) return "image";
  if (VIDEO_EXTENSIONS.has(extension) || GIF_EXTENSIONS.has(extension)) return "video";
  return null;
}

function isOffRatio(width, height) {
  const aspect = width / height;
  return Math.abs(aspect - ASPECT_RATIO) / ASPECT_RATIO > ASPECT_TOLERANCE;
}

function inferImageScale(width, height) {
  const widthRatio = width / BASE_WIDTH;
  const heightRatio = height / BASE_HEIGHT;
  const rounded = Math.round(widthRatio);
  const withinTolerance =
    rounded > 0 &&
    Math.abs(widthRatio - rounded) / rounded <= ASPECT_TOLERANCE &&
    Math.abs(heightRatio - rounded) / rounded <= ASPECT_TOLERANCE;
  return withinTolerance ? rounded : null;
}

const titleCache = new Map();

function getProjectTitle(slug) {
  if (titleCache.has(slug)) return titleCache.get(slug);
  let title = null;
  try {
    const contentPath = path.join(process.cwd(), "src/content/projects", `${slug}.ts`);
    const source = readFileSync(contentPath, "utf8");
    const match = source.match(/\btitle:\s*"([^"]+)"/);
    if (match) title = match[1];
  } catch {
    title = null;
  }
  titleCache.set(slug, title);
  return title;
}

function fallbackTitle(slug) {
  return slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

function buildAltPlaceholder(slug, kind, order) {
  const title = getProjectTitle(slug) ?? fallbackTitle(slug);
  const noun = kind === "video" ? "walkthrough" : "screenshot";
  return `${title} ${noun} ${order + 1} (placeholder — review before shipping)`;
}

async function scanFile(slug, folderName, filename, order) {
  const extension = path.extname(filename).toLowerCase();
  const kind = classifyKind(extension);
  const absolutePath = path.join(process.cwd(), SOURCE_DIR, folderName, filename);
  const relativePath = `${folderName}/${filename}`;
  const stat = statSync(absolutePath);
  const stem = normalizeStem(path.basename(filename, extension));

  if (kind === "image") {
    const { width, height } = await probeImage(absolutePath);
    const filenameScale = detectFilenameScale(path.basename(filename, extension));
    const pixelScale = inferImageScale(width, height);
    const scale = pixelScale ?? filenameScale;
    const ambiguous =
      filenameScale !== null && pixelScale !== null && filenameScale !== pixelScale;

    return {
      filename,
      stem,
      relativePath,
      kind,
      scale,
      width,
      height,
      isOffRatio: isOffRatio(width, height),
      order,
      fileSizeBytes: stat.size,
      altPlaceholder: buildAltPlaceholder(slug, kind, order),
      codec: null,
      durationSeconds: null,
      fps: null,
      hasAudio: null,
      ambiguous,
    };
  }

  const info = await probeVideo(absolutePath);
  return {
    filename,
    stem,
    relativePath,
    kind: "video",
    scale: null,
    width: info.width,
    height: info.height,
    isOffRatio: isOffRatio(info.width, info.height),
    order,
    fileSizeBytes: stat.size,
    altPlaceholder: buildAltPlaceholder(slug, "video", order),
    codec: info.codec,
    durationSeconds: info.durationSeconds,
    fps: info.fps,
    hasAudio: info.hasAudio,
    ambiguous: false,
  };
}

export async function scanProjects() {
  const sourceRoot = path.join(process.cwd(), SOURCE_DIR);
  const folders = readdirSync(sourceRoot, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name)
    .sort();

  const projects = [];
  const skipped = [...SKIP_SLUGS];

  for (const folderName of folders) {
    const slug = slugifyFolderName(folderName);
    if (SKIP_SLUGS.includes(slug)) continue;

    const folderPath = path.join(sourceRoot, folderName);
    const filenames = readdirSync(folderPath)
      .filter((name) => classifyKind(path.extname(name).toLowerCase()) !== null)
      .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));

    if (filenames.length === 0) {
      skipped.push(slug);
      continue;
    }

    const files = [];
    for (let order = 0; order < filenames.length; order += 1) {
      files.push(await scanFile(slug, folderName, filenames[order], order));
    }

    projects.push({ slug, folderName, coverIndex: 0, files });
  }

  return { projects, skipped };
}
