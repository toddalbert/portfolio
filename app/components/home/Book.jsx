import Link from 'next/link'

// 07 — New book: Out of the Fish Tank feature.
export default function Book() {
  return (
    <section id='book' aria-labelledby='book-h' className='py-[clamp(64px,9vw,112px)] border-t border-hair bg-paper-alt'>
      <div className='max-w-shell mx-auto px-[clamp(22px,5vw,56px)]'>
        <div className='flex flex-wrap gap-[clamp(32px,5vw,56px)] items-center'>
          <div className='flex-[0_0_210px]'>
            <div className='relative w-[210px] aspect-[2/3] rounded-[4px] overflow-hidden bg-umber shadow-[0_18px_46px_rgba(40,31,23,.28)]'>
              <div
                aria-hidden='true'
                className='absolute inset-0 flex flex-col items-center justify-center gap-[8px] p-[20px] text-center'>
                <div className='font-newsreader italic text-[1.4rem] leading-[1.2] text-clay-glow'>
                  Out of the Fish Tank
                </div>
                <div className='font-mono text-[10px] tracking-[0.14em] text-night-label'>BOOK COVER</div>
              </div>
              <img
                src='/fishtank_cover_sm.png'
                alt='Out of the Fish Tank — book cover'
                className='absolute inset-0 w-full h-full object-cover'
              />
            </div>
          </div>
          <div className='flex-1 basis-[360px] min-w-0'>
            <span className='block mb-[14px] font-mono text-[12px] tracking-[0.16em] uppercase text-umber-soft'>
              <span className='text-clay-ink'>07</span>&nbsp;&nbsp;New book
            </span>
            <h2
              id='book-h'
              className='m-0 font-newsreader font-medium italic text-[clamp(1.8rem,3.3vw,2.4rem)] leading-[1.1] tracking-[-0.01em] text-umber'>
              Out of the Fish Tank
            </h2>
            <p className='mt-[18px] mb-[24px] text-[1.05rem] leading-[1.62] text-umber-muted max-w-[54ch]'>
              I spent years reconstructing the life of my ancestor Chaim Zeidler — a Galician Jew who survived captivity
              in the First World War, lived under a series of assumed identities, and finally remade himself in Brooklyn.
              A family that wouldn’t be erased, pieced back together from the records it left behind.
            </p>
            <Link
              href='/books/out-of-the-fish-tank'
              className='inline-block font-mono text-[13px] tracking-[0.02em] px-[22px] py-[13px] rounded-[3px] no-underline bg-umber text-paper border border-umber transition-colors hover:bg-[#3a3026] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-clay focus-visible:ring-offset-2 focus-visible:ring-offset-paper-alt'>
              About the book ↗
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
