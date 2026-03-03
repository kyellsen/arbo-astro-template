# AGENTS.md

> **CRITICAL BUG WORKAROUND (VS Code / Antigravity Shell Integration):**
> You suffer from a known VS Code / Antigravity shell integration bug where reading stdout directly from the terminal hangs indefinitely.
>
> **RULE:** Whenever you run a terminal command, you **MUST** pipe the output to a unique named file in `/tmp` (including a datetime stamp) and then read that file to get the results.
>
> **Example:** `ls -la > /tmp/out_20241025_120000.txt` (then read `/tmp/out_20241025_120000.txt`)

> **AUTHORITY:** This document is the **single source of truth** for all AI agents working on this repository. The following supplementary redirects point here — never the reverse:
>
> - `CLAUDE.md` → redirect for Claude Code
> - `.gemini/styleguide.md` → redirect for Google Gemini / Cloud Code
> - `.cursorrules` → redirect for Cursor

👤 **Human?** Read **[README.md](README.md)** for overview and project setup.

## 1. Core Directive: Performance & Corporate Identity (Arbo CI)

This repository is a modern, static web project built for maximum performance and SEO.

- **Primary Directive:** We build fast, static HTML pages. Do not introduce client-side JavaScript frameworks (like React or Vue) unless absolutely necessary. Rely on standard HTML, CSS, and Astro's Zero-JS architecture.
- **Tech Stack:** Astro (Static Site Generation), Tailwind CSS v4 (via Vite plugin), and DaisyUI v5.
- **Design System (Arbo CI):** Strict adherence to the established Corporate Identity. Use `Geist` and `Geist Mono` fonts (loaded via `@fontsource-variable` in `Layout.astro`).
- **TODO — Arbo CI Colors:** Define the Arbo CI color palette in `OKLCH` format within `src/styles/global.css` and/or as a DaisyUI theme.
- **Component Reusability:** Favor small, reusable `.astro` components (e.g., `ArboCard.astro`) over massive, monolithic page files.

## 2. Language Policy

- **Repository Content:** **ENGLISH ONLY** (Code, Variables, Commits, Internal Docs).
- **Chat Output:** **GERMAN ONLY** (Interaction with User).
- **Website Content (UI/HTML):** Mostly **GERMAN** (depending on the specific site, e.g., Baumpflege OH, Kyelljensen.de). Hardcoding UI strings in the `.astro` templates is expected and allowed for these static landing pages.

## 3. Naming Conventions

- **Astro Components:** `PascalCase.astro` (e.g., `HeroSection.astro`, `ArboCard.astro`).
- **Pages / Routes:** `kebab-case.astro` (e.g., `unsere-leistungen.astro`).
- **CSS Classes:** `kebab-case` (e.g., `.arbo-card`, `.text-arbo-primary`).
- **Variables/JS:** `camelCase` (e.g., `pageTitle`, `fetchData`).

## 4. Documentation & Filesystem

| Path                    | Role                                           |
| ----------------------- | ---------------------------------------------- |
| `README.md`             | Project overview & quickstart                  |
| `AGENTS.md`             | Agent rules (this file, SoT)                   |
| `CLAUDE.md`             | Redirect → `AGENTS.md` (for Claude Code)       |
| `.gemini/styleguide.md` | Redirect → `AGENTS.md` (for Gemini/Cloud Code) |
| `.cursorrules`          | Redirect → `AGENTS.md` (for Cursor)            |
| `justfile`              | Task runner recipes (delegates to `scripts/`)  |
| `scripts/common.sh`     | Shared shell utilities (logging, helpers)      |
| `scripts/*.sh`          | Per-recipe scripts (dev, build, qa, etc.)      |
| `src/pages/`            | File-based routing (e.g., `index.astro`)       |
| `src/layouts/`          | Global page wrappers (e.g., `Layout.astro`)    |
| `src/config/seo.ts`     | Central SEO defaults & per-page overrides      |
| `src/components/`       | Reusable UI components (incl. `SEOHead.astro`) |
| `src/styles/`           | Global CSS entry points (e.g., `global.css`)   |
| `public/`               | Static assets (images, favicon, `robots.txt`)  |

**Rules:**

- `public/` is strictly for static assets that do not need processing. Do NOT place CSS here.
- `src/styles/global.css` is the single source of truth for Tailwind v4 imports and DaisyUI theme configurations.
- Package manager is **`pnpm`**. Never use `npm install` or `yarn`.

## 5. Libraries & Ecosystem

| Domain   | Use                                                                          |
| -------- | ---------------------------------------------------------------------------- |
| Core     | `astro`                                                                      |
| Styling  | `tailwindcss` (v4), `@tailwindcss/vite`, `daisyui` (v5)                      |
| Icons    | SVG directly inline or via `astro-icon` (if installed)                       |
| Fonts    | `@fontsource-variable/geist` & `@fontsource-variable/geist-mono`             |
| Markdown | Astro's native Markdown/MDX support. **TODO:** add `@tailwindcss/typography` |
| Linting  | `eslint` + `eslint-plugin-astro`, `prettier` + `prettier-plugin-astro`       |
| Hooks    | `husky` + `lint-staged` (pre-commit: ESLint + Prettier)                      |
| Tasks    | `just` task runner + `scripts/*.sh` (shared base: `scripts/common.sh`)       |

## 6. Tailwind CSS v4 — CSS-first Configuration

- **No `tailwind.config.js`!** Tailwind v4 uses **CSS-first configuration**. All configuration lives in `src/styles/global.css`.
- Use `@theme { }` blocks for design tokens (fonts, colors, spacing).
- Use `@plugin "daisyui"` to load DaisyUI.
- Never create a `tailwind.config.js` or `tailwind.config.ts` file.

## 7. DaisyUI v5 — Theme & Component Rules

- **Active Theme:** Set via `data-theme="arbo-light"` on `<html>` in `Layout.astro`.
- **Component Classes:** Use DaisyUI component classes freely (e.g., `btn`, `card`, `badge`, `modal`, `drawer`). All classes from the [DaisyUI v5 docs](https://daisyui.com/components) are allowed.
- **Custom Themes:** Define custom DaisyUI themes inside `src/styles/global.css` using CSS variables.
- **Modifier Pattern:** Use DaisyUI modifiers (e.g., `btn-primary`, `btn-lg`, `card-bordered`) over custom CSS.

## 8. Image Optimization

- **Always use `astro:assets`** for images in production. Import images in the frontmatter and use Astro's `<Image />` component for automatic optimization (WebP, lazy loading, width/height).

  ```astro
  ---
  import { Image } from "astro:assets";
  import heroImg from "../assets/hero.jpg";
  ---

  <Image src={heroImg} alt="Descriptive alt text" />
  ```

- **`public/`** is only for assets that must **not** be processed (e.g., `favicon.ico`, `robots.txt`).
- **Never** use raw `<img>` tags with paths to `public/` for content images — always prefer `astro:assets`.
- Store source images in `src/assets/` (create this folder as needed).

## 9. Accessibility (a11y)

All pages **must** meet **WCAG 2.1 AA** standards:

- Every `<img>` / `<Image>` **must** have a meaningful `alt` attribute (or `alt=""` for purely decorative images).
- Use **semantic HTML**: `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>`, `<footer>`.
- Interactive elements must be **keyboard-accessible** (`tabindex`, focus styles).
- Maintain sufficient **color contrast** (minimum 4.5:1 for text, 3:1 for large text).
- Use **ARIA attributes** only when native HTML semantics are insufficient.
- Every `<a>` that opens externally must include `rel="noopener noreferrer"` and ideally indicate external linking.
- Form inputs must have associated `<label>` elements.

## 10. SEO — Infrastructure

> [!CAUTION]
> **TODO — GLOBAL NOINDEX ACTIVE:** The entire site is currently blocked from search engine indexing via two mechanisms:
>
> 1. **`src/components/SEOHead.astro`** — A hard-coded `<meta name="robots" content="noindex, nofollow">` tag is rendered on **every** page (the original per-page `noindex` prop is commented out).
> 2. **`public/robots.txt`** — `Disallow: /` blocks all crawlers.
>
> **When going live**, revert both files to their original state (the old config is preserved as comments in each file).

SEO metadata is managed centrally via `src/config/seo.ts` and rendered by `src/components/SEOHead.astro`.

**Architecture:**

- **`src/config/seo.ts`** — Single source of truth for site-wide defaults (`name`, `defaultTitle`, `titleTemplate`, `defaultDescription`, `siteUrl`, `locale`, `defaultOgImage`) and per-page SEO overrides (`pageSeo` map).
- **`src/components/SEOHead.astro`** — Renders all meta tags in `<head>`. Automatically resolves defaults from the `pageSeo` map based on the current path. Accepts optional props to override any default.
- **`src/layouts/Layout.astro`** — Includes `<SEOHead>` and forwards SEO props (`title`, `description`, `ogImage`, `canonicalUrl`, `noindex`).
- **`@astrojs/sitemap`** — Generates `sitemap-index.xml` at build time. Internal pages (e.g., `/colors`) are filtered out.
- **`public/robots.txt`** — Allows all crawlers, disallows internal pages, references the sitemap.
- **JSON-LD** — `Organization` / `LocalBusiness` schema is output on the homepage; configurable in `seo.ts`.

**Per-page meta tags rendered:**

```html
<title>{title} | Arbosphere</title>
<meta name="description" content="{description}" />
<link rel="canonical" href="{canonicalUrl}" />

<!-- Open Graph -->
<meta property="og:title" content="{title}" />
<meta property="og:description" content="{description}" />
<meta property="og:type" content="website" />
<meta property="og:url" content="{canonicalUrl}" />
<meta property="og:image" content="{ogImage}" />
<meta property="og:locale" content="de_DE" />
<meta property="og:site_name" content="Arbosphere" />

<!-- Twitter -->
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="{title}" />
<meta name="twitter:description" content="{description}" />
<meta name="twitter:image" content="{ogImage}" />
```

**Additional SEO rules:**

- One `<h1>` per page, proper heading hierarchy (`h1` → `h2` → `h3`).
- Use `<a>` with descriptive link text (never "click here").

## 11. Linting, Formatting & Git Hooks

- **ESLint:** Configured via `eslint.config.mjs` with `eslint-plugin-astro`.
- **Prettier:** Configured via `.prettierrc` with `prettier-plugin-astro`.
- **Pre-commit Hook:** `husky` + `lint-staged` runs ESLint + Prettier automatically on every commit.

**Agent rules:**

1. Before finishing any task, run `just check`.
2. Fix all lint errors (`just fix`) before committing.
3. Never disable ESLint rules without explicit user approval.

| Command       | Action                                                  |
| :------------ | :------------------------------------------------------ |
| `just check`  | Run ESLint + Prettier check (read-only)                 |
| `just fix`    | Auto-fix ESLint errors + format all files               |
| `just qa`     | Full QA: lint + format check + build                    |
| `just doctor` | Check environment health (node, pnpm, just)             |
| `just setup`  | Install deps + verify hooks                             |
| `just clean`  | Remove `dist/`, `.astro/` (`--all` for `node_modules/`) |

## 12. Commit Conventions

- **Language:** Commit messages in **ENGLISH**.
- **Format:** [Conventional Commits](https://www.conventionalcommits.org/):
  ```
  <type>(<scope>): <short description>
  ```
- **Types:** `feat`, `fix`, `docs`, `style`, `refactor`, `perf`, `test`, `chore`, `ci`.
- **Examples:**
  - `feat(seo): add Open Graph meta tags to Layout`
  - `fix(a11y): add missing alt attributes to hero images`
  - `chore(deps): update DaisyUI to v5 stable`

## 13. Build & Deployment Rules

1.  **Output Mode:** The project is configured for `output: 'static'` (SSG). Do not introduce SSR (Server-Side Rendering) dependencies or Node.js built-ins in the frontend code.
2.  **QA Checks:** Before finalizing changes, run `just qa` (equivalent to lint + format check + build).

## 14. Environment Variables

- **Prefix Rule:** Variables that must be available to the client-side browser **MUST** use the `PUBLIC_` prefix (e.g., `PUBLIC_API_URL`).
- **Secret Rule:** Variables without `PUBLIC_` are only available at build time (server-side). Never expose secrets in `.astro` HTML templates.
