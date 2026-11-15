# EDIE WEB PREVIEW v2.9 — Institutional Research Validation & Approval Workflow

Based on v2.8, retaining the existing 13 navigation modules, Research Journal, Report Builder, Risk Workspace and prior DEMO components.

## Added in v2.9
- Field-completeness checklist (12 fields). Percentage is administrative completeness only, **not** confidence, quality, or probability.
- Manual evidence classifications: UNASSESSED, INSUFFICIENT, REFERENCED_UNVERIFIED, MANUAL_REVIEWED_UNVERIFIED. No verified category.
- Manual review statuses: NOT_REVIEWED, NEEDS_REVISION, READY_FOR_EXTERNAL_VALIDATION, ARCHIVED. The ready-for-validation status requires all fields to be filled but is **not** approval/certification.
- Reviewer alias, rationale, session-only review event history, and exportable JSON record. No authentication, persistence, immutable audit ledger, automatic provenance checking, or approval authority.
- Production remains BLOCK; Gigantum and ARJUM NOT_CONNECTED; no real market data or execution.

## Deployment
Upload index.html, app.js, styles.css and README.md to the root of the public edie-web-demo GitHub Pages repo, replacing previous DEMO files. Never publish real data, credentials, keys, operational source, or private records.

## Test
Open Reports & Infographics, inspect v2.9 checklist, generate a report, record manual review, export JSON, refresh to confirm records disappear.
