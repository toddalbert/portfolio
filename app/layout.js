import Head from 'next/head'
import Aos from './components/Aos'
import './globals.css'
import { albert } from './fonts'
import 'aos/dist/aos.css'

export const metadata = {
  title: 'Todd Albert | Passionate Tech Leader',
  description: 'Todd is a Former NASA Research Fellow and Professor with over 30 years of coding experience and 15 years of leadership.',
  openGraph: {
    title: 'Todd Albert | Passionate Tech Leader',
    description: 'Todd is a Former NASA Research Fellow and Professor with over 30 years of coding experience and 15 years of leadership.',
    url: 'https://www.toddalbert.com/',
    siteName: 'toddalbert.com',
    images: [
      {
        url: 'https://www.toddalbert.com/ta-og-image.png',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
}


export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <Head>
        {/* <meta property="og:image" content="https://www.toddalbert.com/ta-og-image.png" />
        <meta property="og:title" content="Todd Albert | Hands-on Software Engineering Leader"/>
        <meta property="og:description" content="Todd is a Former NASA Research Fellow and Professor with over 30 years of coding experience and 14 years of leadership."/>
        <meta property="og:image:width" content="1200"/>
        <meta property="og:image:height" content="630"/> */}
        <meta property="twitter:image" content="https://www.toddalbert.com/ta-og-image.png" />
        <meta property="twitter:image:width" content="1200"/>
        <meta property="twitter:image:height" content="630"/>
        <meta property="twitter:card" content="summary_large_image"/>
        <meta property="twitter:site" content="@toddalbert"/>
        <meta property="twitter:creator" content="@toddalbert"/>
      </Head>
      <body className={`bg-stone-800 dark ${albert.className}`}>
        <Aos />
        {children}</body>
    </html>
  )
}
