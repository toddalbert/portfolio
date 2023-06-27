import './globals.css'
import { albert } from './fonts'

export const metadata = {
  title: 'Todd Albert | Senior Engineer / Architect',
  description: 'Former NASA Research Fellow and Professor',
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={`bg-zinc-900 dark ${albert.className}`}>{children}</body>
    </html>
  )
}
