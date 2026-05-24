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

---

### 2026-05-24 — D1 production verification & binding-bug workaround

**Done:**
- Diagnosed and fixed production 500s on `POST /api/submit` and `GET /api/admin`. Both were caused by `env.DB` being undefined at runtime — the D1 binding set in the Cloudflare dashboard was not propagating to the Pages Functions runtime, even after delete/re-add on Production scope and a fresh deploy.
- Root fix: added `pages_build_output_dir = "dist"` to `wrangler.toml`. Without that line, Cloudflare Pages logs `A Wrangler configuration file was found but it does not appear to be valid... Skipping file` and ignores the whole file — including `[[d1_databases]]`. With it present, the binding block is read and `env.DB` attaches correctly at deploy time. First request after that deploy returned 200.
- Added defensive `console.error('… failed:', err?.message, err?.stack, 'DB bound:', !!env.DB)` to the catch blocks in `functions/api/submit.js` and `functions/api/admin.js`. The handlers return generic JSON to the client (no leaked stack traces) so this was the only way to surface the real exception.
- Full smoke test passed: form submit → 200, admin login/logout/listing → 200, one verified row in production D1.
- Cleanup: struck "Email capture integration" from `CLAUDE.md` Future Build Targets (now shipped); deleted local `D1-INTEGRATION-PLAN.md` (gitignored, served its purpose).

**Learned:**
- Cloudflare Pages dashboard bindings for D1 do **not** reliably propagate to the Pages Functions runtime — even with the binding visible under Production scope, no Preview/Production confusion, and a fresh deploy post-binding. The reliable path is `[[d1_databases]]` in `wrangler.toml`, which requires `pages_build_output_dir` to be set so Pages doesn't skip the file.
- Cloudflare's `Errors 0%` metric in the Functions panel only counts uncaught exceptions. Handlers that catch and return a 500 JSON look like "success" in that chart. Don't trust the chart for handler health — confirm with the runtime tail.
- Runtime logs via CLI are easier than the dashboard UI: `npx wrangler pages deployment tail --project-name=kra`. List projects first with `npx wrangler pages project list` — our Cloudflare project is named **`kra`**, not `kra-eoz` (that's just the assigned subdomain).
- The `wrangler.toml` local-vs-prod conflict: `pages_build_output_dir` (required for prod D1 binding) and `wrangler pages dev -- npm run dev` (proxy mode for local dev) are mutually exclusive in wrangler 4 — `Specify either a directory OR a proxy command, not both`. So the line that's required for production breaks local dev.

**Decisions:**
- `wrangler.toml` keeps `pages_build_output_dir = "dist"` as the committed default. Local dev requires manually commenting that line out, then restoring before commit. Pre-commit check: verify the line is present, else `env.DB` silently breaks in prod.
- Dashboard `DB` binding left in place but is now redundant (wrangler.toml authoritative). No harm leaving it.
- Diagnostic `console.error` lines kept in `submit.js` and `admin.js` — useful for distinguishing binding bugs from data bugs, low noise (only fires on errors), no leaked stack traces to clients.

**Next:**
- **SVG mobile rendering bug** (still queued from yesterday): on live mobile, the `<!-- Celestial geometry -->` and `<!-- Timbuktu-style arch silhouette -->` SVG backgrounds in `index.html` hero don't render. Independent of D1 work.
- If `wrangler.toml` toggling becomes annoying, evaluate `--config wrangler.dev.toml` or a `[env.local]` block as cleaner alternatives.
