# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `npm run dev` - Start development server on localhost:3000
- `npm run build` - Build the application for production
- `npm run start` - Start production server
- `npm run lint` - Run Next.js linting
- `npm run deploy` - Deploy to Firebase hosting (runs `firebase deploy`)

There is no test framework configured in this project; `npm test` does not exist.

Deployment uses Firebase Hosting's Next.js framework backend (`frameworksBackend`, region `us-central1`) against the `toddalbert-com` project (see `firebase.json` / `.firebaserc`). `next.config.js` is empty — the app is **not** a static export; Firebase runs it as a server-rendered Next.js app.

## Architecture

This is a Next.js 13 portfolio website using the App Router pattern. The site is a single-page application showcasing Todd Albert's professional work and experience.

### Key Structure:
- **app/page.js** - Main homepage that orchestrates all component sections
- **app/layout.js** - Root layout with metadata, fonts, and global styling
- **app/components/** - All React components representing different portfolio sections:
  - Hero, Coding, Reel, Entrepreneur, Service, Tech, Teaching, CTA, Footer
  - **portfolioItems.js** - Static data for portfolio projects with tech stacks and descriptions
- **public/** - Static assets including logos, portfolio images/videos, and resume PDFs

### Client Logos & the QuickView Modal (the key interaction):
The `Coding` section renders a grid of client logos. There are two kinds of logo entries:
- **With a case study** - rendered via `<QuickView slug="..." />`. Clicking opens a Headless UI `Dialog` modal that looks up `portfolioItems[slug]` and displays its name, description, tech tags, and image **or** video. The `slug` prop **must** match a key in `portfolioItems.js`, or the modal throws on `product.imageSrc`.
- **Without a case study** - rendered as a plain `<span><img/></span>` with no click behavior.

`FilterableCoding.jsx` is an alternative, filterable version of the Coding grid (with a `techMapping` that maps each project's tech array to filter categories). It is **not currently wired into `page.js`** — `Coding.jsx` (a hardcoded logo grid) is what renders. Keep this in mind: edits to the live experience go in `Coding.jsx`, not `FilterableCoding.jsx`.

### Tech Stack:
- Next.js 13 with App Router
- React 18
- Tailwind CSS for styling
- AOS (Animate On Scroll) library
- Headless UI components
- Hero Icons
- Firebase hosting for deployment

### Styling Approach:
- Fonts are loaded in `app/fonts.js` from `next/font/google`: `Albert_Sans` (applied globally on `<body>` in `layout.js`) and `Barlow` (weight 200)
- Dark theme with stone-800 background
- Component-based architecture with each section as a separate component
- Responsive design patterns throughout
- Scroll animations: `AOS.init()` runs once via the client-only `Aos.jsx` component mounted in `layout.js`; individual sections opt in with `data-aos="..."` attributes (e.g. on the `Coding` `<section>`)
- Path alias `@/*` maps to the project root (see `jsconfig.json`)

### Content Management:
- Portfolio data is stored in **portfolioItems.js** as a static export
- Each portfolio item includes name, tech stack array, description, and media assets
- Resume files are versioned in public/ directory
- Company logos and portfolio media organized in public/logos/ and public/portfolio/

The site focuses on showcasing technical leadership experience, coding projects, entrepreneurship, teaching, and professional services.