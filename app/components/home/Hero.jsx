import { stats, RESUME_URL, LINKEDIN_URL } from './data'

// Hero — positioning statement, portrait, and the animated stat band.
export default function Hero() {
  return (
    <header id='top' className='pt-[clamp(56px,9vw,104px)] pb-[clamp(40px,6vw,64px)]'>
      <div className='max-w-shell mx-auto px-[clamp(22px,5vw,56px)]'>
        <div className='flex flex-wrap gap-[clamp(36px,5vw,60px)] items-center'>
          {/* Statement */}
          <div className='flex-1 basis-[460px] min-w-0'>
            <span className='font-mono text-[12px] tracking-[0.16em] uppercase text-umber-soft'>
              VP&nbsp;of&nbsp;Engineering&nbsp;·&nbsp;CYPHER&nbsp;Learning
            </span>
            <h1 className='font-newsreader font-medium text-[clamp(2.5rem,5.6vw,4.2rem)] leading-[1.04] tracking-[-0.018em] text-umber mt-[20px] mb-0 max-w-[16ch]'>
              I make big systems <em className='italic text-clay'>bigger</em> and more reliable — without taking them
              down.
            </h1>
            <p className='mt-[26px] text-[1.16rem] leading-[1.6] text-umber-muted max-w-[52ch]'>
              I lead a team of <b className='text-umber font-semibold'>~30 engineers across five countries</b> on a
              platform serving <b className='text-umber font-semibold'>~2M monthly active users</b> and{' '}
              <b className='text-umber font-semibold'>700+ enterprise customers</b> — and I own keeping it fast and steady
              as it grows.
            </p>
            <div className='flex flex-wrap gap-[12px] mt-[30px]'>
              <a
                href={RESUME_URL}
                target='_blank'
                rel='noopener'
                className='font-mono text-[13px] tracking-[0.02em] px-[22px] py-[13px] rounded-[3px] no-underline bg-umber text-paper border border-umber transition-colors hover:bg-[#3a3026] hover:border-[#3a3026] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-clay focus-visible:ring-offset-2 focus-visible:ring-offset-paper'>
                Latest résumé
              </a>
              <a
                href={LINKEDIN_URL}
                target='_blank'
                rel='noopener'
                className='font-mono text-[13px] tracking-[0.02em] px-[22px] py-[13px] rounded-[3px] no-underline bg-paper-card text-umber border border-hair-strong transition-colors hover:border-clay hover:text-clay focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-clay focus-visible:ring-offset-2 focus-visible:ring-offset-paper'>
                LinkedIn ↗
              </a>
              <a
                href='#outcomes'
                className='font-mono text-[13px] tracking-[0.02em] px-[22px] py-[13px] rounded-[3px] no-underline bg-paper-card text-umber border border-hair-strong transition-colors hover:border-clay hover:text-clay focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-clay focus-visible:ring-offset-2 focus-visible:ring-offset-paper'>
                Selected outcomes
              </a>
            </div>
          </div>

          {/* Portrait */}
          <figure className='flex-[0_1_330px] m-0 max-w-[330px]'>
            <div className='border border-hair-strong rounded-[12px] overflow-hidden bg-paper-card shadow-[0_1px_2px_rgba(40,31,23,.05),0_24px_54px_rgba(40,31,23,.13)]'>
              <div className='relative aspect-[4/5] bg-paper-portrait'>
                <div
                  aria-hidden='true'
                  className='absolute inset-0 flex flex-col items-center justify-center gap-[10px]'>
                  <div className='font-newsreader text-[3.2rem] text-umber-placeholder'>THA</div>
                  <div className='font-mono text-[11px] tracking-[0.16em] text-umber-label'>PORTRAIT</div>
                </div>
                <img
                  src='/todd-headshot.jpg'
                  alt='Todd H. Albert'
                  className='absolute inset-0 w-full h-full object-cover object-[center_top]'
                />
              </div>
              <figcaption className='flex justify-between gap-2 px-[16px] py-[13px] border-t border-hair font-mono text-[11px] tracking-[0.03em] text-umber-soft'>
                <span className='text-umber'>Todd H. Albert, Ph.D.</span>
                <span>Boynton Beach, FL</span>
              </figcaption>
            </div>
          </figure>
        </div>

        {/* Stat band */}
        <div
          id='scale'
          data-reveal
          className='mt-[clamp(44px,6vw,68px)] grid grid-cols-[repeat(auto-fit,minmax(190px,1fr))] gap-px bg-hair border border-hair rounded-[12px] overflow-hidden'>
          {stats.map((s) => (
            <div key={s.label} className='bg-paper-card px-[24px] py-[26px]'>
              <div className='font-newsreader font-medium text-[clamp(2rem,3.4vw,2.7rem)] leading-none text-clay'>
                <span data-count={s.count} data-suffix={s.suffix}>
                  {s.count}
                  {s.suffix}
                </span>
              </div>
              <div className='font-mono text-[11px] tracking-[0.1em] uppercase text-umber-soft mt-[12px]'>{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </header>
  )
}
