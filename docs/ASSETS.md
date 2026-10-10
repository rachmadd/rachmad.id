# Assets

Status key: **have** = Rachmad has it and will drop it in, **placeholder** = agent generates a stand-in, **tbd** = not decided.

| Path | What | Status | Notes |
|---|---|---|---|
| `public/avatar.webp` | Avatar, square, at least 400x400 | placeholder | Circle crop. Photo or illustration, undecided |
| `public/logos/quickbill.svg` | Company logo | have | Placeholder until swapped: grey rounded square with initials |
| `public/logos/1engage.svg` | Company logo | have | same |
| `public/logos/accelbyte.svg` | Company logo | have | same |
| `public/logos/moladin.svg` | Company logo | have | same |
| `public/logos/maybank.svg` | Company logo | have | same |
| `public/logos/voffice.svg` | Company logo | have | same |
| `public/cv/Rachmad-CV-en.pdf` | English CV | have | Download button |
| `public/cv/Rachmad-CV-id.pdf` | Indonesian CV | tbd | If missing, the ID button falls back to the English file |
| `public/media/projects/<slug>/` | Screenshots per project | have (most) | Name files `01.webp`, `02.webp`, ... in display order |
| `public/media/projects/quickbill-platform/scroll.webm` and `.mp4` | Scroll-through loop | tbd | Optional. Falls back to carousel |
| `public/media/concepts/quickbill-embedded-payment.{webm,mp4,jpg}` | Concept loop plus poster | placeholder | Exported from Claude Design |
| `public/media/concepts/accelbyte-multiplayer-service.{webm,mp4,jpg}` | same | placeholder | same |
| `public/media/concepts/maybank-digital-branch.{webm,mp4,jpg}` | same | placeholder | same |
| `public/og/og-en.png`, `og-id.png` | Open Graph image fallback | placeholder | Only if dynamic OG generation is not used |
| `src/app/icon.png` or `icon.svg` | Favicon | placeholder | Simple mark in accent on `bg` |

## Rules for placeholders

- Placeholder logos: grey (`#2a2a2f`) rounded square, company initials in `muted`, same dimensions as the real logos so nothing shifts when they are swapped.
- Placeholder screenshots: neutral dark rounded frame with the project name in `muted`, 16:10. Generate them in code or as simple SVG, not with stock images or gradients.
- Placeholder concept videos: a poster-only state with the project name. The `<video>` element is already wired, so adding the real file needs no code change.

## Preparing the real files

- Screenshots: export as WebP, about 1600px wide, under about 250 KB each. Crop out personal data (names, emails, account numbers, real customer data) and anything confidential before adding to the repo. For Quickbill, blur or replace real customer records.
- Maybank: no screenshots at all.
- Videos: WebM (VP9) and MP4 (H.264), no audio track, under about 1.5 MB, seamless loop, poster JPG from the best frame.
- Logos: SVG when possible. Check each company's usage terms before publishing its logo.
- Store originals outside the repo. Only optimized files go in `public/`.
