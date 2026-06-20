import { Albert_Sans, Barlow, Oswald, Spectral, Newsreader, Space_Grotesk, Space_Mono } from 'next/font/google'

// Portfolio (tech) brand
export const albert = Albert_Sans({ subsets: ['latin'] })

export const barlow = Barlow({ weight: '200', subsets: ['latin'] })

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

// 2026 homepage redesign — executive authority brand:
//   Space Grotesk (geometric sans, UI + display), Newsreader (serif, italic accents),
//   Space Mono (monospace eyebrows / labels). All exposed as CSS variables for Tailwind.
export const spaceGrotesk = Space_Grotesk({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-space-grotesk',
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
