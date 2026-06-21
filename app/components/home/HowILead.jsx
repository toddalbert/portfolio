import { leadCards } from './data'

// 03 — How I lead: the operating philosophy as three principle cards.
export default function HowILead() {
  return (
    <section aria-labelledby='lead-h' className='py-[clamp(64px,9vw,112px)]'>
      <div className='max-w-shell mx-auto px-[clamp(22px,5vw,56px)]'>
        <div className='max-w-[64ch]'>
          <span className='block mb-[18px] font-mono text-[12px] tracking-[0.16em] uppercase text-umber-soft'>
            <span className='text-clay-ink'>03</span>&nbsp;&nbsp;How I lead
          </span>
          <h2
            id='lead-h'
            className='m-0 font-newsreader font-medium text-[clamp(1.9rem,3.6vw,2.7rem)] leading-[1.08] tracking-[-0.01em] text-umber'>
            I direct teams to understand systems before they change them.
          </h2>
          <p className='mt-[20px] text-[1.1rem] leading-[1.6] text-umber-muted max-w-[58ch]'>
            My differentiator is an instinct I install across an organization, not a thing I do alone:{' '}
            <b className='text-umber font-semibold'>reverse-engineer the live system.</b> Understand why production
            behaves the way it does, then change it deliberately — never the demolish-and-rewrite reflex that’s the top
            fear when hiring a senior engineering leader.
          </p>
        </div>
        <div className='mt-[clamp(36px,5vw,48px)] grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-px bg-hair border border-hair rounded-[12px] overflow-hidden'>
          {leadCards.map((c) => (
            <div key={c.title} data-reveal className='bg-paper-card px-[28px] py-[30px]'>
              <span className='font-mono text-[12px] tracking-[0.06em] text-clay-ink'>{c.tag}</span>
              <h3 className='mt-[14px] mb-[10px] font-newsreader font-medium text-[1.3rem] tracking-[-0.01em] text-umber'>
                {c.title}
              </h3>
              <p className='m-0 text-[0.98rem] leading-[1.6] text-umber-muted'>{c.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
