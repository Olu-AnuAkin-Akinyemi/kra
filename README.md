# KemKnightRanger Academy

An immersive academy rooted in an ancient philosophy known as Ma'at — where strategic thinking, STEAM education, ancestral inquiry, and earned advancement converge for young scholars.

---

## Stack

- **HTML/CSS/JS** — Vanilla, no framework
- **Build** — [Vite](https://vitejs.dev/) v5
- **Tests** — [Vitest](https://vitest.dev/) v1 + happy-dom


## Project Structure

```
/
  index.html              # Single-page entry point (Vite)
  CLAUDE.md               # Project identity, philosophy, and design decisions — read first
  SEO-COPY-IMPROVEMENTS.md  # SEO/GEO strategy and phase swap checklists
  memory.md               # Session-by-session log of decisions and learnings
  public/                 # Static assets copied to build root (robots.txt, sitemap.xml, og-image.jpg)
  src/
    css/
      styles.css          # All styles — global + per-section
    js/
      main.js             # App orchestration
      core/               # Pure logic — no DOM, no side effects (unit-tested)
        starLogic.js
        navLogic.js
        scrollLogic.js
      ui/                 # DOM manipulation and event binding
        starField.js
        scrollReveal.js
        formHandler.js
        navHighlight.js
        scrollToTop.js
  .github/
    copilot-instructions.md  # AI coding conventions for this codebase
    agents/                  # Custom agent modes (frontend, backend, planning, etc.)
  .claude/
    accessibility-compliance.md
```

## Commands

```bash
npm install       # Install dependencies
npm run dev       # Start Vite dev server
npm run build     # Production build → dist/
npm run preview   # Preview production build locally
npm test          # Run Vitest unit tests
```

## Campus Sections

The site is structured as a campus map — each section has a fixed ID:

| ID | Campus Name | Content |
|---|---|---|
| `#gates` | The Gates | Hero / arrival |
| `#courtyard` | The Courtyard | About / philosophy / Six C Framework |
| `#halls` | The Halls | Programs overview |
| `#progression` | The Path | Badge + MTG sleeve hierarchy |
| `#archives` | The Archives | Lineage Research Program |
| `#canon` | The Canon | Anime & Animation curriculum |
| `#maproom` | The Map Room | Vision / roadmap |
| `#enrollment` | Enrollment | Email capture / teacher recruitment |

## Architecture

The JS layer follows a strict separation of concerns:

| Layer | Location | Rule |
|---|---|---|
| Core | `src/js/core/` | Pure logic — no DOM, unit-testable |
| UI | `src/js/ui/` | DOM manipulation + event binding |
| App | `src/js/main.js` | Orchestration — wires core + UI |
| Data | `src/js/data/` | Fetch wrappers / persistence (future) |

## Before You Deploy

- Replace all `kemknightrangeracademy.com` placeholders in `index.html` with the live domain
- Add `public/og-image.jpg` (1200×630 JPG — required for social sharing previews)
- Add favicon suite: `favicon.svg`, `favicon.ico`, `apple-touch-icon.png`, `site.webmanifest`
- Update `<lastmod>` in `public/sitemap.xml` to the deploy date

## Contact

**Founder:** Olu "AnuAkin" Akinyemi — olutakinyemi@gmail.com
