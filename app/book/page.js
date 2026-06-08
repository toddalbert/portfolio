import Link from 'next/link'
import { playfair, spectral } from '../fonts'

export const metadata = {
  title: 'Out of the Fish Tank | A novel by Todd H. Albert',
  description:
    'The reconstructed life of Chaim Zeidler — a Galician Jew who survived captivity in the First World War, lived under a series of assumed identities, and remade himself in Brooklyn.',
  openGraph: {
    title: 'Out of the Fish Tank | A novel by Todd H. Albert',
    description:
      'The reconstructed life of Chaim Zeidler — a Galician Jew who survived captivity in the First World War, lived under a series of assumed identities, and remade himself in Brooklyn.',
    url: 'https://www.toddalbert.com/book',
    siteName: 'toddalbert.com',
    images: [{ url: '/fishtank_cover_sm.png', width: 432, height: 666 }],
    locale: 'en_US',
    type: 'book',
  },
}

// Palette (literary brand — intentionally separate from the stone/blue portfolio):
//   parchment #f4eee1 · panel #ece3d1 · ink #211c15 · soft ink #4a4035
//   oxblood #7c2d2d · hairline #d8cdb8
// TODO(assets): drop the real cover image at public/book/cover.jpg and swap the
//   faux cover below; add author photo at public/book/author.jpg.
// TODO(copy): replace the placeholder logline, excerpt, and reconstruction text
//   with final jacket copy.
// TODO(buy): fill in real retailer URLs (Amazon / Bookshop / B&N / publisher).

export default function BookPage() {
  return (
    <main className={`${spectral.className} min-h-screen bg-[#f4eee1] text-[#211c15] selection:bg-[#7c2d2d] selection:text-[#f4eee1]`}>
      {/* back to portfolio */}
      <div className='border-b border-[#d8cdb8]'>
        <div className='max-w-5xl mx-auto px-6 py-4 flex items-center justify-between text-sm tracking-wide'>
          <Link href='/' className='text-[#4a4035] hover:text-[#7c2d2d] transition'>
            ← Todd&nbsp;H.&nbsp;Albert
          </Link>
          <a href='https://a.co/d/050pcESP' className='text-[#7c2d2d] hover:text-[#211c15] transition uppercase tracking-widest text-xs'>
            Buy the book
          </a>
        </div>
      </div>

      {/* ===== Hero ===== */}
      <section className='max-w-5xl mx-auto px-6 pt-16 pb-20 md:pt-24 md:pb-28 grid md:grid-cols-2 gap-12 md:gap-16 items-center'>
        <div className='order-2 md:order-1'>
          <p className={`${spectral.className} italic text-[#7c2d2d] text-lg mb-4`}>A novel by Todd H. Albert</p>
          <h1 className={`${playfair.className} text-5xl md:text-6xl leading-[1.05] tracking-tight`}>
            Out of the<br />Fish Tank
          </h1>
          <p className='mt-6 text-lg md:text-xl leading-relaxed text-[#4a4035] max-w-md'>
            The reconstructed life of Chaim Zeidler — a Galician Jew who survived
            captivity in the First World War, lived under a series of assumed
            identities, and finally remade himself in Brooklyn.
          </p>
          <div className='mt-9 flex flex-wrap gap-4'>
            <a
              href='https://a.co/d/050pcESP'
              className='px-7 py-3 bg-[#7c2d2d] text-[#f4eee1] uppercase tracking-widest text-xs hover:bg-[#211c15] transition'>
              Buy the book
            </a>
            <a
              href='#excerpt'
              className='px-7 py-3 border border-[#211c15] text-[#211c15] uppercase tracking-widest text-xs hover:bg-[#211c15] hover:text-[#f4eee1] transition'>
              Read an excerpt
            </a>
          </div>
        </div>

        <div className='order-1 md:order-2 flex justify-center'>
          <img
            src='/fishtank_cover_sm.png'
            alt='Out of the Fish Tank — book cover'
            className='w-64 md:w-72 aspect-[2/3] object-cover shadow-2xl rotate-1'
          />
        </div>
      </section>

      {/* ===== The story ===== */}
      <section className='border-t border-[#d8cdb8] bg-[#ece3d1]'>
        <div className='max-w-3xl mx-auto px-6 py-20 md:py-24'>
          <h2 className={`${playfair.className} text-3xl md:text-4xl mb-8`}>The story</h2>
          {/* TODO(copy): final jacket / synopsis copy */}
          <div className='space-y-6 text-lg leading-relaxed text-[#3a332a]'>
            <p>
              Chaim Zeidler survived two world wars, a Russian revolution, a Central Asian prison camp, and a death sentenced
              existence-forced to abandon his name, his faith, and his identity more than once just to stay alive.
            </p>
            <p>
              He was presumed dead by his own family, He returned years later.
            </p>
            <p>
              They didn't believe their eyes.
            </p>
            <p>
              This is the true story of a man who was knocked down by history again and again-and got up every single time.
            </p>
            <p>
              <em>A story of survival. Of silence.</em>
            </p>
            <p>
              <em>Of love that refused to disappear.</em>
            </p>
          </div>
        </div>
      </section>

      {/* ===== Excerpt ===== */}
      <section id='excerpt' className='max-w-3xl mx-auto px-6 py-20 md:py-28'>
        <p className='uppercase tracking-[0.3em] text-xs text-[#7c2d2d] mb-8 text-center'>From the opening pages</p>
        {/* TODO(copy): replace with a real passage from the manuscript */}
        <blockquote className={`${playfair.className} text-2xl md:text-3xl leading-relaxed text-center text-[#211c15]`}>
          “To understand how a living man comes to be turned away as a ghost on his own family's doorstep, you have to go back
          past two wars, a Central Asian prison camp, and two borrowed names, all the way back to a tavern in a village on the
          eastern edge of an empire that no longer exists.”
        </blockquote>
      </section>

      {/* ===== The reconstruction (author's angle) ===== */}
      <section className='border-t border-[#d8cdb8] bg-[#ece3d1]'>
        <div className='max-w-3xl mx-auto px-6 py-20 md:py-24'>
          <h2 className={`${playfair.className} text-3xl md:text-4xl mb-8`}>The reconstruction</h2>
          {/* TODO(copy): your research story — records, archives, what's documented
              vs. imagined. This is the credibility + hook of the project. */}
          <div className='space-y-6 text-lg leading-relaxed text-[#3a332a]'>
            <p>
              Todd H. Albert, Ph.D., spent the first part of his career as a research glaciologist, conducting NASA- and NOAA-funded
              fieldwork on glaciers and ice from Greenland to the Peruvian Andes, the Rockies, and the Alps. <em>Out of the Fish Tank</em>
              turns that same investigative instinct inward — onto his own family&apos;s buried past.
            </p>
            <p>
              The book reconstructs the life of his ancestor Chaim "Hyman" Zeidler: a Galician Jew who survived captivity in the First
              World War, lived under a series of assumed identities, and finally remade himself in Brooklyn. Drawing on family
              recordings, oral histories, archival transport records, and years of genealogical research, Albert pieces together a story
              his family nearly lost.
            </p>
          </div>
        </div>
      </section>

      {/* ===== About the author ===== */}
      <section className='max-w-4xl mx-auto px-6 py-20 md:py-24 grid md:grid-cols-[auto,1fr] gap-10 md:gap-14 items-center'>
        <div className='justify-self-center'>
          {/* Reusing the existing portfolio headshot; swap for a book-specific photo if desired */}
          <img
            src='/todd-albert-sm.jpg'
            alt='Todd H. Albert'
            className='w-40 h-40 object-cover rounded-full grayscale border-4 border-[#ece3d1] shadow-lg'
          />
        </div>
        <div>
          <h2 className={`${playfair.className} text-3xl md:text-4xl mb-5`}>About the author</h2>
          <p className='text-lg leading-relaxed text-[#3a332a]'>
            Todd&nbsp;H.&nbsp;Albert is a writer and the great-grandson of the man at
            the center of this book. {/* TODO(copy): tighten bio for a literary audience */}
            A former NASA research fellow and longtime technologist, he spent years
            chasing the paper trail his ancestor left across three continents.
          </p>
          <p className='mt-4 text-sm text-[#4a4035]'>
            For his work in technology and engineering leadership, see{' '}
            <Link href='/' className='text-[#7c2d2d] underline underline-offset-4 hover:text-[#211c15]'>
              toddalbert.com
            </Link>
            .
          </p>
        </div>
      </section>

      {/* ===== Praise (placeholder) ===== */}
      <section className='border-t border-[#d8cdb8] bg-[#ece3d1]'>
        <div className='max-w-4xl mx-auto px-6 py-20 md:py-24'>
          <h2 className={`${playfair.className} text-3xl md:text-4xl mb-10 text-center`}>Praise</h2>
          {/* TODO(copy): real blurbs once available */}
          <div className='grid md:grid-cols-2 gap-10'>
            <figure className='text-center'>
              <blockquote className={`${spectral.className} italic text-xl leading-relaxed text-[#211c15]`}>
                “An advance blurb will live here once the book is out in the world.”
              </blockquote>
              <figcaption className='mt-4 uppercase tracking-widest text-xs text-[#7c2d2d]'>— Reviewer, Publication</figcaption>
            </figure>
            <figure className='text-center'>
              <blockquote className={`${spectral.className} italic text-xl leading-relaxed text-[#211c15]`}>
                “A second line of early praise, waiting to be filled in.”
              </blockquote>
              <figcaption className='mt-4 uppercase tracking-widest text-xs text-[#7c2d2d]'>— Author, Title</figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* ===== Buy ===== */}
      <section id='buy' className='max-w-3xl mx-auto px-6 py-20 md:py-28 text-center'>
        <h2 className={`${playfair.className} text-3xl md:text-4xl mb-6`}>Get the book</h2>
        <p className='text-lg text-[#4a4035] mb-10'>
          Available now:
        </p>
        <div className='flex flex-wrap justify-center gap-4'>
          <a
            href='https://a.co/d/050pcESP'
            className='px-7 py-3 border border-[#211c15] uppercase tracking-widest text-xs hover:bg-[#7c2d2d] hover:border-[#7c2d2d] hover:text-[#f4eee1] transition'>
            Amazon
          </a>
        </div>
      </section>

      {/* ===== Footer ===== */}
      <footer className='border-t border-[#d8cdb8]'>
        <div className='max-w-5xl mx-auto px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-[#4a4035]'>
          <span className={playfair.className}>Out of the Fish Tank</span>
          <span>© {new Date().getFullYear()} Todd H. Albert</span>
          <Link href='/' className='hover:text-[#7c2d2d] transition'>toddalbert.com →</Link>
        </div>
      </footer>
    </main>
  )
}
