import Aos from './components/Aos';
import './globals.css'
import { albert } from './fonts';
import 'aos/dist/aos.css';

export const metadata = {
  title: 'Todd Albert | Senior Engineer / Architect',
  description: 'Former NASA Research Fellow and Professor',
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={`bg-zinc-900 dark ${albert.className}`}>
        <Aos />
        {children}</body>
    </html>
  )
}
