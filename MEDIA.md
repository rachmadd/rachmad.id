# Media pipeline

How raw project screenshots/videos in `media-src/projects/<slug>/` become
the sized, budgeted delivery set in `public/projects/<slug>/`, and the typed
manifest at `src/data/project-media.ts`.

## Source assumptions

- Every source file is already composed at 16:10 (mockup + background
  baked in), base size 1038x648. Some images are 2x (2076x1296) or 3x
  (3114x1944) — scale is detected from real pixel size, not the filename.
- Files are ordered by filename; the first file in a folder is the project's
  cover (used on the card). Every file is also used in the detail gallery.
- `maybank-digital-branch` has no folder and is intentionally skipped — it
  uses a designed concept card elsewhere.

## Outputs

For each source file with normalized stem `{stem}` (extension stripped,
`@2x`/`-2x`/`_3x` suffixes stripped, spaces to dashes, lowercase):

| Output | Size |
|---|---|
| `{stem}-card-desktop.webp` | 1038x648 |
| `{stem}-card-mobile.webp` | 720x450 |
| `{stem}-detail-desktop.webp` | 1600x1000 |
| `{stem}-detail-mobile.webp` | 800x500 |
| `{stem}-card-desktop.mp4` | 960x600 |
| `{stem}-card-mobile.mp4` | 640x400 |
| `{stem}-detail-desktop.mp4` | 1038x648 |
| `{stem}-detail-mobile.mp4` | 720x450 |
| `{stem}-poster-desktop.webp` | 1038x648 (first frame) |
| `{stem}-poster-mobile.webp` | 720x450 (first frame) |

Images produce the first four rows; videos (and GIFs, converted the same
way) produce the MP4 + poster rows.

Sizing never upscales: output size = `min(target, source size)`. If a 1x
source can't reach a target (e.g. a 1038x648 source asked for the
1600x1000 detail-desktop role), the output stays at native resolution and
`media:process`'s report flags it `needs higher-res source`.

Off-ratio sources (aspect outside 16:10 ± 1%) are skipped entirely and
listed in the report — never cropped or padded.

## Budgets and encoding

- WebP: quality starts at 82, steps down by 4 until the byte budget is met.
  Card and detail-desktop never go below quality 60; detail-mobile never
  goes below 70 (small UI text needs to stay legible). If the floor is hit
  and the file is still over budget, it's a warning, not a failure.
  Budgets: card ≤150KB, detail-desktop ≤300KB, detail-mobile ≤200KB.
  Posters reuse the budget of the WebP role with the same pixel size
  (poster-desktop ≈ detail-desktop's 300KB, poster-mobile ≈ detail-mobile's
  200KB) since the source spec didn't give posters their own budget.
- MP4: H.264 (`libx264`, main profile, `yuv420p`), 24fps, no audio,
  `-movflags +faststart`. CRF starts at 26 and steps up by 2 to a max of 34
  to hit the budget, then warns. Budgets: card ≤2MB desktop / ≤1MB mobile,
  detail ≤5MB desktop / ≤2.5MB mobile.
- Videos longer than 10 seconds have their **card** variants trimmed to the
  first 10 seconds (`media:process` prints a warning when this happens);
  detail variants keep the full length.

## Scripts

```bash
pnpm media:scan       # scan media-src/projects, write scripts/media-map.json, print a table
pnpm media:process    # scan + encode every output + regenerate src/data/project-media.ts
pnpm media:process --force   # re-encode even if outputs are newer than their source
pnpm media:validate   # verify every expected output exists, has exact dimensions,
                       # is within budget (warning only), and videos are
                       # H.264 + faststart + no audio. Exits non-zero on a hard failure.
```

`media:process` is idempotent: an output newer than its source is skipped
unless `--force` is passed. `media:validate` runs in CI (`.github/workflows/ci.yml`)
after `pnpm typecheck`.

Shared logic lives in `scripts/media-lib/`: `constants.mjs` (targets,
budgets, CRF/quality steps), `probe.mjs` (sharp/ffprobe wrappers),
`naming.mjs` (slug/stem normalization), `scan.mjs` (builds the media map),
`image-pipeline.mjs` / `video-pipeline.mjs` (encoders), `webp-budget.mjs`
(shared quality-stepping encoder), `manifest.mjs` (writes
`src/data/project-media.ts`), `report.mjs` (console output).

Requires `ffmpeg`/`ffprobe` on `PATH` (`brew install ffmpeg` on macOS;
GitHub's `ubuntu-latest` runners ship with it) and `sharp` (devDependency).

## The manifest

`src/data/project-media.ts` is generated — don't hand-edit it; run
`pnpm media:process` instead. It exports `projectMedia: Record<string,
ProjectMediaEntry>`, keyed by slug:

```ts
interface ProjectMediaEntry {
  slug: string;
  coverIndex: number;
  items: ProjectMediaItem[]; // image or video, in file order
}
```

Each item carries `alt` (a placeholder — see below), and paths for
`card`/`detail` × `desktop`/`mobile`; video items additionally carry
`poster`.

### Alt text

Alt text is auto-generated as `"{Project Title} screenshot {n} (placeholder
— review before shipping)"`, using the title already in
`src/content/projects/<slug>.ts` when it exists. These are explicitly
placeholders — review and replace with real descriptions before shipping,
per `CLAUDE.md`'s "no invented facts" rule.

### Consuming it in a component (not yet wired)

```tsx
import { projectMedia } from "@/data/project-media";

const item = projectMedia[slug].items[projectMedia[slug].coverIndex];

// image item
<picture>
  <source media="(max-width: 767px)" srcSet={item.card.mobile} />
  <img src={item.card.desktop} alt={item.alt} width={1038} height={648} />
</picture>

// video item
<video
  poster={item.poster.desktop}
  muted
  loop
  playsInline
  preload="none"
  src={isMobile ? item.card.mobile : item.card.desktop}
/>
```

`<source media="...">` only switches inside `<picture>`; a `<video>` has no
native per-breakpoint source, so picking `card.mobile` vs. `card.desktop`
needs a viewport check (e.g. a small `useMediaQuery` client hook), the same
place `ProjectMedia` already handles `prefers-reduced-motion`.

## Adding a new project's media

1. Drop files into `media-src/projects/<folder-name>/`, named
   `01.webp`, `02.webp`, ... (or `scroll.mp4` for a single video) in
   display order. Compose them at 16:10 already — the pipeline never
   crops or pads.
2. Run `pnpm media:scan` and check the printed table: real pixel size,
   inferred scale, off-ratio flag. Fix anything flagged before continuing.
3. Run `pnpm media:process`. Check the report for budget warnings and
   `needs higher-res source` flags — if a project's screenshots need to
   reach the 1600x1000 detail-desktop target, re-export at 2x.
4. Run `pnpm media:validate` to confirm every output is correct.
5. Review the new `alt` placeholders in `src/data/project-media.ts` and
   replace them with real descriptions.
