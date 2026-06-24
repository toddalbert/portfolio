import Link from 'next/link'
import { oswald, spectral } from '../../fonts'

const AMAZON_URL = 'https://a.co/d/050pcESP'
const AMAZON_SAMPLE_URL = 'https://read.amazon.com/sample/B0H4766WZ9?clientId=share'

export const metadata = {
  title: 'Out of the Fish Tank | Todd H. Albert',
  description:
    'Out of the Fish Tank is a true story of war, survival, family memory, and a life reconstructed from fragments by Todd H. Albert.',
  alternates: {
    canonical: 'https://www.toddalbert.com/books/out-of-the-fish-tank',
  },
  openGraph: {
    title: 'Out of the Fish Tank',
    description: 'A true story of war, survival, and a family that wouldn’t be erased.',
    url: 'https://www.toddalbert.com/books/out-of-the-fish-tank',
    siteName: 'toddalbert.com',
    images: [{ url: '/fishtank_cover_sm.png', width: 432, height: 666, alt: 'Book cover for Out of the Fish Tank by Todd H. Albert' }],
    locale: 'en_US',
    type: 'book',
  },
}

// Book schema structured data — title, author, ISBN, format, date, description,
// URL, and purchase URL for rich results.
const bookSchema = {
  '@context': 'https://schema.org',
  '@type': 'Book',
  name: 'Out of the Fish Tank',
  author: {
    '@type': 'Person',
    name: 'Todd H. Albert',
    url: 'https://www.toddalbert.com',
    image: 'https://www.toddalbert.com/todd-headshot.jpg',
  },
  isbn: '9798199797306',
  bookFormat: 'https://schema.org/Paperback',
  datePublished: '2026-06',
  inLanguage: 'en',
  genre: ['Biography & Memoir', 'Jewish Family History', 'Survival Biography'],
  description:
    'A true story of war, survival, family memory, and a life reconstructed from fragments — the reconstructed life of Chaim Zeidler by Todd H. Albert.',
  url: 'https://www.toddalbert.com/books/out-of-the-fish-tank',
  image: 'https://www.toddalbert.com/fishtank_cover_sm.png',
  offers: {
    '@type': 'Offer',
    availability: 'https://schema.org/InStock',
    url: AMAZON_URL,
  },
}

// Palette (literary brand — intentionally separate from the stone/blue portfolio):
//   parchment #e9e0cc · panel #ded2b8 · ink #221f17 · soft ink #4f4636
//   oxblood #8a4b30 · hairline #cdbf9f
// TODO(copy): replace the placeholder excerpt with a real passage from the manuscript.

export default function BookPage() {
  return (
    <main className={`${spectral.className} min-h-screen bg-[#e9e0cc] text-[#221f17] selection:bg-[#8a4b30] selection:text-[#e9e0cc]`}>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(bookSchema) }}
      />

      {/* back to portfolio */}
      <div className='border-b border-[#cdbf9f]'>
        <div className='max-w-5xl mx-auto px-6 py-4 flex items-center justify-between text-sm tracking-wide'>
          <Link href='/' className='text-[#4f4636] hover:text-[#8a4b30] transition'>
            ← Todd&nbsp;H.&nbsp;Albert
          </Link>
          <a href={AMAZON_URL} className='text-[#8a4b30] hover:text-[#221f17] transition uppercase tracking-widest text-xs'>
            Buy the book
          </a>
        </div>
      </div>

      {/* ===== Hero ===== */}
      <section className='max-w-5xl mx-auto px-6 pt-16 pb-20 md:pt-24 md:pb-28 grid md:grid-cols-2 gap-12 md:gap-16 items-start'>
        <div className='order-2 md:order-1'>
          <p className='uppercase tracking-[0.28em] text-xs text-[#8a4b30] mb-6'>
            A true story of war, survival, and a family that wouldn&apos;t be erased
          </p>
          <h1 className={`${oswald.className} font-bold uppercase text-6xl md:text-7xl leading-[0.92] tracking-tight`}>
            Out of the<br />Fish Tank
          </h1>
          <div className='mt-6 w-16 h-px bg-[#8a4b30]' aria-hidden='true' />
          <p className={`${spectral.className} italic text-2xl md:text-3xl leading-snug text-[#221f17] mt-6`}>
            A life reconstructed from fragments.
          </p>
          <p className='mt-4 text-lg leading-relaxed text-[#4f4636] max-w-md'>
            A personal archive. A historical mystery. The stubborn evidence love leaves behind.
          </p>
          <p className='mt-6 text-lg leading-relaxed text-[#463d2e] max-w-md'>
            Before he was Hyman in Brooklyn, before his family mistook him for a ghost,
            Chaim Zeidler survived a century determined to erase him — through war, captivity,
            exile, and a series of borrowed names.
          </p>
          <div className='mt-9 flex flex-wrap gap-4'>
            <a
              href={AMAZON_URL}
              className='px-7 py-3 bg-[#8a4b30] text-[#e9e0cc] uppercase tracking-widest text-xs hover:bg-[#221f17] transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#221f17]'>
              Buy the Book
            </a>
            <a
              href='#excerpt'
              className='px-7 py-3 border border-[#221f17] text-[#221f17] uppercase tracking-widest text-xs hover:bg-[#221f17] hover:text-[#e9e0cc] transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#221f17]'>
              Read an Excerpt
            </a>
          </div>
        </div>

        <div className='order-1 md:order-2 flex flex-col items-center gap-8'>
          <img
            src='/fishtank_cover_sm.png'
            alt='Book cover for Out of the Fish Tank by Todd H. Albert'
            className='w-64 md:w-72 aspect-[2/3] object-cover shadow-2xl rotate-1'
          />

          {/* Book details card */}
          <div className='w-full max-w-xs border border-[#cdbf9f] bg-[#e9e0cc]/60 px-6 py-6'>
            <p className={`${oswald.className} uppercase tracking-[0.2em] text-sm text-[#221f17] mb-4`}>Book Details</p>
            <dl className='space-y-2.5 text-sm leading-relaxed'>
              {/* TODO(meta): confirm and add page count once finalized */}
              <div className='flex gap-3'>
                <dt className='uppercase tracking-widest text-[10px] text-[#8a4b30] w-20 shrink-0 pt-0.5'>Format</dt>
                <dd className='text-[#463d2e]'>Paperback &amp; Kindle</dd>
              </div>
              <div className='flex gap-3'>
                <dt className='uppercase tracking-widest text-[10px] text-[#8a4b30] w-20 shrink-0 pt-0.5'>Published</dt>
                <dd className='text-[#463d2e]'>June 2026</dd>
              </div>
              <div className='flex gap-3'>
                <dt className='uppercase tracking-widest text-[10px] text-[#8a4b30] w-20 shrink-0 pt-0.5'>ISBN</dt>
                <dd className='text-[#463d2e]'>9798199797306</dd>
              </div>
              <div className='flex gap-3'>
                <dt className='uppercase tracking-widest text-[10px] text-[#8a4b30] w-20 shrink-0 pt-0.5'>Category</dt>
                <dd className='text-[#463d2e]'>Biography &amp; Memoir · Jewish Family History · Survival Biography</dd>
              </div>
              <div className='flex gap-3'>
                <dt className='uppercase tracking-widest text-[10px] text-[#8a4b30] w-20 shrink-0 pt-0.5'>Author</dt>
                <dd className='text-[#463d2e]'>Todd H. Albert</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      {/* ===== The story ===== */}
      <section className='border-t border-[#cdbf9f] bg-[#ded2b8]'>
        <div className='max-w-3xl mx-auto px-6 py-20 md:py-24'>
          <h2 className={`${oswald.className} uppercase tracking-wide text-3xl md:text-4xl mb-8`}>The Story</h2>
          <div className='space-y-6 text-lg leading-relaxed text-[#463d2e]'>
            <p>
              Chaim Zeidler survived two world wars, a Russian revolution, a Central Asian prison camp, and a death-sentenced
              existence — forced to abandon his name, his faith, and his identity more than once just to stay alive.
            </p>
            <p>
              He was presumed dead by his own family. He returned years later.
            </p>
            <p>
              They didn&apos;t believe their eyes.
            </p>
            <p>
              This is the true story of a man who was knocked down by history again and again — and got up every single time.
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
        <p className='uppercase tracking-[0.3em] text-xs text-[#8a4b30] mb-8 text-center'>From the Opening Pages</p>
        {/* TODO(copy): replace with a real passage from the manuscript */}
        <blockquote className={`${spectral.className} italic text-2xl md:text-3xl leading-relaxed text-center text-[#221f17] border-l-2 border-[#8a4b30] pl-6 md:pl-0 md:border-l-0`}>
          “To understand how a living man comes to be turned away as a ghost on his own family&apos;s doorstep, you have to go back
          past two wars, a Central Asian prison camp, and two borrowed names, all the way back to a tavern in a village on the
          eastern edge of an empire that no longer exists.”
        </blockquote>
        <div className='mt-10 text-center'>
          <a
            href={AMAZON_SAMPLE_URL}
            className='inline-block uppercase tracking-widest text-xs text-[#8a4b30] border-b border-[#8a4b30] pb-1 hover:text-[#221f17] hover:border-[#221f17] transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#221f17]'>
            Read the full excerpt
          </a>
        </div>
      </section>

      {/* ===== How the story was reconstructed ===== */}
      <section className='border-t border-[#cdbf9f] bg-[#ded2b8]'>
        <div className='max-w-3xl mx-auto px-6 py-20 md:py-24'>
          <h2 className={`${oswald.className} uppercase tracking-wide text-3xl md:text-4xl mb-8`}>How the Story Was Reconstructed</h2>
          <div className='space-y-6 text-lg leading-relaxed text-[#463d2e]'>
            <p>
              This book was built from fragments: family recordings, archival records, inherited stories, conflicting names,
              and the long silences that often surround survival.
            </p>
            <p>
              The result is not a conventional memoir and not historical fiction. It is a reconstruction — an attempt to recover
              a life that history nearly erased.
            </p>
            <p>
              Todd H. Albert, Ph.D., spent the first part of his career as a research glaciologist, conducting NASA- and
              NOAA-funded fieldwork from Greenland to the Peruvian Andes. <em>Out of the Fish Tank</em> turns that same
              investigative instinct inward — onto his own family&apos;s buried past, drawing on oral histories, archival
              transport records, and years of genealogical research to piece together a story his family nearly lost.
            </p>
          </div>
        </div>
      </section>

      {/* ===== Why I wrote it ===== */}
      <section className='max-w-3xl mx-auto px-6 py-20 md:py-24'>
        <h2 className={`${oswald.className} uppercase tracking-wide text-3xl md:text-4xl mb-8`}>Why I Wrote It</h2>
        <div className='space-y-6 text-lg leading-relaxed text-[#463d2e]'>
          <p>
            I wrote this because some family histories do not disappear all at once. They disappear by omission, silence,
            migration, fear, and time.
          </p>
          <p>
            Chaim Zeidler&apos;s life survived in fragments — names, recordings, records, memories, contradictions. This book is
            my attempt to gather those fragments before they were lost again.
          </p>
          <p className='text-sm uppercase tracking-widest text-[#8a4b30]'>— Todd H. Albert</p>
        </div>
      </section>

      {/* ===== For readers interested in ===== */}
      <section className='border-t border-[#cdbf9f] bg-[#ded2b8]'>
        <div className='max-w-3xl mx-auto px-6 py-20 md:py-24'>
          <h2 className={`${oswald.className} uppercase tracking-wide text-3xl md:text-4xl mb-10`}>For Readers Interested In</h2>
          <ul className='grid sm:grid-cols-2 gap-x-12 gap-y-4 text-lg text-[#463d2e]'>
            {[
              'Jewish family history',
              'World War I and its aftermath',
              'Survival stories',
              'Genealogy and archival reconstruction',
              'Immigrant identity',
              'Family memory and silence',
            ].map((item) => (
              <li key={item} className='flex items-baseline gap-3 border-b border-[#cdbf9f] pb-3'>
                <span className='text-[#8a4b30]' aria-hidden='true'>—</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ===== Early reader response ===== */}
      <section className='max-w-4xl mx-auto px-6 py-20 md:py-24'>
        <h2 className={`${oswald.className} uppercase tracking-wide text-3xl md:text-4xl mb-10 text-center`}>Early Reader Response</h2>
        <div className='grid md:grid-cols-3 gap-10'>
          <figure className='text-center'>
            <blockquote className={`${spectral.className} italic text-xl leading-relaxed text-[#221f17]`}>
              “I have tears in my eyes and much gratitude for creating these memories.”
            </blockquote>
            <figcaption className='mt-4 uppercase tracking-widest text-xs text-[#8a4b30]'>— Rudolf Zeidler</figcaption>
          </figure>
          <figure className='text-center'>
            <blockquote className={`${spectral.className} italic text-xl leading-relaxed text-[#221f17]`}>
              “I read it in one sitting because I could not stop.”
            </blockquote>
            <figcaption className='mt-4 uppercase tracking-widest text-xs text-[#8a4b30]'>— Karen Tina Sheskin</figcaption>
          </figure>
          <figure className='text-center'>
            <blockquote className={`${spectral.className} italic text-xl leading-relaxed text-[#221f17]`}>
              “Everyone needs to read this. Doesn&apos;t matter Jew or Gentile.”
            </blockquote>
            <figcaption className='mt-4 uppercase tracking-widest text-xs text-[#8a4b30]'>— Mark Reyes</figcaption>
          </figure>
        </div>
      </section>

      {/* ===== About the author ===== */}
      <section className='border-t border-[#cdbf9f] bg-[#ded2b8]'>
        <div className='max-w-4xl mx-auto px-6 py-20 md:py-24 grid md:grid-cols-[auto,1fr] gap-10 md:gap-14 items-center'>
          <div className='justify-self-center'>
            <img
              src='/todd-headshot.jpg'
              alt='Todd H. Albert'
              className='w-40 h-40 object-cover rounded-full border-4 border-[#e9e0cc] shadow-lg'
            />
          </div>
          <div>
            <h2 className={`${oswald.className} uppercase tracking-wide text-3xl md:text-4xl mb-5`}>About the Author</h2>
            <p className='text-lg leading-relaxed text-[#463d2e]'>
              Todd H. Albert is an engineering executive, former NASA-funded scientist, educator, and author. His work often
              begins with complexity — systems, histories, organizations, and stories that appear fragmented — and looks for the
              structure that allows them to hold together.
            </p>
            <p className='mt-4 text-lg leading-relaxed text-[#463d2e]'>
              <em>Out of the Fish Tank</em> is his reconstruction of a lost family history and the life of Chaim Zeidler, a man
              who survived war, exile, reinvention, and near-erasure.
            </p>
            <p className='mt-6'>
              <Link
                href='/'
                className='uppercase tracking-widest text-xs text-[#8a4b30] border-b border-[#8a4b30] pb-1 hover:text-[#221f17] hover:border-[#221f17] transition'>
                Learn more about Todd
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* ===== Book clubs, podcasts, events ===== */}
      <section className='max-w-3xl mx-auto px-6 py-20 md:py-24 text-center'>
        <h2 className={`${oswald.className} uppercase tracking-wide text-3xl md:text-4xl mb-6`}>Book Clubs, Podcasts, and Events</h2>
        <p className='text-lg leading-relaxed text-[#4f4636] max-w-xl mx-auto'>
          Todd is available to discuss family history, archival reconstruction, Jewish survival stories, and the process of
          turning inherited fragments into narrative.
        </p>
        <div className='mt-9'>
          <a
            href='/#contact'
            className='inline-block px-7 py-3 border border-[#221f17] uppercase tracking-widest text-xs hover:bg-[#8a4b30] hover:border-[#8a4b30] hover:text-[#e9e0cc] transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#221f17]'>
            Invite Todd to Speak
          </a>
        </div>
      </section>

      {/* ===== Get the book ===== */}
      <section id='buy' className='border-t border-[#cdbf9f] bg-[#ded2b8]'>
        <div className='max-w-3xl mx-auto px-6 py-20 md:py-28 grid sm:grid-cols-[auto,1fr] gap-10 items-center'>
          <img
            src='/fishtank_cover_sm.png'
            alt='Book cover for Out of the Fish Tank by Todd H. Albert'
            className='w-32 aspect-[2/3] object-cover shadow-xl justify-self-center'
          />
          <div className='text-center sm:text-left'>
            <h2 className={`${oswald.className} uppercase tracking-wide text-3xl md:text-4xl mb-4`}>Get the Book</h2>
            <p className='text-lg leading-relaxed text-[#463d2e] mb-8'>
              A true story of war, survival, and a family that wouldn&apos;t be erased.
            </p>
            <div className='flex flex-wrap justify-center sm:justify-start gap-4'>
              <a
                href={AMAZON_URL}
                className='px-7 py-3 bg-[#8a4b30] text-[#e9e0cc] uppercase tracking-widest text-xs hover:bg-[#221f17] transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#221f17]'>
                Buy on Amazon
              </a>
              <a
                href='#excerpt'
                className='px-7 py-3 border border-[#221f17] uppercase tracking-widest text-xs hover:bg-[#221f17] hover:text-[#e9e0cc] transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#221f17]'>
                Read an Excerpt
              </a>
            </div>
          </div>
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
