# Kickoff prompt for Claude Code

Paste everything inside the block below into Claude Code, run from the repo root.

```
You are building the personal portfolio website rachmad.id. This repo currently holds
the project brief only.

Start by reading, in this order: CLAUDE.md, docs/ARCHITECTURE.md, docs/DESIGN.md,
design/README.md, docs/CONTENT.md, docs/ASSETS.md, docs/SEO.md, docs/DEPLOYMENT.md,
docs/ROADMAP.md. Then open everything inside design/ and study the exported designs
(desktop and mobile frames, tokens, components, concept-card animations).

Before writing any code, reply with:
1. A short summary of what you understood (5 lines max).
2. Any conflicts you found between the design export and docs/DESIGN.md, and which one
   you will follow.
3. Anything missing or ambiguous that blocks Phase 0 or Phase 1. Do not ask about
   things that are already marked as placeholder in docs/ASSETS.md or docs/CONTENT.md.
4. The versions of Node, pnpm, Next.js, Tailwind and next-intl you plan to install.

If nothing blocks you, continue straight into Phase 0 without waiting.

Then work through docs/ROADMAP.md one phase at a time. At the end of each phase:
run pnpm lint, pnpm typecheck and pnpm build, fix what fails, then report in this
format: what was built, what differs from the design and why, placeholders still in
use, and what you need from me. Stop and wait for my go-ahead before starting the
next phase.

Rules that matter most (full list in CLAUDE.md): dark only, one red accent used for
non-text elements only, everything rounded, no gradients except the fixed bottom
vignette, subtle motion that respects prefers-reduced-motion, every string available
in English and Indonesian, no invented facts or numbers, and no real bank internals in
the Maybank project.
```

## Notes for Rachmad

- Phase 0 to 2 can run with no real content. Placeholders are expected.
- If the design export is incomplete, tell the agent which frames are final and which are rough. It will treat rough frames as guidance only.
- Re-run the same prompt in a fresh session if the context gets long. CLAUDE.md and the docs carry all the state.
