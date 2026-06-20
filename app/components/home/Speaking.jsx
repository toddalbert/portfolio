import { talks } from './data'

// Writing & Speaking — invitations to keynote, talk, and essay.
export default function Speaking() {
  return (
    <section id='speaking' className='bg-sand text-sand-ink'>
      <div className='max-w-[1200px] mx-auto px-[clamp(20px,5vw,64px)] py-[clamp(72px,9vw,128px)]'>
        <div
          data-aos='fade-up'
          className='flex flex-wrap justify-between items-end gap-[24px] mb-[clamp(40px,5vw,60px)]'>
          <div className='max-w-[640px]'>
            <div className='font-mono text-[12.5px] tracking-[0.14em] text-sand-eyebrow mb-[18px]'>
              03 — WRITING &amp; SPEAKING
            </div>
            <h2 className='m-0 font-medium text-[clamp(30px,4.4vw,54px)] leading-[1.04] tracking-[-0.02em]'>
              Ideas worth <span className='font-newsreader italic font-normal'>sharing.</span>
            </h2>
          </div>
          {/* <a
            href='#contact'
            className='font-mono text-[12.5px] tracking-[0.06em] text-sand-ink border-b border-accent pb-[3px] whitespace-nowrap'>
            INVITE TODD TO SPEAK →
          </a> */}
        </div>

        <div className='grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-[clamp(20px,2.4vw,32px)]'>
          {talks.map(t => (
            <a
              key={t.t}
              href={t.link}
              target='_blank'
              rel='noopener'
              data-aos='fade-up'
              className='flex flex-col bg-sand-card border border-black/10 rounded-sm p-[clamp(26px,2.4vw,34px)] min-h-[240px] transition-[transform,background-color,border-color] duration-[250ms] hover:bg-white hover:border-accent hover:-translate-y-[3px]'>
              <span className='font-mono text-[11px] tracking-[0.12em] text-accent mb-[22px]'>{t.kind}</span>
              <h3 className='m-0 mb-[16px] text-[clamp(19px,1.6vw,23px)] font-semibold leading-[1.22] tracking-[-0.01em] text-sand-ink'>
                {t.t}
              </h3>
              <p className='m-0 mb-[24px] text-[14px] leading-[1.6] text-sand-muted'>{t.take}</p>
              <span className='mt-auto text-[18px] text-accent'>→</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
