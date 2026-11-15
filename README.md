# EDIE WEB PREVIEW v3.0 — Institutional Control Tower & Integration Readiness

This is a **public static DEMO**, derived from v2.9, retaining 13 navigation sections and prior research/report features.

## New in v3.0
- Evidence-based production readiness matrix (10 gates, blocked/pending until verified).
- Downloadable readiness JSON for handoff, with explicit NOT_CERTIFIED semantics.
- Local UI self-check, limited to DOM, navigation, static status and browser download support.
- Production gate remains BLOCK. Gigantum/ARJUM NOT_CONNECTED. Master engines remain unchanged.

## Deployment
Only upload index.html, app.js, styles.css, README.md to public GitHub Pages. Do not upload operational source, private DB, credentials or market records.

## Production completion blockers
Production requires access to **actual** private EDIE_WEB runtime source, deploy environment, persistent database with audit_ledger, authenticated provider connections, secrets, RBAC/MFA, source reconciliation, deterministic engine contract tests, walk-forward validations, monitoring, backup/restore, end-to-end tests, and explicit owner approval. These cannot be verified or deployed from a public static preview.

## Automated checks
See validation_report.json. Static syntax/markup and browser smoke tests are **not** production certification.
