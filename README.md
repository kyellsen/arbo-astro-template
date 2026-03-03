# Arbo Astro Template

A modern, static web template built with **Astro**, **Tailwind CSS v4**, and **DaisyUI v5** — optimized for performance, SEO, and the Arbo Corporate Identity.

> 🤖 **AI Agent?** Read **[AGENTS.md](AGENTS.md)** for rules and conventions.

## 🚀 Project Structure

```text
/
├── public/               # Static assets (images, favicon)
├── src/
│   ├── components/       # Reusable UI components (PascalCase.astro)
│   ├── layouts/          # Page wrappers (Layout.astro)
│   ├── pages/            # File-based routing (index.astro)
│   └── styles/           # Global CSS (global.css)
├── scripts/
│   ├── common.sh         # Shared shell utilities (logging, helpers)
│   └── *.sh              # Per-recipe scripts (dev, build, qa, etc.)
├── justfile              # Task runner (just --list for all commands)
├── AGENTS.md             # AI agent rules (single source of truth)
├── CLAUDE.md             # Redirect → AGENTS.md
├── .gemini/              # Redirect → AGENTS.md (for Gemini/Cloud Code)
├── .cursorrules          # Redirect → AGENTS.md (for Cursor)
└── package.json
```

## 🛠 Tech Stack

| Domain  | Technology                                                                     |
| ------- | ------------------------------------------------------------------------------ |
| Core    | [Astro](https://astro.build) (Static Site Generation)                          |
| Styling | [Tailwind CSS v4](https://tailwindcss.com) + [DaisyUI v5](https://daisyui.com) |
| Fonts   | [Geist](https://vercel.com/font) & Geist Mono via Fontsource                   |
| Package | `pnpm`                                                                         |
| Tasks   | `just` task runner                                                             |

## 🧞 Commands

All commands are run from the project root via [`just`](https://github.com/casey/just):

| Command        | Action                                                  |
| :------------- | :------------------------------------------------------ |
| `just setup`   | Install dependencies + verify hooks                     |
| `just dev`     | Start local dev server at `localhost:4321`              |
| `just build`   | Build production site to `./dist/`                      |
| `just preview` | Preview production build locally                        |
| `just check`   | Run ESLint + Prettier check (read-only)                 |
| `just fix`     | Auto-fix lint errors + format all files                 |
| `just qa`      | Full QA: lint + format check + build                    |
| `just clean`   | Remove `dist/`, `.astro/` (`--all` for `node_modules/`) |
| `just doctor`  | Check environment health                                |

## 📚 Learn More

- [Astro Documentation](https://docs.astro.build)
- [Tailwind CSS v4 Docs](https://tailwindcss.com/docs)
- [DaisyUI Components](https://daisyui.com/components)
