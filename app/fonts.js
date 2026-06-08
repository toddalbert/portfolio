import { Albert_Sans, Barlow, Playfair_Display, Spectral } from 'next/font/google'

// Portfolio (tech) brand
export const albert = Albert_Sans({ subsets: ['latin'] })

export const barlow = Barlow({ weight: '200', subsets: ['latin'] })

// "Out of the Fish Tank" (literary) brand
export const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
})

export const spectral = Spectral({
  weight: ['300', '400', '500', '600'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--font-spectral',
})
