import { outcomes } from './data'

// 02 — Selected outcomes: dark section with three result cards.
export default function Outcomes() {
  return (
    <section id='outcomes' aria-labelledby='outcomes-h' className='bg-night text-night-text py-[clamp(64px,9vw,116px)]'>
      <div className='max-w-shell mx-auto px-[clamp(22px,5vw,56px)]'>
        <div className='max-w-[62ch]'>
          <span className='block mb-[18px] font-mono text-[12px] tracking-[0.16em] uppercase text-night-label'>
            <span className='text-clay-light'>02</span>&nbsp;&nbsp;Selected outcomes
          </span>
          <h2
            id='outcomes-h'
            className='m-0 font-newsreader font-medium text-[clamp(1.9rem,3.6vw,2.7rem)] leading-[1.08] tracking-[-0.01em] text-night-bright'>
            Proof, not adjectives.
          </h2>
          <p className='mt-[20px] text-[1.1rem] leading-[1.6] text-night-muted max-w-[56ch]'>
            Technology decisions that moved a number — revenue, margin, reliability, speed — and held up under load.
          </p>
        </div>

        <div className='mt-[clamp(36px,5vw,52px)] grid grid-cols-[repeat(auto-fit,minmax(290px,1fr))] gap-px bg-night-line border border-night-line rounded-[12px] overflow-hidden'>
          {outcomes.map((o) => (
            <article
              key={o.num}
              data-reveal
              className='bg-night-card p-[clamp(28px,2.6vw,38px)] flex flex-col min-h-[360px]'>
              <div className='flex justify-between items-baseline gap-[14px] mb-[24px]'>
                <span className='font-newsreader text-[2.5rem] font-medium text-clay-light leading-none'>{o.num}</span>
                <span className='font-mono text-[10.5px] tracking-[0.07em] text-night-label text-right max-w-[18ch] leading-[1.4]'>
                  {o.context}
                </span>
              </div>
              <h3 className='m-0 mb-[14px] font-newsreader font-medium text-[1.4rem] leading-[1.18] tracking-[-0.01em] text-night-bright'>
                {o.title}
              </h3>
              <p className='m-0 mb-[28px] text-[0.98rem] leading-[1.6] text-night-body'>{o.body}</p>
              <div className='mt-auto flex gap-[30px] pt-[22px] border-t border-night-line'>
                {o.metrics.map((m) => (
                  <div key={m.l}>
                    <div className='font-newsreader text-[1.5rem] font-medium text-night-text'>{m.n}</div>
                    <div className='font-mono text-[10.5px] tracking-[0.06em] text-night-label mt-[5px]'>{m.l}</div>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
