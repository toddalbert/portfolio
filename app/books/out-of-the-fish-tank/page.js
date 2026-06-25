import Link from 'next/link'
import { oswald, spectral } from '../../fonts'

const AMAZON_URL = 'https://a.co/d/050pcESP'
const AMAZON_SAMPLE_URL = 'https://read.amazon.com/sample/B0H4766WZ9?clientId=share'
const AUDIBLE_URL = 'https://www.audible.com/pd/B0H6K4SZLT'

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
  workExample: [
    {
      '@type': 'Book',
      '@id': AMAZON_URL,
      bookFormat: 'https://schema.org/Paperback',
      isbn: '9798199797306',
      inLanguage: 'en',
      offers: {
        '@type': 'Offer',
        availability: 'https://schema.org/InStock',
        url: AMAZON_URL,
      },
    },
    {
      '@type': 'Audiobook',
      '@id': AUDIBLE_URL,
      inLanguage: 'en',
      readBy: { '@type': 'Person', name: 'Todd H. Albert' },
      offers: {
        '@type': 'Offer',
        availability: 'https://schema.org/InStock',
        url: AUDIBLE_URL,
      },
    },
  ],
  offers: {
    '@type': 'Offer',
    availability: 'https://schema.org/InStock',
    url: AMAZON_URL,
  },
}

// Colors and most fonts now track the home page's warm-editorial system
// (paper / umber / hair / clay tokens; Hanken body + Space Mono labels).
// The cover's identity is preserved only where it counts: Oswald for the
// title, Spectral italic for the subtitle and literary pull-quotes.
const BTN_PRIMARY =
  'inline-block font-mono text-[13px] tracking-[0.02em] px-7 py-[13px] rounded-[3px] no-underline bg-umber text-paper border border-umber transition-colors hover:bg-[#3a3026] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-clay focus-visible:ring-offset-2 focus-visible:ring-offset-paper'
const BTN_OUTLINE =
  'inline-block font-mono text-[13px] tracking-[0.02em] px-7 py-[13px] rounded-[3px] no-underline border border-umber text-umber transition-colors hover:bg-umber hover:text-paper focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-clay focus-visible:ring-offset-2 focus-visible:ring-offset-paper'
const LINK_ACCENT =
  'inline-block font-mono text-[12px] tracking-[0.08em] uppercase text-clay-ink border-b border-clay-ink/60 pb-1 transition-colors hover:text-umber hover:border-umber focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-clay focus-visible:ring-offset-2 focus-visible:ring-offset-paper'
const EYEBROW = 'font-mono text-[12px] tracking-[0.16em] uppercase text-clay-ink'

export default function BookPage() {
  return (
    <main className={`${spectral.variable} font-hanken text-umber-body min-h-screen`}>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html: JSON.stringify(bookSchema) }}
      />

      {/* back to portfolio */}
      <div className='border-b border-hair'>
        <div className='max-w-5xl mx-auto px-6 py-4 flex items-center justify-between text-sm tracking-wide'>
          <Link href='/' className='text-umber-soft hover:text-clay-ink transition-colors'>
            ← Todd&nbsp;H.&nbsp;Albert
          </Link>
          <a href={AMAZON_URL} className='font-mono text-clay-ink hover:text-umber transition-colors uppercase tracking-[0.12em] text-xs'>
            Buy the book
          </a>
        </div>
      </div>

      {/* ===== Hero ===== */}
      <section className='max-w-5xl mx-auto px-6 pt-16 pb-20 md:pt-24 md:pb-28 grid md:grid-cols-2 gap-12 md:gap-16 items-start'>
        <div>
          <p className={`${EYEBROW} mb-6`}>
            A true story of war, survival &amp; a family that wouldn&apos;t be erased
          </p>
          <h1 className={`${oswald.className} font-bold uppercase text-6xl md:text-7xl leading-[0.92] tracking-tight text-umber`}>
            Out of the<br />Fish Tank
          </h1>
          <div className='mt-6 w-16 h-px bg-clay' aria-hidden='true' />
          <p className={`${spectral.className} italic text-2xl md:text-3xl leading-snug text-umber mt-6`}>
            A life reconstructed from fragments.
          </p>
          <p className='mt-4 text-lg leading-relaxed text-umber-muted max-w-md'>
            A personal archive. A historical mystery. The stubborn evidence love leaves behind.
          </p>
          <p className='mt-6 text-lg leading-relaxed text-umber-body max-w-md'>
            Before he was Hyman in Brooklyn, before his family mistook him for a ghost,
            Chaim Zeidler survived a century determined to erase him — through war, captivity,
            exile, and a series of borrowed names.
          </p>
          <div className='mt-9 flex flex-wrap gap-4'>
            <a href={AMAZON_URL} className={BTN_PRIMARY}>
              Buy the Book
            </a>
            <a href={AUDIBLE_URL} className={BTN_OUTLINE}>
              Listen on Audible
            </a>
            <a href='#excerpt' className={BTN_OUTLINE}>
              Read an Excerpt
            </a>
          </div>
        </div>

        <div className='flex flex-col items-center gap-8'>
          <img
            src='/fishtank_cover_sm.png'
            alt='Book cover for Out of the Fish Tank by Todd H. Albert'
            className='w-64 md:w-72 aspect-[2/3] object-cover shadow-2xl rotate-1'
          />

          {/* Book details card */}
          <div className='w-full max-w-xs border border-hair-strong bg-paper-card rounded-[12px] px-6 py-6'>
            <p className='font-mono uppercase tracking-[0.16em] text-xs text-umber mb-4'>Book Details</p>
            <dl className='space-y-2.5 text-sm leading-relaxed'>
              {/* TODO(meta): confirm and add page count once finalized */}
              <div className='flex gap-3'>
                <dt className='font-mono uppercase tracking-[0.1em] text-[10px] text-clay-ink w-20 shrink-0 pt-0.5'>Format</dt>
                <dd className='text-umber-body'>Paperback, Kindle &amp; Audiobook</dd>
              </div>
              <div className='flex gap-3'>
                <dt className='font-mono uppercase tracking-[0.1em] text-[10px] text-clay-ink w-20 shrink-0 pt-0.5'>Published</dt>
                <dd className='text-umber-body'>June 2026</dd>
              </div>
              <div className='flex gap-3'>
                <dt className='font-mono uppercase tracking-[0.1em] text-[10px] text-clay-ink w-20 shrink-0 pt-0.5'>ISBN</dt>
                <dd className='text-umber-body'>9798199797306</dd>
              </div>
              <div className='flex gap-3'>
                <dt className='font-mono uppercase tracking-[0.1em] text-[10px] text-clay-ink w-20 shrink-0 pt-0.5'>Category</dt>
                <dd className='text-umber-body'>Biography &amp; Memoir · Jewish Family History · Survival Biography</dd>
              </div>
              <div className='flex gap-3'>
                <dt className='font-mono uppercase tracking-[0.1em] text-[10px] text-clay-ink w-20 shrink-0 pt-0.5'>Author</dt>
                <dd className='text-umber-body'>Todd H. Albert</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      {/* ===== The story ===== */}
      <section className='border-t border-hair bg-paper-alt'>
        <div className='max-w-3xl mx-auto px-6 py-20 md:py-24'>
          <h2 className={`${oswald.className} uppercase tracking-wide text-3xl md:text-4xl mb-8 text-umber`}>The Story</h2>
          <div className='space-y-6 text-lg leading-relaxed text-umber-body'>
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
        <p className={`${EYEBROW} mb-8 text-center`}>From the Opening Pages</p>
        {/* TODO(copy): replace with a real passage from the manuscript */}
        <blockquote className={`${spectral.className} italic text-2xl md:text-3xl leading-relaxed text-center text-umber border-l-2 border-clay pl-6 md:pl-0 md:border-l-0`}>
          “To understand how a living man comes to be turned away as a ghost on his own family&apos;s doorstep, you have to go back
          past two wars, a Central Asian prison camp, and two borrowed names, all the way back to a tavern in a village on the
          eastern edge of an empire that no longer exists.”
        </blockquote>
        <div className='mt-10 text-center'>
          <a href={AMAZON_SAMPLE_URL} className={LINK_ACCENT}>
            Read the full excerpt
          </a>
        </div>
      </section>

      {/* ===== How the story was reconstructed ===== */}
      <section className='border-t border-hair bg-paper-alt'>
        <div className='max-w-3xl mx-auto px-6 py-20 md:py-24'>
          <h2 className={`${oswald.className} uppercase tracking-wide text-3xl md:text-4xl mb-8 text-umber`}>How the Story Was Reconstructed</h2>
          <div className='space-y-6 text-lg leading-relaxed text-umber-body'>
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
        <h2 className={`${oswald.className} uppercase tracking-wide text-3xl md:text-4xl mb-8 text-umber`}>Why I Wrote It</h2>
        <div className='space-y-6 text-lg leading-relaxed text-umber-body'>
          <p>
            I wrote this because some family histories do not disappear all at once. They disappear by omission, silence,
            migration, fear, and time.
          </p>
          <p>
            Chaim Zeidler&apos;s life survived in fragments — names, recordings, records, memories, contradictions. This book is
            my attempt to gather those fragments before they were lost again.
          </p>
          <p className='font-mono text-xs uppercase tracking-[0.12em] text-clay-ink'>— Todd H. Albert</p>
        </div>
      </section>

      {/* ===== For readers interested in ===== */}
      <section className='border-t border-hair bg-paper-alt'>
        <div className='max-w-3xl mx-auto px-6 py-20 md:py-24'>
          <h2 className={`${oswald.className} uppercase tracking-wide text-3xl md:text-4xl mb-10 text-umber`}>For Readers Interested In</h2>
          <ul className='grid sm:grid-cols-2 gap-x-12 gap-y-4 text-lg text-umber-body'>
            {[
              'Jewish family history',
              'World War I and its aftermath',
              'Survival stories',
              'Genealogy and archival reconstruction',
              'Immigrant identity',
              'Family memory and silence',
            ].map((item) => (
              <li key={item} className='flex items-baseline gap-3 border-b border-hair pb-3'>
                <span className='text-clay' aria-hidden='true'>—</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ===== Early reader response ===== */}
      <section className='max-w-4xl mx-auto px-6 py-20 md:py-24'>
        <h2 className={`${oswald.className} uppercase tracking-wide text-3xl md:text-4xl mb-10 text-center text-umber`}>Early Reader Response</h2>
        <div className='grid md:grid-cols-3 gap-10'>
          <figure className='text-center'>
            <blockquote className={`${spectral.className} italic text-xl leading-relaxed text-umber`}>
              “I have tears in my eyes and much gratitude for creating these memories.”
            </blockquote>
            <figcaption className='mt-4 font-mono uppercase tracking-[0.12em] text-xs text-clay-ink'>— Rudolf Zeidler</figcaption>
          </figure>
          <figure className='text-center'>
            <blockquote className={`${spectral.className} italic text-xl leading-relaxed text-umber`}>
              “I read it in one sitting because I could not stop.”
            </blockquote>
            <figcaption className='mt-4 font-mono uppercase tracking-[0.12em] text-xs text-clay-ink'>— Karen Tina Sheskin</figcaption>
          </figure>
          <figure className='text-center'>
            <blockquote className={`${spectral.className} italic text-xl leading-relaxed text-umber`}>
              “Everyone needs to read this. Doesn&apos;t matter Jew or Gentile.”
            </blockquote>
            <figcaption className='mt-4 font-mono uppercase tracking-[0.12em] text-xs text-clay-ink'>— Mark Reyes</figcaption>
          </figure>
        </div>
      </section>

      {/* ===== About the author ===== */}
      <section className='border-t border-hair bg-paper-alt'>
        <div className='max-w-4xl mx-auto px-6 py-20 md:py-24 grid md:grid-cols-[auto,1fr] gap-10 md:gap-14 items-center'>
          <div className='justify-self-center'>
            <img
              src='/todd-headshot.jpg'
              alt='Todd H. Albert'
              className='w-40 h-40 object-cover rounded-full border-4 border-paper-card shadow-lg'
            />
          </div>
          <div>
            <h2 className={`${oswald.className} uppercase tracking-wide text-3xl md:text-4xl mb-5 text-umber`}>About the Author</h2>
            <p className='text-lg leading-relaxed text-umber-body'>
              Todd H. Albert is an engineering executive, former NASA-funded scientist, educator, and author. His work often
              begins with complexity — systems, histories, organizations, and stories that appear fragmented — and looks for the
              structure that allows them to hold together.
            </p>
            <p className='mt-4 text-lg leading-relaxed text-umber-body'>
              <em>Out of the Fish Tank</em> is his reconstruction of a lost family history and the life of Chaim Zeidler, a man
              who survived war, exile, reinvention, and near-erasure.
            </p>
            <p className='mt-6'>
              <Link href='/' className={LINK_ACCENT}>
                Learn more about Todd
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* ===== Book clubs, podcasts, events ===== */}
      <section className='max-w-3xl mx-auto px-6 py-20 md:py-24 text-center'>
        <h2 className={`${oswald.className} uppercase tracking-wide text-3xl md:text-4xl mb-6 text-umber`}>Book Clubs, Podcasts, and Events</h2>
        <p className='text-lg leading-relaxed text-umber-muted max-w-xl mx-auto'>
          Todd is available to discuss family history, archival reconstruction, Jewish survival stories, and the process of
          turning inherited fragments into narrative.
        </p>
        <div className='mt-9'>
          <a href='/#contact' className={BTN_OUTLINE}>
            Invite Todd to Speak
          </a>
        </div>
      </section>

      {/* ===== Get the book ===== */}
      <section id='buy' className='border-t border-hair bg-paper-alt'>
        <div className='max-w-3xl mx-auto px-6 py-20 md:py-28 grid sm:grid-cols-[auto,1fr] gap-10 items-center'>
          <img
            src='/fishtank_cover_sm.png'
            alt='Book cover for Out of the Fish Tank by Todd H. Albert'
            className='w-32 aspect-[2/3] object-cover shadow-xl justify-self-center'
          />
          <div className='text-center sm:text-left'>
            <h2 className={`${oswald.className} uppercase tracking-wide text-3xl md:text-4xl mb-4 text-umber`}>Get the Book</h2>
            <p className='text-lg leading-relaxed text-umber-body mb-8'>
              A true story of war, survival, and a family that wouldn&apos;t be erased.
            </p>
            <div className='flex flex-wrap justify-center sm:justify-start gap-4'>
              <a href={AMAZON_URL} className={BTN_PRIMARY}>
                Buy on Amazon
              </a>
              <a href={AUDIBLE_URL} className={BTN_OUTLINE}>
                Listen on Audible
              </a>
              <a href='#excerpt' className={BTN_OUTLINE}>
                Read an Excerpt
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Footer ===== */}
      <footer className='border-t border-hair'>
        <div className='max-w-5xl mx-auto px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-umber-muted'>
          <span className={`${oswald.className} uppercase tracking-wide text-umber`}>Out of the Fish Tank</span>
          <span>© {new Date().getFullYear()} Todd H. Albert</span>
          <Link href='/' className='hover:text-clay-ink transition-colors'>toddalbert.com →</Link>
        </div>
      </footer>
    </main>
  )
}
