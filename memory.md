# KRA — Session Memory Log

> Running log of session-by-session learnings, patterns, and decisions. Update at the end of every working session. For durable decisions, also update `CLAUDE.md`.

---

## Format

```
### YYYY-MM-DD — [Brief session description]
**Done:** What was built or changed.
**Learned:** Patterns, gotchas, or non-obvious behavior discovered.
**Decisions:** Any choices made that aren't yet in CLAUDE.md.
**Next:** What should happen next session.
```

---

### 2026-05-22 — Project docs audit and setup

**Done:**
- Reviewed CLAUDE.md — confirmed it is comprehensive and accurate.
- Rewrote `.github/copilot-instructions.md` from a generic vanilla-JS template to a full KRA-specific coding guide. Now includes design tokens, campus section IDs, CSS conventions, interaction patterns, and visual identity elements.
- Removed stale "Current Output Files" section from CLAUDE.md (was referencing `/mnt/user-data/outputs/` — a Claude.ai artifact path, not a real local path).
- Created this `memory.md` file (was listed as a future build target in CLAUDE.md).

**Learned:**
- The project currently has only two files at root: `CLAUDE.md` and `index.html`. The full src/ structure described in CLAUDE.md may not yet be built out locally — verify at start of next coding session.
- `kra-website.html` and `KRA_Curriculum_Additions.docx` were generated in a prior Claude.ai session and are not in this local repo.

**Decisions:**
- Output file locations removed from CLAUDE.md rather than updated — file locations belong in git history or session notes, not project memory.
- copilot-instructions.md fully rewritten (not just amended) because the generic content had zero KRA context.

**Next:**
- Verify local project structure matches the file tree in CLAUDE.md / copilot-instructions.md.
- If `index.html` is a stub, begin scaffolding the single-page site per the architecture.
- Set up Vite + Vitest if not already configured (`package.json` check).

---

### 2026-05-22 — Phase 2A/2B, instruction alignment, Six C Framework, accessibility, SEO

**Done:**
- Phase 2A: Refactored all JS into core/ui/data architecture. Created `src/js/core/` (starLogic, navLogic, scrollLogic), `src/js/ui/` (starField, scrollReveal, formHandler, navHighlight, scrollToTop), updated `src/js/main.js` orchestration.
- Instruction alignment: Rewrote all 5 `.github/agents/` files (backend, frontend, bug-fix, code-review, planning) — they were for a completely different project ("Get Yo A$$ Outside"). Fixed `.claude/accessibility-compliance.md` broken reference. Updated `.github/copilot-instructions.md` file structure diagram.
- Six C Framework added to `#courtyard` section of `index.html` and documented in `CLAUDE.md`.
- Accessibility fixes: Moved inline `style=` attrs on STEAM pills to `.steam-pill-key` CSS class; added `for`/`id` to all form label/input pairs; added `-webkit-backdrop-filter` Safari prefix to nav.
- Installed `terser` devDependency — `vite.config.js` requires it, build was failing.
- Phase 2B: Wrote Vitest unit tests for all three `core/` modules — 27 tests, all passing. Files: `scrollLogic.test.js` (6), `navLogic.test.js` (9), `starLogic.test.js` (12).
- SEO: Rewrote `SEO-COPY-IMPROVEMENTS.md` for KRA (was for øLu AnuAkin music project). Implemented all available SEO items: `<meta description>`, canonical, OG tags, Twitter Card, favicon `<link>`s (TODO: add actual files), JSON-LD `EducationalOrganization` schema with 4 programs, `.sr-only` h1 with keyword text, demoted visual `h1.gates-title` to `p.gates-title`, added `.sr-only` CSS utility.
- Created `README.md` and `.gitignore`.

**Learned:**
- `npm run build` fails silently without `terser` when `vite.config.js` sets `minify: 'terser'` — always verify devDependencies match config.
- `h1` demoted to `p` for visual hero headline; `sr-only` h1 carries SEO text. This pattern keeps visual design free from keyword constraints while giving crawlers an accurate identity signal.
- `.github/` and `.claude/` dirs should remain in version control — they encode AI assistant context that all collaborators inherit.

**Decisions:**
- `foundingDate: "2025"` in JSON-LD (matches footer copyright © 2025).
- Domain placeholder `kemknightrangeracademy.com` used throughout SEO until actual domain is confirmed.
- OG image (`public/og-image.jpg`) and favicon suite deferred — link tags in place, files need to be created.

**Next:**
- Create `public/og-image.jpg` (1200×630, KRA visual identity, `.jpg` not `.webp`).
- Create favicon suite: `favicon.svg`, `favicon.ico`, `apple-touch-icon.png`, `site.webmanifest`.
- Confirm actual domain and do global find-replace of `kemknightrangeracademy.com` placeholder.
- Update `sitemap.xml` `<lastmod>` to today's date.
- Review whether agent roles are too broad or too narrow for collaborative work.
