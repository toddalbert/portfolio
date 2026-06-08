import { Albert_Sans, Barlow, Oswald, Spectral } from 'next/font/google'

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
