# CLAUDE.md

Guidance for Claude Code (claude.ai/code) when working in this repository.

## Commands

- `npm run dev` — dev server on localhost:3000
- `npm run build` — production build
- `npm run start` — serve the production build
- `npm run lint` — Next.js lint
- `npm run deploy` — deploy to Firebase Hosting (`firebase deploy`)

There is no test framework configured; `npm test` does not exist.

## Deployment

Firebase Hosting's Next.js framework backend (`frameworksBackend`, region
`us-central1`) against the `toddalbert-com` project (see `firebase.json` /
`.firebaserc`). `next.config.js` is empty — this is a **server-rendered** app,
**not** a static export.

## Architecture

Next.js 13 App Router. Two routes:

- **`app/page.js`** — the homepage. A thin orchestrator that renders the
  `app/components/home/*` sections in narrative order inside a single warm
  "paper" theme wrapper.
- **`app/books/out-of-the-fish-tank/page.js`** — a standalone landing page for
  the book _Out of the Fish Tank_, with its own literary brand (parchment /
  oxblood palette, Oswald + Spectral) and JSON-LD `Book` structured data.
  Intentionally separate from the portfolio's visual language.

`app/layout.js` holds global metadata (Open Graph / Twitter cards) and applies
the font CSS variables to `<body>`.

### Homepage sections — `app/components/home/`

`SiteNav`, `Hero`, `OperatingAtScale`, `Outcomes`, `HowILead`, `TrackRecord`,
`Range`, `Writing`, `Book`, `SiteFooter`, plus `RevealController`. Each section
is a presentational component; **content lives in `data.js`** (stats, leadership
cards, track-record rows, writing links, nav links, footer links, résumé /
LinkedIn URLs). To change copy or links, edit `data.js` — not the markup.

### Scroll animations — `RevealController.jsx`

A single client component mounted on the homepage. It uses an
`IntersectionObserver` to drive two opt-in behaviors via data attributes:

- `data-reveal` — element fades + rises into view (gets `.is-in` when visible).
- `data-count` (+ optional `data-suffix`, `data-dec`) — number counts up once.

Server markup renders fully visible; the controller only enhances it, so no-JS
visitors and crawlers get the complete page. `prefers-reduced-motion` (or a
`?nomotion` query) shows everything immediately with final counts. The reveal
CSS (`.reveal-ready`, `.is-in`, `rise` keyframe) lives in `globals.css` /
`tailwind.config.js`.

## Styling

- **Tailwind CSS** with a custom warm-editorial theme in `tailwind.config.js`:
  color scales `paper`, `umber`, `clay`, `hair`; `max-w-shell` (1180px content
  column); font families `font-hanken`, `font-newsreader`, `font-mono`.
- **Fonts** (`app/fonts.js`, via `next/font/google`): `hankenGrotesk` (body/UI),
  `newsreader` (serif headings + italic accents), `spaceMono` (mono eyebrows) for
  the main site; `oswald` + `spectral` for the book page. Fonts are exposed as
  CSS variables on `<body>` and consumed through the Tailwind family utilities.
- Heavy use of arbitrary values with `clamp()` for fluid type and spacing.
- Path alias `@/*` maps to the project root (see `jsconfig.json`).

## Assets

`public/` is intentionally lean — only assets the live site references:
`todd-headshot.jpg` (portrait), `fishtank_cover_sm.png` (book cover),
`toddalbert-og-image.png` (social card), `Albert-Todd-resume-June-2026.pdf`.
App icons (`app/icon.png`, `app/apple-icon.png`, `app/favicon.ico`) are picked
up automatically by Next's metadata conventions.
