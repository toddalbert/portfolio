import './globals.css'
import { hankenGrotesk, newsreader, spaceMono } from './fonts'

const description =
  'Two-time founder-CTO leading engineering at scale — ~2M monthly users, 700+ enterprise customers. I own the technology decisions that grow the business, not just keep it running.'
const title = 'Todd H. Albert, Ph.D. — Founder-CTO & Technology Leader'

export const metadata = {
  metadataBase: new URL('https://www.toddalbert.com'),
  title,
  description,
  alternates: {
    canonical: 'https://www.toddalbert.com/',
  },
  openGraph: {
    title,
    description,
    url: 'https://www.toddalbert.com/',
    siteName: 'toddalbert.com',
    images: [
      {
        url: 'https://www.toddalbert.com/toddalbert-og-image.png',
        width: 1200,
        height: 630,
        alt: title,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title,
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
