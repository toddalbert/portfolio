import './globals.css'
import { hankenGrotesk, newsreader, spaceMono } from './fonts'

const description =
  'VP of Engineering leading ~30 engineers across five countries on a platform serving ~2M monthly active users and 700+ enterprise customers. I make big systems bigger and more reliable — without taking them down.'

export const metadata = {
  metadataBase: new URL('https://www.toddalbert.com'),
  title: 'Todd H. Albert, Ph.D. | VP of Engineering',
  description,
  alternates: {
    canonical: 'https://www.toddalbert.com/',
  },
  openGraph: {
    title: 'Todd H. Albert, Ph.D. | VP of Engineering',
    description,
    url: 'https://www.toddalbert.com/',
    siteName: 'toddalbert.com',
    images: [
      {
        url: 'https://www.toddalbert.com/toddalbert-og-image.png',
        width: 1200,
        height: 630,
        alt: 'Todd H. Albert, Ph.D. — VP of Engineering',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Todd H. Albert, Ph.D. | VP of Engineering',
    description,
    images: ['https://www.toddalbert.com/toddalbert-og-image.png'],
    site: '@toddalbert',
    creator: '@toddalbert',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body
        className={`${hankenGrotesk.className} ${hankenGrotesk.variable} ${newsreader.variable} ${spaceMono.variable}`}>
        {children}
      </body>
    </html>
  )
}
