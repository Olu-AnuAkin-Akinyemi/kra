---
description: Run a KRA accessibility audit against WCAG 2.1 AA.
---

# Accessibility Compliance

Use [CLAUDE.md](../CLAUDE.md) as the product baseline and [copilot-instructions.md](../.github/copilot-instructions.md) as the implementation baseline.

Audit the current KRA site for **WCAG 2.1 AA** issues.

## Review Scope

Focus on:

- `index.html`
- `src/css/styles.css`
- `src/js/ui/`

## Review Areas

- Semantic HTML: headings, landmarks, lists, buttons, links, and form structure
- Keyboard navigation: all interactive elements reachable and operable by keyboard
- Focus visibility: interactive elements must have a visible focus state
- ARIA: present only where needed and never used to patch incorrect semantics
- Color contrast: 4.5:1 for text, 3:1 for UI components
- Motion: significant animation should have a `prefers-reduced-motion` fallback
- Forms: labels, status visibility, and understandable completion states
- Touch targets: interactive elements should remain usable on mobile

## KRA-Specific Surfaces

Pay special attention to:

- Main navigation
- Hero CTAs and scroll invitation
- Scroll-to-top button
- Reveal animations
- Enrollment and teacher forms
- Any dynamic success states

## Output Format

```text
🔴 WCAG FAIL    — [Criterion] → [Fix]
🟡 PARTIAL      — [Criterion] → [Fix]
🟢 ENHANCEMENT  — [Criterion] → [Consider]
```

Keep findings concrete and file-specific.
