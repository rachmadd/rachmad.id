// Console reporting for the scan table and the final per-project summary.

function formatKb(bytes) {
  return `${(bytes / 1024).toFixed(1)} KB`;
}

export function printScanTable(projects, skipped) {
  const rows = [];
  for (const project of projects) {
    for (const file of project.files) {
      rows.push({
        slug: project.slug,
        file: file.filename,
        kind: file.kind,
        scale: file.scale ?? "-",
        size: `${file.width}x${file.height}`,
        offRatio: file.isOffRatio ? "YES" : "",
        bytes: formatKb(file.fileSizeBytes),
      });
    }
  }
  console.log("\n=== Media scan ===");
  console.table(rows);
  if (skipped.length) {
    console.log(`Skipped (no screenshots / empty folder): ${skipped.join(", ")}`);
  }
}

function summarizeFileReport(fileReport) {
  if (fileReport.offRatio) {
    return { outputBytes: 0, lines: [`  - ${fileReport.file.filename}: SKIPPED (off-ratio ${fileReport.file.width}x${fileReport.file.height})`] };
  }

  const lines = [];
  let outputBytes = 0;
  for (const result of fileReport.results) {
    outputBytes += result.bytes ?? 0;
    const flags = [];
    if (result.overBudget) flags.push(`OVER BUDGET (${formatKb(result.bytes)} > ${formatKb(result.budgetBytes)})`);
    if (result.resolutionLimited) flags.push("needs higher-res source");
    if (result.trimmed) flags.push(`trimmed to 10s`);
    if (result.skipped) flags.push("up to date, skipped");
    const flagText = flags.length ? ` [${flags.join("; ")}]` : "";
    lines.push(`  - ${result.filename}: ${result.width ?? "?"}x${result.height ?? "?"}, ${formatKb(result.bytes ?? 0)}${flagText}`);
  }
  return { outputBytes, lines };
}

export function printProcessReport(projectReports, skipped, manifestPath) {
  console.log("\n=== Process report ===");
  for (const project of projectReports) {
    let sourceBytes = 0;
    let outputBytes = 0;
    const lines = [];

    for (const fileReport of project.fileReports) {
      sourceBytes += fileReport.file.fileSizeBytes;
      const { outputBytes: fileOutputBytes, lines: fileLines } = summarizeFileReport(fileReport);
      outputBytes += fileOutputBytes;
      lines.push(...fileLines);
    }

    console.log(`\n${project.slug}`);
    console.log(`  source: ${formatKb(sourceBytes)} -> outputs: ${formatKb(outputBytes)}`);
    lines.forEach((line) => console.log(line));
  }

  if (skipped.length) {
    console.log(`\nSkipped projects (no screenshots): ${skipped.join(", ")}`);
  }
  console.log(`\nManifest written to ${manifestPath}`);
}
