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

## 🏗️ Multi-Brand Workflow (Clone & Trim)

This repository serves as a **Template** for deploying multiple distinct websites under the same Corporate Identity (CI) but with completely different content, audiences, and routing (e.g., `baumpflege-oh.de`, `kyelljensen.de`, `arbosphere.de`, `silvasonic.de`).

To avoid the overhead and complexity of a monorepo, this project strictly follows a **"Clone & Trim"** approach. It is the perfect balance between zero-config deployments (Cloudflare Pages) and DRY infrastructure.

### How to use this template for a new site:

1. **Clone the Template:** On GitHub, click "Use this template" to create a new repository (e.g., `silvasonic-web`).
2. **Set the Theme:** Open `src/styles/global.css`, uncomment the specific brand theme (e.g., _Silvasonic_ `silva-light` / `silva-dark`), and update `site.config.ts` to use it.
3. **Configure the Site:** Open `src/site.config.ts` and set the core infrastructure (Brand Name, URL, Language, Navbar Links, Contact Info). This is your Single Source of Truth.
4. **Trim the Fat:** Delete any pages or components you don't need for this specific brand. (e.g., if it's a simple landing page, delete `src/pages/services.astro` and `src/content/projects/`).
5. **Update Content:** Replace the mock content in `src/data/*.ts` (`hero.ts`, `about.ts`, etc.) with the actual brand copy.
6. **Deploy:** Connect the new repository to Cloudflare Pages. Astro builds it automatically. Done.

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
