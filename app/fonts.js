import { Oswald, Spectral, Newsreader, Space_Mono, Hanken_Grotesk } from 'next/font/google'

// "Out of the Fish Tank" (literary) brand — echoes the cover:
// a heavy, condensed sans for display (the title), a serif for body (the subtitle).
export const oswald = Oswald({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-oswald',
})

export const spectral = Spectral({
  weight: ['300', '400', '500', '600'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--font-spectral',
})

// 2026 warm-editorial redesign — primary site brand (per Todd Albert.dc.html handoff):
//   Hanken Grotesk (body / UI), Newsreader (serif headings + italic accents),
//   Space Mono (monospace eyebrows / labels).
export const hankenGrotesk = Hanken_Grotesk({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-hanken',
})

export const newsreader = Newsreader({
  weight: ['400', '500', '600'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--font-newsreader',
  // Newsreader is an optical-size variable font; next/font can't derive fallback
  // metric overrides for it, so disable the adjustment to avoid a build warning.
  adjustFontFallback: false,
})

export const spaceMono = Space_Mono({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-space-mono',
})
