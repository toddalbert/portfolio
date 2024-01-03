import Aos from './components/Aos';
import './globals.css'
import { albert } from './fonts';
import 'aos/dist/aos.css';

export const metadata = {
  title: 'Todd Albert | Hands-on Software Engineering Leader',
  description: 'Todd is a Former NASA Research Fellow and Professor with over 30 years of coding experience and 14 years of leadership.',
  openGraph: {
    title: 'Todd Albert | Hands-on Software Engineering Leader',
    description: 'Todd is a Former NASA Research Fellow and Professor with over 30 years of coding experience and 14 years of leadership.',
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
      <body className={`bg-stone-900 dark ${albert.className}`}>
        <Aos />
        {children}</body>
    </html>
  )
}
