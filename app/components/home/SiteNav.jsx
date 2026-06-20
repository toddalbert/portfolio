// Sticky primary navigation for the redesigned homepage.
const links = [
  { href: '#work', label: 'Work' },
  { href: '#book', label: 'Book' },
  { href: '#speaking', label: 'Writing & Speaking' },
  { href: '#through', label: 'About' },
]

export default function SiteNav() {
  return (
    <nav className='sticky top-0 z-50 bg-ink/[0.82] backdrop-blur-md border-b border-cream/[0.08]'>
      <div className='max-w-[1200px] mx-auto px-[clamp(20px,5vw,64px)] py-4 flex items-center justify-between gap-6'>
        <a href='#top' className='flex items-baseline gap-[10px]'>
          <span className='font-semibold text-[18px] tracking-[-0.01em] text-cream'>Todd Albert</span>
          <span className='font-mono text-[11px] text-accent tracking-[0.08em]'>PH.D.</span>
        </a>
        <div className='flex items-center gap-[clamp(16px,2.4vw,34px)] text-[14.5px] text-slate-4'>
          {links.map(l => (
            <a key={l.href} href={l.href} className='hidden md:inline py-1 transition-colors hover:text-white'>
              {l.label}
            </a>
          ))}
          <a
            href='#contact'
            className='text-[13.5px] font-medium text-ink bg-accent px-[18px] py-[10px] rounded-sm transition-colors hover:bg-accent-hover'>
            Start a Conversation
          </a>
        </div>
      </div>
    </nav>
  )
}
