import Link from 'next/link'

const links = [
  { href: '#work', label: 'Work' },
  { href: '#leadership', label: 'Leadership' },
  { href: '#teaching', label: 'Teaching' },
  { href: '#tech', label: 'Tech' },
  { href: '#contact', label: 'Contact' },
]

export default function Nav() {
  return (
    <header className='sticky top-0 z-30 bg-stone-800/80 backdrop-blur border-b border-stone-700/50'>
      <nav className='max-w-screen-xl mx-auto px-5 h-14 flex items-center justify-between'>
        <a href='#top' className='text-stone-200 font-medium tracking-tight'>
          Todd&nbsp;Albert
        </a>
        <div className='flex items-center gap-5 text-sm'>
          {links.map(l => (
            <a key={l.href} href={l.href} className='hidden sm:inline text-stone-400 hover:text-stone-200 transition'>
              {l.label}
            </a>
          ))}
          <Link
            href='/book'
            className='px-3 py-1.5 rounded-md border border-blue-500 text-blue-300 hover:bg-blue-500 hover:text-white transition'>
            My Book
          </Link>
        </div>
      </nav>
    </header>
  )
}
