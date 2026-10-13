// Filename/slug normalization shared by scan + both encode pipelines.

const SCALE_SUFFIX_RE = /[@_-][123]x$/i;

export function slugifyFolderName(folderName) {
  return folderName
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export function normalizeStem(fileStem) {
  return fileStem
    .trim()
    .replace(SCALE_SUFFIX_RE, "")
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export function detectFilenameScale(fileStem) {
  const match = fileStem.match(SCALE_SUFFIX_RE);
  if (!match) return null;
  return Number(match[0].replace(/[@_-]/g, "").replace(/x$/i, ""));
}

export function outputFileName(stem, role, extension) {
  return `${stem}-${role}.${extension}`;
}
