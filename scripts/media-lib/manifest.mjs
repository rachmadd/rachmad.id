// Generates src/data/project-media.ts from the scanned project list.
// Paths are deterministic (stem + role + extension), so this only needs
// the scan data, not the encode results.

import { mkdirSync, writeFileSync } from "node:fs";
import path from "node:path";
import { MANIFEST_PATH } from "./constants.mjs";
import { outputFileName } from "./naming.mjs";

function publicPath(slug, filename) {
  return `/projects/${slug}/${filename}`;
}

function buildItem(slug, file) {
  if (file.kind === "image") {
    return {
      kind: "image",
      alt: file.altPlaceholder,
      card: {
        desktop: publicPath(slug, outputFileName(file.stem, "card-desktop", "webp")),
        mobile: publicPath(slug, outputFileName(file.stem, "card-mobile", "webp")),
      },
      detail: {
        desktop: publicPath(slug, outputFileName(file.stem, "detail-desktop", "webp")),
        mobile: publicPath(slug, outputFileName(file.stem, "detail-mobile", "webp")),
      },
    };
  }

  return {
    kind: "video",
    alt: file.altPlaceholder,
    card: {
      desktop: publicPath(slug, outputFileName(file.stem, "card-desktop", "mp4")),
      mobile: publicPath(slug, outputFileName(file.stem, "card-mobile", "mp4")),
    },
    detail: {
      desktop: publicPath(slug, outputFileName(file.stem, "detail-desktop", "mp4")),
      mobile: publicPath(slug, outputFileName(file.stem, "detail-mobile", "mp4")),
    },
    poster: {
      desktop: publicPath(slug, outputFileName(file.stem, "poster-desktop", "webp")),
      mobile: publicPath(slug, outputFileName(file.stem, "poster-mobile", "webp")),
    },
  };
}

const TYPE_BLOCK = `export type ProjectMediaImageItem = {
  kind: "image";
  alt: string;
  card: { desktop: string; mobile: string };
  detail: { desktop: string; mobile: string };
};

export type ProjectMediaVideoItem = {
  kind: "video";
  alt: string;
  card: { desktop: string; mobile: string };
  detail: { desktop: string; mobile: string };
  poster: { desktop: string; mobile: string };
};

export type ProjectMediaItem = ProjectMediaImageItem | ProjectMediaVideoItem;

export interface ProjectMediaEntry {
  slug: string;
  coverIndex: number;
  items: ProjectMediaItem[];
}`;

function renderTs(projects) {
  const entries = projects.map((project) => ({
    slug: project.slug,
    coverIndex: project.coverIndex,
    items: project.files.filter((file) => !file.isOffRatio).map((file) => buildItem(project.slug, file)),
  }));

  const dataObject = Object.fromEntries(entries.map((entry) => [entry.slug, entry]));

  return [
    "// GENERATED FILE — do not edit by hand.",
    "// Run `pnpm media:process` to regenerate from scripts/media-map.json.",
    "",
    TYPE_BLOCK,
    "",
    `export const projectMedia: Record<string, ProjectMediaEntry> = ${JSON.stringify(dataObject, null, 2)};`,
    "",
  ].join("\n");
}

export function writeManifest(projects) {
  const outputPath = path.join(process.cwd(), MANIFEST_PATH);
  mkdirSync(path.dirname(outputPath), { recursive: true });
  writeFileSync(outputPath, renderTs(projects));
  return outputPath;
}
