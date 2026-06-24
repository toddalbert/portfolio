# toddalbert.com

Personal site for Todd H. Albert — a single-page executive portfolio plus a
landing page for the book _Out of the Fish Tank_. Built with Next.js (App
Router), Tailwind CSS, and deployed to Firebase Hosting.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the dev server on localhost:3000 |
| `npm run build` | Production build |
| `npm run start` | Serve the production build |
| `npm run lint` | Run Next.js linting |
| `npm run deploy` | Deploy to Firebase Hosting (`firebase deploy`) |

There is no test framework configured in this project.

## Structure

- **`app/page.js`** — homepage; composes the section components in narrative order.
- **`app/components/home/`** — the homepage sections (`Hero`, `OperatingAtScale`,
  `Outcomes`, `HowILead`, `TrackRecord`, `Range`, `Writing`, `Book`,
  `SiteNav`, `SiteFooter`) plus `RevealController` (scroll-reveal animations)
  and `data.js` (all section content: stats, cards, links).
- **`app/books/out-of-the-fish-tank/page.js`** — standalone book landing page
  with its own typographic brand and JSON-LD structured data.
- **`app/layout.js`** — root layout, global metadata, and Open Graph tags.
- **`app/fonts.js`** — Google fonts via `next/font` (Hanken Grotesk, Newsreader,
  and Space Mono for the site; Oswald and Spectral for the book page).
- **`public/`** — static assets (portrait, book cover, résumé PDF, OG image).

## Editing content

Most homepage copy and data — stats, leadership cards, track record, writing
links, nav, and footer — lives in `app/components/home/data.js`. Editing it
updates the corresponding sections without touching component markup.

## Deployment

Deployed via Firebase Hosting's Next.js framework backend (region
`us-central1`) against the `toddalbert-com` project (see `firebase.json` /
`.firebaserc`). The app is server-rendered, not a static export.
