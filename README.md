# rachmad.id: project brief

This folder is the brief for building Rachmad's portfolio website with Claude Code. It contains no application code yet.

## Contents

| Path | Purpose |
|---|---|
| `CLAUDE.md` | Entry file the coding agent reads first: rules, stack, commands |
| `docs/KICKOFF_PROMPT.md` | The prompt to paste into Claude Code to start |
| `docs/ARCHITECTURE.md` | Stack, routes, folder structure, technical decisions |
| `docs/DESIGN.md` | Design tokens, layout, components, motion |
| `docs/CONTENT.md` | Content schema, companies, projects, voice rules |
| `docs/ASSETS.md` | Asset manifest and what is still placeholder |
| `docs/SEO.md` | Metadata, JSON-LD, performance targets |
| `docs/DEPLOYMENT.md` | Vercel, GitHub Actions, domain setup |
| `docs/ROADMAP.md` | Phased plan with acceptance criteria |
| `design/README.md` | Where to put the exported designs |
| `.github/workflows/ci.yml` | Lint, typecheck, test, build |

## How to start

1. Put the Claude Design export into `design/` (see `design/README.md`).
2. Put available assets (logos, avatar, screenshots, CV) into the paths listed in `docs/ASSETS.md`. Missing ones can stay as placeholders.
3. Create a GitHub repo, copy this folder in as the repo root, then `git init`, commit and push.
4. Open the folder in Claude Code and paste the prompt from `docs/KICKOFF_PROMPT.md`.
5. Review each phase report before approving the next phase.
