import { writingCards } from './data'

// 06 — Writing & what I'm building: essay + product link cards.
export default function Writing() {
  return (
    <section id='writing' aria-labelledby='writing-h' className='py-[clamp(64px,9vw,112px)] border-t border-hair'>
      <div className='max-w-shell mx-auto px-[clamp(22px,5vw,56px)]'>
        <div className='max-w-[64ch]'>
          <span className='block mb-[18px] font-mono text-[12px] tracking-[0.16em] uppercase text-umber-soft'>
            <span className='text-clay-ink'>06</span>&nbsp;&nbsp;Writing &amp; what I’m building
          </span>
          <h2
            id='writing-h'
            className='m-0 font-newsreader font-medium text-[clamp(1.9rem,3.6vw,2.7rem)] leading-[1.08] tracking-[-0.01em] text-umber'>
            Where software strategy meets the AI shift.
          </h2>
          <p className='mt-[20px] text-[1.1rem] leading-[1.6] text-umber-muted max-w-[58ch]'>
            I write and build at the seam between production engineering and the AI labs — the question of what
            defensible software looks like when everyone has a model.
          </p>
        </div>
        <div className='mt-[clamp(36px,5vw,48px)] grid grid-cols-[repeat(auto-fit,minmax(290px,1fr))] gap-[24px]'>
          {writingCards.map((c) => (
            <a
              key={c.title}
              href={c.href}
              target='_blank'
              rel='noopener'
              data-reveal
              className='block no-underline bg-paper-card border border-hair-strong rounded-[12px] px-[30px] py-[32px] transition-colors hover:border-clay focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-clay focus-visible:ring-offset-2 focus-visible:ring-offset-paper'>
              <span className='font-mono text-[11px] tracking-[0.1em] uppercase text-umber-label'>{c.kind}</span>
              <h3 className='mt-[12px] mb-[10px] font-newsreader font-medium text-[1.35rem] tracking-[-0.01em] text-umber'>
                {c.title}
              </h3>
              <p className='mt-0 mb-[18px] text-[0.98rem] leading-[1.6] text-umber-muted'>{c.body}</p>
              <span className='font-mono text-[12px] tracking-[0.03em] text-clay-ink'>{c.cta}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
