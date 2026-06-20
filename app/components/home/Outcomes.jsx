import { outcomes } from './data'

// Selected Outcomes — outcome-led case cards on a light surface.
export default function Outcomes() {
  return (
    <section id='work' className='bg-sand text-sand-ink border-t border-black/[0.07]'>
      <div className='max-w-[1200px] mx-auto px-[clamp(20px,5vw,64px)] py-[clamp(72px,9vw,132px)]'>
        <div data-aos='fade-up' className='max-w-[760px] mb-[clamp(40px,5vw,68px)]'>
          <div className='font-mono text-[12.5px] tracking-[0.14em] text-sand-eyebrow mb-[18px]'>
            01 — SELECTED OUTCOMES
          </div>
          <h2 className='m-0 font-medium text-[clamp(30px,4.4vw,54px)] leading-[1.04] tracking-[-0.02em]'>
            Systems rebuilt
          </h2>
          <p className='mt-[22px] text-[17px] leading-[1.6] text-sand-muted max-w-[580px]'>
            Each of these is a tangled, stalled, or fragile system that needed direction — and the measurable result of
            giving it some.
          </p>
        </div>

        <div className='grid grid-cols-[repeat(auto-fit,minmax(290px,1fr))] gap-px bg-black/10 border border-black/10'>
          {outcomes.map(o => (
            <article
              key={o.idx}
              data-aos='fade-up'
              className='bg-sand-card p-[clamp(28px,2.6vw,40px)] flex flex-col min-h-[380px] transition-colors duration-300 hover:bg-white'>
              <div className='flex justify-between items-baseline mb-[24px]'>
                <span className='font-newsreader text-[40px] font-medium text-accent leading-none'>{o.idx}</span>
                <span className='font-mono text-[10.5px] tracking-[0.08em] text-sand-label text-right max-w-[170px] leading-[1.4]'>
                  {o.context}
                </span>
              </div>
              <h3 className='m-0 mb-[16px] text-[clamp(20px,1.7vw,24px)] font-semibold leading-[1.18] tracking-[-0.01em] text-sand-ink'>
                {o.title}
              </h3>
              <p className='m-0 mb-[28px] text-[14.5px] leading-[1.62] text-sand-muted'>{o.body}</p>
              <div className='mt-auto flex gap-[28px] pt-[22px] border-t border-black/10'>
                {o.metrics.map((m, i) => (
                  <div key={i}>
                    <div className='font-grotesk text-[23px] font-semibold text-sand-ink tracking-[-0.01em]'>{m.n}</div>
                    <div className='font-mono text-[10.5px] tracking-[0.06em] text-sand-label mt-[4px]'>{m.l}</div>
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
