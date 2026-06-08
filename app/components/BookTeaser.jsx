import Link from 'next/link'
import { oswald, spectral } from '../fonts'

// A literary "island" inside the portfolio: previews the book in its own
// dusty-sepia / olive-black identity (drawn from the cover), then sends
// readers to the full /book page.
export default function BookTeaser() {
  return (
    <section
      id='book'
      data-aos='fade-up'
      data-aos-duration='500'
      data-aos-offset='100'
      className='py-12 lg:py-20'>
      <div className='max-w-screen-xl mx-auto px-4'>
        <div className={`${spectral.className} rounded-2xl bg-[#e9e0cc] text-[#221f17] overflow-hidden grid md:grid-cols-[260px,1fr] items-stretch`}>
          {/* Cover */}
          <div className='flex items-center justify-center bg-[#ded2b8] p-8'>
            <img
              src='/fishtank_cover_sm.png'
              alt='Out of the Fish Tank — book cover'
              className='w-44 aspect-[2/3] object-cover shadow-xl rotate-1'
            />
          </div>

          {/* Copy */}
          <div className='p-8 md:p-12 flex flex-col justify-center'>
            <p className='uppercase tracking-[0.3em] text-xs text-[#8a4b30] mb-3'>New book</p>
            <h2 className={`${oswald.className} uppercase tracking-wide text-3xl md:text-4xl mb-4`}>Out of the Fish Tank</h2>
            <p className='text-lg leading-relaxed text-[#463d2e] max-w-xl'>
              I spent years reconstructing the life of my ancestor Chaim Zeidler — a
              Galician Jew who survived captivity in the First World War, lived under
              a series of assumed identities, and finally remade himself in Brooklyn.
            </p>
            <div className='mt-7'>
              <Link
                href='/book'
                className='inline-block px-7 py-3 bg-[#8a4b30] text-[#e9e0cc] uppercase tracking-widest text-xs hover:bg-[#221f17] transition'>
                About the book
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
