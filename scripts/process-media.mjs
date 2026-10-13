#!/usr/bin/env node
// Entry point for the project-media pipeline.
//
// Usage:
//   node scripts/process-media.mjs scan      - write scripts/media-map.json, print the table, stop
//   node scripts/process-media.mjs process   - scan, encode every output, generate the manifest
//   node scripts/process-media.mjs [process] --force   - re-encode even if outputs are up to date

import { statSync, writeFileSync } from "node:fs";
import path from "node:path";
import { MEDIA_MAP_PATH, OUTPUT_DIR, SOURCE_DIR } from "./media-lib/constants.mjs";
import { encodeImageOutputs } from "./media-lib/image-pipeline.mjs";
import { writeManifest } from "./media-lib/manifest.mjs";
import { printProcessReport, printScanTable } from "./media-lib/report.mjs";
import { scanProjects } from "./media-lib/scan.mjs";
import { encodePosterOutputs, encodeVideoOutputs } from "./media-lib/video-pipeline.mjs";

const argv = process.argv.slice(2);
const command = argv.find((arg) => !arg.startsWith("--")) ?? "process";
const force = argv.includes("--force");

async function processFile(slug, file, force) {
  if (file.isOffRatio) {
    console.warn(`  SKIP ${slug}/${file.filename}: off-ratio (${file.width}x${file.height})`);
    return { file, offRatio: true };
  }
  if (file.ambiguous) {
    throw new Error(
      `Ambiguous scale for ${slug}/${file.filename}: filename suffix disagrees with pixel size. Resolve manually.`,
    );
  }

  const outputDir = path.join(process.cwd(), OUTPUT_DIR, slug);
  const sourceAbsolutePath = path.join(process.cwd(), SOURCE_DIR, file.relativePath);
  const sourceMtimeMs = statSync(sourceAbsolutePath).mtimeMs;

  if (file.kind === "image") {
    const results = await encodeImageOutputs({
      sourceAbsolutePath,
      sourceMtimeMs,
      nativeWidth: file.width,
      nativeHeight: file.height,
      outputDir,
      stem: file.stem,
      force,
    });
    return { file, results };
  }

  const { results: videoResults } = await encodeVideoOutputs({
    sourceAbsolutePath,
    sourceMtimeMs,
    nativeWidth: file.width,
    nativeHeight: file.height,
    nativeDurationSeconds: file.durationSeconds,
    outputDir,
    stem: file.stem,
    force,
  });
  const posterResults = await encodePosterOutputs({
    sourceAbsolutePath,
    sourceMtimeMs,
    nativeWidth: file.width,
    nativeHeight: file.height,
    outputDir,
    stem: file.stem,
    force,
  });
  return { file, results: [...videoResults, ...posterResults] };
}

async function main() {
  const { projects, skipped } = await scanProjects();

  writeFileSync(
    path.join(process.cwd(), MEDIA_MAP_PATH),
    `${JSON.stringify({ generatedAt: new Date().toISOString(), projects, skipped }, null, 2)}\n`,
  );

  printScanTable(projects, skipped);

  if (command === "scan") return;

  const projectReports = [];
  for (const project of projects) {
    console.log(`\nProcessing ${project.slug}...`);
    const fileReports = [];
    for (const file of project.files) {
      fileReports.push(await processFile(project.slug, file, force));
    }
    projectReports.push({ slug: project.slug, fileReports });
  }

  const manifestPath = writeManifest(projects);
  printProcessReport(projectReports, skipped, manifestPath);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
