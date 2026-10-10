# Design export

Put everything exported from Claude Design in this folder. The coding agent treats it as the visual source of truth (see `CLAUDE.md`, "Source-of-truth order").

## What to put here

```
design/
├── README.md                  this file
├── frames/
│   ├── direction-chosen/      the direction Rachmad picked
│   │   ├── desktop-1440.png   full-page frame (or per-section frames)
│   │   ├── mobile-390.png
│   │   ├── project-page-desktop.png
│   │   ├── project-page-mobile.png
│   │   ├── project-modal.png
│   │   └── timeline-desktop.png, timeline-mobile.png   close-ups of the S-curve
│   └── direction-rejected/    optional, for reference only. Agent must ignore these
├── tokens/                    exported colors, type scale, spacing, radii (JSON, CSS or screenshot)
├── components/                nav, timeline node, project card (screenshot and concept), pill, button
├── concepts/                  the three concept-card loops (source files from Claude Design)
└── notes.md                   anything the export does not show: chosen fonts, font sizes, what is final
```

If the export is a single HTML or zip, unzip it into `design/export/` and keep the same idea: the agent reads whatever is here.

## notes.md template (fill in)

```
Chosen direction: <name or number>
Fonts: <heading font>, <body font>, <mono font if any>
Final frames: <list>
Rough frames (guidance only): <list>
Differences from docs/DESIGN.md that the export wins on: <list>
Things I dislike in the export and want changed: <list>
```

## How the agent should use this folder

1. Study the chosen direction's frames before writing any UI code.
2. Copy exact values (colors, font sizes, radii, spacing) from tokens or measure from frames. Do not guess.
3. Where the export is missing a state (hover, focus, empty, Indonesian text overflow, modal), follow `docs/DESIGN.md` and note the decision in `docs/DECISIONS.md`.
4. Never copy the exported HTML or CSS wholesale into `src/`. Rebuild the UI from the architecture in `docs/ARCHITECTURE.md`; use the export as a visual reference.
5. Concept-card loops are exported to `public/media/concepts/` (see `docs/ASSETS.md`). Convert to WebM and MP4 with posters if they arrive in another format.
