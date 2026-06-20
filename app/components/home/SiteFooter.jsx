// Footer — identity, links, copyright.
const links = [
  { href: '/Albert-Todd-resume-May-2026.pdf', label: 'Resume / CV' },
  { href: 'https://www.linkedin.com/in/toddalbert/', label: 'LinkedIn' },
  { href: 'https://github.com/toddalbert', label: 'GitHub' },
  { href: 'https://scholar.google.dk/citations?user=lYZY0SYAAAAJ&hl=en', label: 'Google Scholar' },
  { href: 'https://a.co/d/050pcESP', label: 'The Book' },
]

export default function SiteFooter() {
  return (
    <footer className='bg-ink-deep text-slate-3 border-t border-cream/[0.08]'>
      <div className='max-w-[1200px] mx-auto px-[clamp(20px,5vw,64px)] py-[clamp(44px,5vw,64px)] flex flex-wrap gap-[30px] justify-between items-start'>
        <div>
          <div className='flex items-baseline gap-[10px] mb-[10px]'>
            <span className='font-semibold text-[18px] text-cream'>Todd Albert</span>
            <span className='font-mono text-[11px] text-accent tracking-[0.08em]'>PH.D.</span>
          </div>
          <p className='m-0 max-w-[340px] text-[13.5px] leading-[1.6]'>
            Rebuilding complex systems — software platforms, engineering teams, scientific models, and lost histories.
          </p>
        </div>
        <div className='flex flex-wrap gap-x-[34px] gap-y-[26px] text-[14px]'>
          {links.map(l => (
            <a
              key={l.label}
              href={l.href}
              target='_blank'
              rel='noopener'
              className='text-slate-5 transition-colors hover:text-white'>
              {l.label}
            </a>
          ))}
        </div>
      </div>
      <div className='max-w-[1200px] mx-auto px-[clamp(20px,5vw,64px)] pb-[40px] font-mono text-[11.5px] tracking-[0.04em] text-[#5E6B71]'>
        © 2026 Todd Albert
      </div>
    </footer>
  )
}
