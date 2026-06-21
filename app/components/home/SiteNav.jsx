import { navLinks, RESUME_URL } from './data'

// Sticky translucent nav — wordmark + section anchors + résumé.
export default function SiteNav() {
  return (
    <div className='sticky top-0 z-50 bg-paper/[0.86] backdrop-blur-[10px] border-b border-hair'>
      <div className='max-w-shell mx-auto px-[clamp(22px,5vw,56px)] h-[60px] flex items-center justify-between gap-6'>
        <a
          href='#top'
          className='flex items-center gap-[10px] no-underline font-newsreader text-[18px] font-medium tracking-[0.01em] text-umber rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-clay focus-visible:ring-offset-2 focus-visible:ring-offset-paper'>
          <span
            aria-hidden='true'
            className='w-2 h-2 rounded-full bg-clay flex-none motion-safe:animate-thapulse'
          />
          Todd&nbsp;H.&nbsp;Albert
        </a>
        <nav
          aria-label='Primary'
          className='hidden sm:flex items-center gap-[22px] font-mono text-[12px] tracking-[0.03em] text-umber-soft'>
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className='no-underline text-inherit transition-colors hover:text-umber rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-clay focus-visible:ring-offset-2 focus-visible:ring-offset-paper'>
              {l.label}
            </a>
          ))}
          <a
            href={RESUME_URL}
            target='_blank'
            rel='noopener'
            className='no-underline text-clay-ink rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-clay focus-visible:ring-offset-2 focus-visible:ring-offset-paper'>
            Résumé&nbsp;↗
          </a>
        </nav>
      </div>
    </div>
  )
}
