import { proof, contourPaths, contourOpacity } from './data'

// Hero: topographic backdrop, positioning statement, portrait, and a proof strip.
export default function Hero() {
  return (
    <header id='top' className='relative'>
      <svg
        viewBox='0 0 1440 760'
        preserveAspectRatio='xMidYMid slice'
        aria-hidden='true'
        className='absolute inset-0 w-full h-full pointer-events-none'
        style={{ opacity: contourOpacity }}>
        {contourPaths.map((d, i) => (
          <path key={i} d={d} fill='none' stroke='#9FB2BA' strokeWidth='1' />
        ))}
      </svg>

      <div className='relative max-w-[1200px] mx-auto px-[clamp(20px,5vw,64px)] pt-[clamp(56px,9vw,118px)] pb-[clamp(44px,6vw,80px)] grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-[clamp(36px,5vw,72px)] items-center'>
        <div data-aos='fade-up'>
          <div className='font-mono text-[12.5px] tracking-[0.16em] text-accent mb-[26px]'>
            ENGINEERING EXECUTIVE · SCIENTIST · AUTHOR
          </div>
          <h1 className='m-0 font-medium text-[clamp(46px,7.4vw,104px)] leading-[0.98] tracking-[-0.022em] text-cream-bright'>
            I rebuild
            <br />
            <span className='font-newsreader italic font-normal text-accent'>complex systems.</span>
          </h1>
          <p className='max-w-[560px] mt-[30px] text-[clamp(16px,1.5vw,19px)] leading-[1.62] text-slate-1'>
            Engineering executive, former NASA-funded scientist, educator, and author. I help teams{' '}
            <span className='text-cream border-b border-accent pb-px'>find the structure inside complexity</span> — then
            turn it into software, organizations, products, and stories that hold together.
          </p>
          <div className='flex flex-wrap gap-[14px] mt-[38px] items-center'>
            <a
              href='#contact'
              className='text-[15px] font-semibold text-ink bg-accent px-[26px] py-[15px] rounded-sm transition-colors hover:bg-accent-hover'>
              Start a Conversation
            </a>
            <a
              href='/Albert-Todd-resume-May-2026.pdf'
              target='_blank'
              rel='noopener'
              className='text-[15px] font-medium text-cream border border-cream/[0.28] px-[24px] py-[14px] rounded-sm transition-colors hover:border-cream/60 hover:bg-cream/[0.04]'>
              Download Leadership Brief
            </a>
            <a href='#book' className='text-[14.5px] text-slate-2 px-1 py-2 transition-colors hover:text-cream'>
              Read about the book →
            </a>
          </div>
        </div>

        <div data-aos='fade-up' className='justify-self-center'>
          <div className='relative w-[clamp(260px,30vw,372px)]'>
            <div className='absolute inset-0 translate-x-[18px] translate-y-[18px] border border-accent rounded-sm opacity-60' />
            <div className='relative aspect-[4/5] bg-ink-panel rounded-sm overflow-hidden border border-cream/10'>
              <img
                src='/todd-headshot.jpg'
                alt='Portrait of Todd H. Albert'
                className='w-full h-full object-cover object-[center_22%] block [filter:grayscale(1)_sepia(0.28)_brightness(0.94)_contrast(1.06)]'
              />
              <div className='absolute inset-0 bg-accent mix-blend-overlay opacity-[0.16]' />
              <div className='absolute left-0 right-0 bottom-0 px-[14px] py-[12px] flex justify-between items-center font-mono text-[10.5px] tracking-[0.1em] text-cream bg-gradient-to-t from-ink-deep/[0.85] to-transparent'>
                <span>TODD H. ALBERT</span>
                <span className='text-accent'>PH.D.</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* PROOF STRIP */}
      <div className='relative border-t border-cream/[0.08] bg-ink-deep/[0.55]'>
        <div
          data-aos='fade-up'
          className='max-w-[1200px] mx-auto px-[clamp(20px,5vw,64px)] py-[32px] grid grid-cols-[repeat(auto-fit,minmax(170px,1fr))] gap-y-[22px] gap-x-[clamp(22px,3vw,44px)]'>
          {proof.map((p, i) => (
            <div key={i} className='flex items-start gap-[12px]'>
              <span className='flex-none w-[7px] h-[7px] mt-[6px] bg-accent' />
              <span className='text-[13.5px] leading-[1.42] text-slate-4 font-medium'>{p}</span>
            </div>
          ))}
        </div>
      </div>
    </header>
  )
}
