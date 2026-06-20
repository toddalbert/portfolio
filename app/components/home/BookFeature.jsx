// Book feature — Out of the Fish Tank, the creative differentiator.
export default function BookFeature() {
  return (
    <section id='book' className='bg-ink-deep text-cream border-t border-cream/[0.06]'>
      <div className='max-w-[1200px] mx-auto px-[clamp(20px,5vw,64px)] py-[clamp(72px,9vw,128px)] grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-[clamp(40px,6vw,80px)] items-center'>
        <div data-aos='fade-up' className='justify-self-center'>
          <div className='relative w-[clamp(230px,26vw,320px)]'>
            <div className='absolute inset-0 -translate-x-[16px] translate-y-[16px] border border-accent/50 rounded-sm' />
            <img
              src='/fishtank_cover_sm.png'
              alt='Out of the Fish Tank — book cover'
              className='relative w-full h-auto block rounded-sm shadow-[0_30px_60px_rgba(0,0,0,0.5)]'
            />
          </div>
        </div>

        <div data-aos='fade-up'>
          <div className='font-mono text-[12.5px] tracking-[0.14em] text-accent mb-[20px]'>
            02 — OUT OF THE FISH TANK
          </div>
          <h2 className='m-0 font-newsreader font-medium text-[clamp(34px,4.6vw,58px)] leading-[1.02] tracking-[-0.01em] text-cream-bright'>
            A life reconstructed from fragments.
          </h2>
          <p className='mt-[24px] font-newsreader italic text-[clamp(18px,1.7vw,22px)] leading-[1.5] text-accent-soft'>
            A personal archive. A historical mystery. The stubborn evidence love leaves behind.
          </p>
          <p className='mt-[24px] text-[16px] leading-[1.68] text-slate-1 max-w-[520px]'>
            Before he was Hyman in Brooklyn, before his family mistook him for a ghost, Chaim Zeidler survived a century
            determined to erase him — through two world wars, a Central Asian prison camp, and a series of borrowed names.
          </p>
          <div className='flex flex-wrap gap-[14px] mt-[34px] items-center'>
            <a
              href='https://a.co/d/050pcESP'
              target='_blank'
              rel='noopener'
              className='text-[15px] font-semibold text-ink bg-accent px-[26px] py-[14px] rounded-sm transition-colors hover:bg-accent-hover'>
              Buy the book
            </a>
            <a
              href='https://toddalbert.com/books/out-of-the-fish-tank'
              target='_blank'
              rel='noopener'
              className='text-[15px] font-medium text-cream border border-cream/[0.28] px-[24px] py-[13px] rounded-sm transition-colors hover:border-cream/60'>
              Read an excerpt →
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
