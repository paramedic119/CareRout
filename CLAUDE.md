# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project overview

CareRoute (訪問介護ルート最適化) is a Japanese-language, browser-only SPA that helps a small home‑care office assign caregiving staff to visits, build optimized driving routes, and view schedules. UI text, comments, and commit messages are in Japanese — keep that convention when adding to existing files.

Stack: **vanilla JS + Vite 5 + Firebase (Auth + Firestore)** with **Google Maps JS API** (Maps / Directions / Distance Matrix / Geocoder). No framework, no TypeScript, no test runner.

## Commands

```bash
npm install          # install (vite + firebase + gh-pages)
npm run dev          # vite dev server on port 3000, opens browser
npm run build        # production build to dist/
npm run preview      # serve the built dist/

# Ad‑hoc Node scripts (run directly, no test runner is configured)
node test-matching.js   # smoke test for src/services/matching.js
node test-visits.js     # filters visits in data_dump.json
```

There is no lint, format, or test command. `test-matching.js` and `test-visits.js` are throwaway scripts that import ES modules directly via Node — `package.json` has `"type": "module"`, so `node <file>.js` works.

Deployment is automatic: pushing to `main` triggers `.github/workflows/deploy.yml`, which runs `npm ci && npm run build` and publishes `dist/` to the `gh-pages` branch via `peaceiris/actions-gh-pages`. The Vite `base` is `'./'` (relative paths) so the build works on a project Pages URL.

## Environment

Copy `.env.example` to `.env` and fill in `VITE_GOOGLE_MAPS_API_KEY` and the six `VITE_FIREBASE_*` keys. Without them the app still runs in a degraded mode (see "Firebase / Maps fallback" below). All env vars must use the `VITE_` prefix to be exposed to the browser.

## Architecture

### Entry and routing

- `index.html` is the single page. It hard‑codes the login screen, sidebar, modal, and toast containers; pages mount into `#page-container`.
- `src/main.js` is the entry: wires online/offline detection, theme + font‑scale toggles, demo‑mode buttons, and subscribes to `onAuthChange`. On login it calls `navigateTo('calendar')` for admins or `'my-schedule'` for staff.
- `src/app.js` is a hand‑rolled router. The `pages` map binds page names to `render*` async functions. `navigateTo(name)` runs the previous page's cleanup (registered via `setPageCleanup`), shows a spinner, then awaits the new page's render. Pages with hotkeys / timers MUST register a cleanup function or they will leak across navigations.

There is no URL hash or History API — navigation is in‑memory only. A page reload always lands back on the login screen.

### Pages (`src/pages/`)

Each file exports a `render<Name>()` that rewrites `#page-container.innerHTML` and attaches its own listeners. Admin vs staff is split by `window.isAdmin`, which `main.js` sets from the user's email (currently a hardcoded check for `admin@careroute.local` / `demo@careroute.local`).

- Admin core flow: `calendar` (運用司令塔 — monthly overview & STEP guide) → `matching` (auto‑assign + manual edits for a specific day) → `schedule` / `map-view` (per‑day check).
- Other admin pages: `dashboard`, `staff-manage`, `client-manage`, `revenue`.
- Staff: `my-schedule` only (the router blocks staff from any other page).

### Services (`src/services/`)

- **`firestore.js`** — the most important file to understand. All CRUD goes through generic `addDocument` / `getCollection` / `updateDocument` / `deleteDocument` / `queryDocuments`. Collections used: `staff`, `clients`, `visits`, `routes`, `settings`. `firebase/firestore` is dynamically imported only when configured. **Every function has a localStorage fallback path keyed `careroute_<collection>` so new fields must be written through these wrappers to stay consistent across both backends.** `saveRoutes` uses a deterministic doc ID `${date}_${staffId}` so re‑optimizing overwrites cleanly in both Firestore and local mode.

- **`auth.js`** — Google popup sign‑in. `firebase/auth` is also dynamically imported; functions poll until the module finishes loading before subscribing. If Firebase isn't configured, `onAuthChange` calls back with `null` so the login screen renders.

- **`matching.js`** — skill/constraint‑based staff↔visit assignment. `autoAssign(staffList, visitList, clientList, globalMatrix?, points?)` iterates visits in start‑time order and for each one scores candidates with `evaluateMatch`, then sorts by a multi‑level tiebreaker (visit‑count cap → full‑time minimum guarantee of 7 visits → load balancing → 正社員 priority → score). Gender preference is an absolute filter (`eligible = false` on mismatch), and there are **hard‑coded business rules** — most notably `getVisitLimit` returns 3 for any staff whose name contains `前川`. When changing scoring, edit `MATCHING_WEIGHTS` in `src/utils/constants.js` rather than literals here.

- **`route-optimizer.js`** — per‑staff TSP. Groups assignments by `staffId`, builds a distance matrix (Google Distance Matrix values when a `getRealMatrixFn` is passed, otherwise haversine), runs nearest‑neighbor with time‑window priority, then 2‑opt. `buildSchedule` produces arrival times honoring `point.timeWindow.start` (caregiver waits if early) and falling back to `scheduledStart`. Default driving speed when no real data: 20 km/h.

- **`google-maps.js`** — loads the Maps script lazily, manages a single `map` + arrays of `markers` / `polylines` / `directionsRenderers`. Always call `clearMap()` before redrawing a different day's routes. `getDistanceMatrix(points)` returns `{distance(km), duration(min)}` cells and is what callers pass into `autoAssign` / `optimizeRoutes` as the real‑travel matrix.

### Firebase / Maps fallback

The app deliberately runs without credentials:

- `isFirebaseConfigured` in `src/config/firebase.js` is false if the env vars are missing or still placeholders. When false, Firestore reads/writes hit `localStorage` instead, and auth shows the login screen but only the two **demo mode buttons** work (admin demo seeds `DEMO_STAFF` / `DEMO_CLIENTS` / `DEMO_VISIT_SCHEDULES` from `src/data/demo-data.js`).
- Google Maps absence renders an in‑container placeholder instead of a map; route optimization falls back to haversine + 20 km/h.

When adding features, preserve both paths — don't introduce code that assumes Firebase is initialized.

### PWA

`public/service-worker.js` (cache `careroute-v2`) is registered from `index.html`. Strategy: never cache Firebase/Google hosts; network‑first for navigations with `/index.html` fallback; cache‑first for JS/CSS/fonts/images. **Bump `CACHE_VERSION` when shipping a change that must invalidate older client caches.** `public/manifest.json` makes the app installable. Firestore offline persistence is also enabled (`persistentLocalCache` + multi‑tab) in `src/config/firebase.js`.

### Utils (`src/utils/`)

- `constants.js` — all domain enums and tunables: skill categories, care levels, `MATCHING_WEIGHTS`, `REVENUE_TABLE` (介護報酬), `DEFAULT_OFFICE` (the hard‑coded office address in 岐阜県加茂郡富加町, lat 35.497 / lng 136.993). Prefer importing from here over re‑typing strings — comparisons in `matching.js` are exact string matches against these values (e.g. `staff.type === '正社員'`, `client.genderPreference === '男性希望'`).
- `helpers.js` — `showToast`, `showModal`/`closeModal`/`confirmDialog` (with Esc + Tab trap + focus restore), `registerHotkeys` (skips when focus is in an input or a modal is open), `timeToMinutes`/`minutesToTime`, `haversineDistance`, `calculateVisitIncome`. Always reuse these instead of building one‑off modals or toasts.

### Conventions worth knowing

- **`data-theme` / `data-font-scale`** on `<html>` are set inline in `index.html` before paint to avoid FOUC; persisted in `localStorage` keys `careroute_theme` and `careroute_font_scale`. Don't move that bootstrap script.
- **Unused root files**: `main.js`, `counter.js`, `style.css`, `javascript.svg` at the repo root are leftover Vite scaffolding. The real entry is `/src/main.js` (loaded from `index.html`). Don't edit the root copies expecting them to take effect.
- **`data_dump.json` / `staff_dump.json` / `訪問介護 プロンプト.xlsx`** are reference data from the originating spreadsheet, used by `generate_demo_data.py` to regenerate `src/data/demo-data.js`. The Python script is run manually; it's not part of the build.
- Date strings are stored as `YYYY-MM-DD` and time as `HH:MM` (24h). When constructing dates for storage, use `helpers.formatDate()` to avoid timezone drift — `new Date().toISOString()` will shift in JST.
- Branch policy from the project setup: develop on `claude/claude-md-docs-w9pcL`; pushes to `main` deploy to production.
