import Link from 'next/link'
import { oswald, spectral } from '../fonts'

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
//   parchment #e9e0cc · panel #ded2b8 · ink #221f17 · soft ink #4f4636
//   oxblood #8a4b30 · hairline #cdbf9f
// TODO(assets): drop the real cover image at public/book/cover.jpg and swap the
//   faux cover below; add author photo at public/book/author.jpg.
// TODO(copy): replace the placeholder logline, excerpt, and reconstruction text
//   with final jacket copy.
// TODO(buy): fill in real retailer URLs (Amazon / Bookshop / B&N / publisher).

export default function BookPage() {
  return (
    <main className={`${spectral.className} min-h-screen bg-[#e9e0cc] text-[#221f17] selection:bg-[#8a4b30] selection:text-[#e9e0cc]`}>
      {/* back to portfolio */}
      <div className='border-b border-[#cdbf9f]'>
        <div className='max-w-5xl mx-auto px-6 py-4 flex items-center justify-between text-sm tracking-wide'>
          <Link href='/' className='text-[#4f4636] hover:text-[#8a4b30] transition'>
            ← Todd&nbsp;H.&nbsp;Albert
          </Link>
          <a href='https://a.co/d/050pcESP' className='text-[#8a4b30] hover:text-[#221f17] transition uppercase tracking-widest text-xs'>
            Buy the book
          </a>
        </div>
      </div>

      {/* ===== Hero ===== */}
      <section className='max-w-5xl mx-auto px-6 pt-16 pb-20 md:pt-24 md:pb-28 grid md:grid-cols-2 gap-12 md:gap-16 items-center'>
        <div className='order-2 md:order-1'>
          <p className={`${spectral.className} italic text-[#8a4b30] text-lg mb-4`}>A novel by Todd H. Albert</p>
          <h1 className={`${oswald.className} font-bold uppercase text-6xl md:text-7xl leading-[0.92] tracking-tight`}>
            Out of the<br />Fish Tank
          </h1>
          <p className='mt-6 text-lg md:text-xl leading-relaxed text-[#4f4636] max-w-md'>
            The reconstructed life of Chaim Zeidler — a Galician Jew who survived
            captivity in the First World War, lived under a series of assumed
            identities, and finally remade himself in Brooklyn.
          </p>
          <div className='mt-9 flex flex-wrap gap-4'>
            <a
              href='https://a.co/d/050pcESP'
              className='px-7 py-3 bg-[#8a4b30] text-[#e9e0cc] uppercase tracking-widest text-xs hover:bg-[#221f17] transition'>
              Buy the book
            </a>
            <a
              href='#excerpt'
              className='px-7 py-3 border border-[#221f17] text-[#221f17] uppercase tracking-widest text-xs hover:bg-[#221f17] hover:text-[#e9e0cc] transition'>
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
      <section className='border-t border-[#cdbf9f] bg-[#ded2b8]'>
        <div className='max-w-3xl mx-auto px-6 py-20 md:py-24'>
          <h2 className={`${oswald.className} uppercase tracking-wide text-3xl md:text-4xl mb-8`}>The story</h2>
          {/* TODO(copy): final jacket / synopsis copy */}
          <div className='space-y-6 text-lg leading-relaxed text-[#463d2e]'>
            <p>
              Chaim Zeidler survived two world wars, a Russian revolution, a Central Asian prison camp, and a death-sentenced
              existence — forced to abandon his name, his faith, and his identity more than once just to stay alive.
            </p>
            <p>
              He was presumed dead by his own family. He returned years later.
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
        <p className='uppercase tracking-[0.3em] text-xs text-[#8a4b30] mb-8 text-center'>From the opening pages</p>
        {/* TODO(copy): replace with a real passage from the manuscript */}
        <blockquote className={`${spectral.className} italic text-2xl md:text-3xl leading-relaxed text-center text-[#221f17]`}>
          “To understand how a living man comes to be turned away as a ghost on his own family's doorstep, you have to go back
          past two wars, a Central Asian prison camp, and two borrowed names, all the way back to a tavern in a village on the
          eastern edge of an empire that no longer exists.”
        </blockquote>
      </section>

      {/* ===== The reconstruction (author's angle) ===== */}
      <section className='border-t border-[#cdbf9f] bg-[#ded2b8]'>
        <div className='max-w-3xl mx-auto px-6 py-20 md:py-24'>
          <h2 className={`${oswald.className} uppercase tracking-wide text-3xl md:text-4xl mb-8`}>The reconstruction</h2>
          {/* TODO(copy): your research story — records, archives, what's documented
              vs. imagined. This is the credibility + hook of the project. */}
          <div className='space-y-6 text-lg leading-relaxed text-[#463d2e]'>
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
          <img
            src='/todd-headshot.jpg'
            alt='Todd H. Albert'
            className='w-40 h-40 object-cover rounded-full border-4 border-[#ded2b8] shadow-lg'
          />
        </div>
        <div>
          <h2 className={`${oswald.className} uppercase tracking-wide text-3xl md:text-4xl mb-5`}>About the author</h2>
          <p className='text-lg leading-relaxed text-[#463d2e]'>
            Todd&nbsp;H.&nbsp;Albert is a writer and the great-grandson of the man at
            the center of this book. {/* TODO(copy): tighten bio for a literary audience */}
            A former NASA research fellow and longtime technologist, he spent years
            chasing the paper trail his ancestor left across three continents.
          </p>
          <p className='mt-4 text-sm text-[#4f4636]'>
            For his work in technology and engineering leadership, see{' '}
            <Link href='/' className='text-[#8a4b30] underline underline-offset-4 hover:text-[#221f17]'>
              toddalbert.com
            </Link>
            .
          </p>
        </div>
      </section>

      {/* ===== Praise (placeholder) ===== */}
      <section className='border-t border-[#cdbf9f] bg-[#ded2b8]'>
        <div className='max-w-4xl mx-auto px-6 py-20 md:py-24'>
          <h2 className={`${oswald.className} uppercase tracking-wide text-3xl md:text-4xl mb-10 text-center`}>Praise</h2>
          {/* TODO(copy): real blurbs once available */}
          <div className='grid md:grid-cols-2 gap-10'>
            <figure className='text-center'>
              <blockquote className={`${spectral.className} italic text-xl leading-relaxed text-[#221f17]`}>
                “An advance blurb will live here once the book is out in the world.”
              </blockquote>
              <figcaption className='mt-4 uppercase tracking-widest text-xs text-[#8a4b30]'>— Reviewer, Publication</figcaption>
            </figure>
            <figure className='text-center'>
              <blockquote className={`${spectral.className} italic text-xl leading-relaxed text-[#221f17]`}>
                “A second line of early praise, waiting to be filled in.”
              </blockquote>
              <figcaption className='mt-4 uppercase tracking-widest text-xs text-[#8a4b30]'>— Author, Title</figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* ===== Buy ===== */}
      <section id='buy' className='max-w-3xl mx-auto px-6 py-20 md:py-28 text-center'>
        <h2 className={`${oswald.className} uppercase tracking-wide text-3xl md:text-4xl mb-6`}>Get the book</h2>
        <p className='text-lg text-[#4f4636] mb-10'>
          Available now:
        </p>
        <div className='flex flex-wrap justify-center gap-4'>
          <a
            href='https://a.co/d/050pcESP'
            className='px-7 py-3 border border-[#221f17] uppercase tracking-widest text-xs hover:bg-[#8a4b30] hover:border-[#8a4b30] hover:text-[#e9e0cc] transition'>
            Amazon
          </a>
        </div>
      </section>

      {/* ===== Footer ===== */}
      <footer className='border-t border-[#cdbf9f]'>
        <div className='max-w-5xl mx-auto px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-[#4f4636]'>
          <span className={`${oswald.className} uppercase tracking-wide`}>Out of the Fish Tank</span>
          <span>© {new Date().getFullYear()} Todd H. Albert</span>
          <Link href='/' className='hover:text-[#8a4b30] transition'>toddalbert.com →</Link>
        </div>
      </footer>
    </main>
  )
}
