---
applyTo: "**"
---
name: kra-vanilla-architect
description: KemKnightRanger Academy (KRA) — coding conventions and architecture guide for AI code assistants. Vanilla JS + Vite + Vitest. Read CLAUDE.md first for project identity, philosophy, language rules, and design decisions.

# KRA — Coding Guide for AI Assistants

> **Read `CLAUDE.md` first.** This file covers code-level conventions only. Identity, philosophy, language rules, and the progression system live in `CLAUDE.md`.

---

## Project Context

KemKnightRanger Academy — single-page landing site for an immersive academy experience.  
**Stack:** Vanilla HTML5 + CSS3 + ES6 JS | **Build:** Vite | **Tests:** Vitest  
No React, Vue, CSS-in-JS, or heavy UI frameworks.

---

## File Structure

```
/
  index.html                  # Vite entry point — single page
  package.json
  CLAUDE.md                   # Project identity, decisions, design system
  public/                     # Static assets (robots.txt, OG image, sitemap)
  scripts/
    optimize-images.mjs       # sharp-based image pipeline
  src/
    css/
      styles.css              # All styles — global + per-section
    js/
      main.js                 # App orchestration — wires core + UI + data
      core/
        *.js                  # Pure logic only — no DOM, no side effects
      ui/
        *.js                  # DOM manipulation and event binding
      data/
        *.js                  # Fetch wrappers / persistence adapters when backend exists
```

---

## Design Tokens — CSS Custom Properties

**Route all colors through these tokens.** Never hardcode hex values in component styles.

```css
/* Backgrounds (darkest to lightest) */
--ink:       #0C0E18;   /* Page background */
--deep:      #101422;   /* Section backgrounds */
--chamber:   #161C2E;   /* Card backgrounds */
--panel:     #1C2438;   /* Panel surfaces */

/* Accent */
--ember:     #C17D2A;   /* Primary accent — warm amber/gold */
--ember-lt:  #DFA455;   /* Hover states */
--ember-dim: #7A4E18;   /* Subtle ember accents */
--terra:     #7C3B1E;   /* Secondary accent — terracotta */

/* Text */
--parch:     #E8DFC8;   /* Primary text — warm parchment */
--parch-dim: #B8A882;   /* Secondary text */
--parch-dk:  #7A6E56;   /* Muted text / labels */

/* Highlights */
--star:      #C8D8F0;   /* Star field / accent highlights */
--star-dim:  #6888B0;   /* Subdued star accents */
```

---

## Typography

| Role | Font | Rule |
|---|---|---|
| Display / Headings | Cinzel | Section titles |
| Hero / Ceremonial | Cinzel Decorative | Hero title **only** — do not use elsewhere |
| Body | Cormorant Garamond | All body copy |
| UI / Labels | Jost (200–400 weight) | Nav, tags, buttons |

---

## Layout Conventions

- **Page gutters:** Always `var(--page-gutter)`. Never hardcode `48px` or `28px`.
  - Desktop: `48px` | ≤980px: `28px` (set on `:root` via media query)
- **Breakpoints:** 980px (tablet) and 640px (mobile) — grids adapt to `1fr` stacks
- **Responsive:** Mobile-first. All complex grid layouts must degrade to single-column under 980px

### Campus Section IDs

These IDs are fixed — they are the campus map. Never rename them.

| ID | Campus Name | Content |
|---|---|---|
| `#gates` | The Gates | Hero / arrival |
| `#courtyard` | The Courtyard | About / philosophy / origin story |
| `#halls` | The Halls | Programs overview |
| `#progression` | The Path | Badge + MTG sleeve hierarchy |
| `#archives` | The Archives | Lineage Research Program |
| `#canon` | The Canon | Anime & Animation curriculum |
| `#maproom` | The Map Room | Vision / roadmap / crowdfunding teaser |
| `#enrollment` | Enrollment | Email capture / teacher recruitment |

---

## JavaScript Conventions

### Naming
- **PascalCase:** class names, component names
- **camelCase:** variables, functions, methods
- **_underscore prefix:** private class members
- **ALL_CAPS:** constants

### Architecture — Separation of Concerns

| Layer | Location | Rule |
|---|---|---|
| Core | `js/core/` | Pure logic. No DOM, no side effects. Unit-testable. |
| UI | `js/ui/` | DOM manipulation + event binding. Delegates to core. |
| App | `js/main.js` | Orchestration — connects core + UI + data. |
| Data | `js/data/` | Fetch wrappers, localStorage. |

Current examples:
- `js/core/starLogic.js` — star property generation
- `js/core/navLogic.js` — active section resolution
- `js/core/scrollLogic.js` — scroll-to-top visibility logic
- `js/ui/starField.js` — DOM rendering for stars
- `js/ui/scrollReveal.js` — IntersectionObserver wiring
- `js/ui/formHandler.js` — UI-only form state changes until backend exists
- `js/ui/navHighlight.js` — nav color updates from active section state
- `js/ui/scrollToTop.js` — button visibility and click behavior

If no backend exists yet, keep the feature UI-only rather than pretending persistence is live.

### Pure Functions First

Write pure functions before impure ones. Pure functions go in `core/` and are tested with Vitest.

### Interaction Patterns

- **Scroll reveals:** `IntersectionObserver` on `.reveal` elements — never `scroll` event listeners
  - Animation: `translateY(18px) → 0`, `opacity: 0 → 1`
- **Animations:** `transform` and `opacity` only. Never animate `width`, `height`, `top`, `left`, or other layout-triggering properties. Target 60fps.
- **Event delegation:** Attach listeners to parents, not individual child nodes.
- **Debounce / throttle:** Wrap all resize, scroll, and search handlers.

### Error Handling

- `try/catch` for all async operations
- Log errors with contextual information

### JSDoc for Type Documentation

```js
/**
 * @param {string} theme - 'dark' | 'light'
 * @returns {void}
 */
function setTheme(theme) { ... }
```

---

## CSS Conventions

- All color values through CSS custom properties — no hardcoded hex in component rules
- `[data-theme="light"]` overrides must apply instantly across the full UI — all tokens must be reroutable
- Animations: `transform` + `opacity` only. Use `will-change: transform` sparingly (only on confirmed-animated elements)
- `IntersectionObserver` drives all `.reveal` class animations — not scroll event listeners

---

## Visual Identity Elements

These are present in the hero and must not be removed or broken by refactors:

- **Celestial ring** — animated Kemetic SVG, slow rotation, very low opacity
- **Timbuktu arch** — earthen arch silhouette behind hero text, ~6% opacity
- **Star field** — 120 JS-generated dots with randomized twinkle animation
- **Grain overlay** — full-page SVG noise texture, `z-index: 999`, `pointer-events: none`

---

## Image Optimization

Full spec: `image-optimization-spec.md`.

- **Tool:** `node scripts/optimize-images.mjs` — never use `cwebp`
- **Non-destructive:** Output sized variants (`-400`, `-800`, `-1200`) alongside originals. Never overwrite source files.
- **No re-compression:** Always start from the original — never compress an already-compressed image.
- **Responsive delivery:** `srcset` + `sizes` on all `<img>` tags. Gallery overlay JS swaps to `-1200` variant.
- **Quality:** q80 for all images (collages, art, professional photography)
- **Lazy loading:** All below-fold images require `loading="lazy"`
- **Formats:** WebP primary; AVIF + `<picture>` fallback planned (Phase 2)
- **Alpha channels:** PNG → WebP: verify `channels: 4` in output; use `alphaQuality: 100`

---

## HTML Standards

- Semantic elements throughout: `<nav>`, `<section>`, `<article>`, `<header>`, `<footer>`
- Inline SVG for icons — no icon font dependencies
- Every `<img>`: `alt` attribute required, `loading="lazy"` for below-fold, `srcset` + `sizes` set
- Section IDs must match the campus map table above

---

## Testing Strategy

- **Unit tests:** Vitest (`*.test.js`) — pure `core/` functions only
- **Integration:** Keep UI layer thin so test coverage focuses on core logic and state orchestration
- No DOM testing — UI logic stays thin and delegates down
