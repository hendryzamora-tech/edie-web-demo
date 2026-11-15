# EDIE WEB PREVIEW v2 — Institutional Interactive Dashboard

Public **static DEMO** isolated from operational EDIE WEB. It contains no backend, authentication, cookies, local/session storage, API requests, database, credentials, broker data, or live market feed. Charts are synthetic decorative shapes and not IDX data. All locked engine baselines remain unchanged. Production release gate stays BLOCKED.

## Files
- `index.html` — responsive login simulation and app shell
- `styles.css` — black/gold responsive design and `[hidden]` handling
- `app.js` — 13-module interactive client-only navigation and DEMO actions

## Local preview
Run `python -m http.server 8090 --bind 127.0.0.1` from this directory, then open http://127.0.0.1:8090/. Or open index.html directly.

## GitHub Pages update (manual, authorized only)
Upload **only** `index.html`, `styles.css`, and `app.js` to the public `edie-web-demo` repository root, replacing the previous DEMO files. Do not upload this project's operational code, databases, secrets, logs, or deployment handoff archives. Keep GitHub Pages on main / (root). Verify the site and mobile navigation. No commit/push/deployment is performed by this package.

## Validation limits
Static checks and JS syntax checks do not prove browser acceptance or production readiness. Gigantum and ARJUM remain NOT_CONNECTED. No scanner executes.
