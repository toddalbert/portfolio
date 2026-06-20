// Final call to action — start a conversation.
export default function FinalCTA() {
  return (
    <section id='contact' className='bg-ink text-cream relative border-t border-cream/[0.06]'>
      <div
        data-aos='fade-up'
        className='max-w-[900px] mx-auto px-[clamp(20px,5vw,64px)] py-[clamp(80px,10vw,150px)] text-center'>
        <div className='font-mono text-[12.5px] tracking-[0.14em] text-accent mb-[24px]'>START A CONVERSATION</div>
        <h2 className='m-0 mx-auto max-w-[720px] font-medium text-[clamp(34px,5.2vw,68px)] leading-[1.04] tracking-[-0.022em] text-cream-bright'>
          Tangled, fragile, or nearly lost?{' '}
          <span className='font-newsreader italic font-normal text-accent'>That&apos;s where I start.</span>
        </h2>
        <p className='mt-[26px] mx-auto max-w-[560px] text-[17px] leading-[1.62] text-slate-1'>
          Open to executive, advisory, speaking, media, and book conversations.
        </p>
        <div className='flex flex-wrap gap-[14px] mt-[40px] justify-center'>
          <a
            href='https://www.linkedin.com/in/toddalbert/'
            target='_blank'
            rel='noopener'
            className='text-[15px] font-semibold text-ink bg-accent px-[28px] py-[15px] rounded-sm transition-colors hover:bg-accent-hover'>
            Connect on LinkedIn
          </a>
          <a
            href='/Albert-Todd-resume-June-2026.pdf'
            target='_blank'
            rel='noopener'
            className='text-[15px] font-medium text-cream border border-cream/[0.28] px-[26px] py-[14px] rounded-sm transition-colors hover:border-cream/60'>
            Download Leadership Brief
          </a>
        </div>
      </div>
    </section>
  )
}
