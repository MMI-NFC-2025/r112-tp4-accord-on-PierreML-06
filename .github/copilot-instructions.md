<!-- .github/copilot-instructions.md - Guidance for AI coding agents working on this repo -->

# Repo snapshot

This is a small static site (one page) demonstrating an accordion component.
- Key files: `index.html`, `src/css/components/accordeon.css`, `src/js/script.js`, and images in `assets/img/`.
- No build system or automated tests; files are served directly.

# Big picture

- Purpose: a teaching/practical exercise to style and optionally enhance an accessible accordion built with `<details>` / `<summary>`.
- Structure: `index.html` contains the markup; CSS lives under `src/css/components/`; JS behavior is in `src/js/script.js` and loaded as `type="module"`.
- Important pattern: the markup uses native HTML controls (`<details>` and `<summary>`). Visual state should rely on the `open` attribute in CSS (`details[open] { ... }`).

# Project-specific conventions and gotchas

- File naming: the CSS file is `accordeon.css` (French spelling — do not rename unless you update `index.html`).
- Paths in HTML begin with a leading slash (e.g. `/src/css/components/accordeon.css`). That assumes the site is served from the repository root on an HTTP server. Opening `index.html` via `file://` may break these links.
- Accessibility and markup: keep the `<summary>` content minimal (images + a small title). The project relies on native behavior; JS should only enhance (e.g., auto-close other panels), not replace semantics.

# Code examples and patterns (from this repo)

- Close all panels (example from `README.md`):

```js
// closes all details inside the accordion container
const accordeon = document.querySelector('.accordeon');
accordeon.querySelectorAll('details').forEach(det => (det.open = false));
```

- CSS: style the opened state using attribute selector:

```css
details { /* closed + open baseline */ }
details[open] { /* opened state styles */ }
```

# How to run and test locally

- No build step. Serve the folder with a static server to preserve leading-root paths.

PowerShell (from repo root):

```powershell
python -m http.server 8000
# then open http://localhost:8000/index.html
```

- Alternatively, use VS Code Live Server extension. Verify that `/src/...` paths resolve correctly.

# Editing guidance for AI agents

- When modifying markup, update `index.html` and ensure referenced paths remain correct.
- When editing styles, put component CSS under `src/css/components/` and follow the existing `details[open]` pattern.
- When changing behavior, update `src/js/script.js`. Keep semantics: ensure summary click still exposes native keyboard interaction and focus behavior; JS should only add enhancement such as closing other `details` elements.
- Tests: none present. After changes, verify behavior manually by running the static server and testing keyboard + mouse interactions.

# Integration & external dependencies

- There are no external build tools or package manifests. Images are local under `assets/img/` (e.g. `moodle.univ-fcomte.fr.jpeg`).

# When to update README or this file

- If you add a build step, testing framework, or change the path structure, update `README.md` and this `copilot-instructions.md` with the exact commands and file locations.

# Quick checklist for PRs

- Confirm paths still resolve when served from the repository root.
- Preserve `type="module"` on `script` unless refactoring scripts and updating `index.html`.
- Keep the `accordeon` spelling consistent with existing filenames unless you update references.

---
If any part of this guidance is unclear or you'd like additional examples (e.g., a unit-test scaffold or a small local dev script), tell me which area to expand.
