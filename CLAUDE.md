# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `npm run dev` - Start development server on localhost:3000
- `npm run build` - Build the application for production
- `npm run start` - Start production server
- `npm run lint` - Run Next.js linting
- `npm run deploy` - Deploy to Firebase hosting

## Architecture

This is a Next.js 13 portfolio website using the App Router pattern. The site is a single-page application showcasing Todd Albert's professional work and experience.

### Key Structure:
- **app/page.js** - Main homepage that orchestrates all component sections
- **app/layout.js** - Root layout with metadata, fonts, and global styling
- **app/components/** - All React components representing different portfolio sections:
  - Hero, Coding, Reel, Entrepreneur, Service, Tech, Teaching, CTA, Footer
  - **portfolioItems.js** - Static data for portfolio projects with tech stacks and descriptions
- **public/** - Static assets including logos, portfolio images/videos, and resume PDFs

### Tech Stack:
- Next.js 13 with App Router
- React 18
- Tailwind CSS for styling
- AOS (Animate On Scroll) library
- Headless UI components
- Hero Icons
- Firebase hosting for deployment

### Styling Approach:
- Uses Tailwind CSS with custom font (Albert) imported via next/font
- Dark theme with stone-800 background
- Component-based architecture with each section as a separate component
- Responsive design patterns throughout

### Content Management:
- Portfolio data is stored in **portfolioItems.js** as a static export
- Each portfolio item includes name, tech stack array, description, and media assets
- Resume files are versioned in public/ directory
- Company logos and portfolio media organized in public/logos/ and public/portfolio/

The site focuses on showcasing technical leadership experience, coding projects, entrepreneurship, teaching, and professional services.