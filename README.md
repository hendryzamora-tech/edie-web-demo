# EDIE WEB isolated static preview

This directory is independent from EDIE runtime code. It has no backend calls, storage, cookies, credentials, database, analytics, remote assets, user records, or market-data connector. Every status and module value is illustrative DEMO content.

## Local preview

From this directory, serve only this directory with a local static server, for example:

```text
python -m http.server 8090 --bind 127.0.0.1
```

Then open `http://127.0.0.1:8090/`. Stop the server after review. The preview must not be substituted for the operational EDIE WEB or used to test real login/data features.

## Manual publication-review files

- `index.html`
- `styles.css`
- `app.js`
- `README.md`

Review must confirm that all market/module content remains DEMO, that no runtime/static asset has been copied in, and that no credential, user, or production configuration is added before any external publication.
