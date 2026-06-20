// The Through-Line — Science → Software → Story, the synthesizing narrative.
const steps = [
  {
    label: 'SCIENCE',
    title: 'Reverse-engineering ice',
    body: 'NASA- & NOAA-funded glaciology and a Ph.D. — chasing data from Greenland to the Peruvian Andes.',
  },
  {
    label: 'SOFTWARE',
    title: 'Reverse-engineering systems',
    body: '30+ years building, modernizing, and leading platforms as Principal, VP, and CTO.',
  },
  {
    label: 'STORY',
    title: 'Reverse-engineering a life',
    body: 'Out of the Fish Tank — one family history reconstructed from fragments and records.',
  },
]

export default function ThroughLine() {
  return (
    <section id='through' className='bg-ink text-cream relative border-t border-cream/[0.06]'>
      <div className='max-w-[1100px] mx-auto px-[clamp(20px,5vw,64px)] py-[clamp(72px,9vw,128px)] text-center'>
        <div data-aos='fade-up'>
          <div className='font-mono text-[12.5px] tracking-[0.14em] text-accent mb-[18px]'>THE THROUGH-LINE</div>
          <h2 className='m-0 mx-auto max-w-[740px] font-medium text-[clamp(28px,3.9vw,46px)] leading-[1.12] tracking-[-0.02em] text-cream-bright'>
            One instinct, three careers:{' '}
            <span className='font-newsreader italic font-normal text-accent'>find the signal, rebuild from it.</span>
          </h2>
        </div>

        <div
          data-aos='fade-up'
          className='mt-[clamp(48px,6vw,80px)] flex flex-wrap items-stretch justify-center'>
          {steps.map((s, i) => (
            <div key={s.label} className='contents'>
              <div className='flex-1 basis-[230px] min-w-[220px] px-[clamp(14px,2vw,30px)] text-left'>
                <div className='font-mono text-[12px] tracking-[0.16em] text-slate-3 mb-[14px]'>{s.label}</div>
                <div className='font-newsreader text-[clamp(19px,1.9vw,24px)] italic text-cream-bright mb-[14px]'>
                  {s.title}
                </div>
                <p className='m-0 text-[14px] leading-[1.6] text-slate-2'>{s.body}</p>
              </div>
              {i < steps.length - 1 && (
                <div className='flex items-center text-accent text-[22px] py-[14px]'>→</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
