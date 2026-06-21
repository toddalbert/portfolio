import { footerLinks } from './data'

// Contact footer — dark, with social/résumé links.
export default function SiteFooter() {
  return (
    <footer
      id='contact'
      aria-labelledby='contact-h'
      className='bg-night text-night-text pt-[clamp(56px,8vw,84px)] pb-[clamp(40px,5vw,56px)]'>
      <div className='max-w-shell mx-auto px-[clamp(22px,5vw,56px)]'>
        <div className='flex flex-wrap justify-between gap-[32px] items-end'>
          <div>
            <span className='font-mono text-[12px] tracking-[0.16em] uppercase text-night-label'>Contact</span>
            <h2
              id='contact-h'
              className='mt-[14px] mb-0 font-newsreader font-medium text-[clamp(1.7rem,3.2vw,2.4rem)] leading-[1.1] text-night-bright'>
              Taking a big system further?
              <br />
              Let’s talk.
            </h2>
            <div className='flex flex-wrap gap-[10px] mt-[22px]'>
              {footerLinks.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  target='_blank'
                  rel='noopener'
                  className='font-mono text-[12.5px] no-underline text-night-muted px-[15px] py-[9px] border border-night-line rounded-[3px] transition-colors hover:border-clay-light hover:text-clay-glow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-clay-light focus-visible:ring-offset-2 focus-visible:ring-offset-night'>
                  {l.label}
                </a>
              ))}
            </div>
          </div>
          <div className='flex items-center gap-[10px] font-newsreader text-[1.05rem] text-night-muted'>
            <span aria-hidden='true' className='w-2 h-2 rounded-full bg-clay flex-none motion-safe:animate-thapulse' />
            toddalbert.com
          </div>
        </div>
        <div className='mt-[44px] pt-[22px] border-t border-night-line flex justify-between flex-wrap gap-[12px] font-mono text-[12px] tracking-[0.03em] text-night-faint'>
          <span>© 2026 Todd Albert</span>
          <span>VP of Engineering · leading teams across 5 countries</span>
        </div>
      </div>
    </footer>
  )
}
