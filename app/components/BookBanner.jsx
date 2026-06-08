import Link from 'next/link'
import { spectral } from '../fonts'

// Slim announcement strip promoting the book without crowding the portfolio.
// Colors drawn from the cover: olive-black ground, tan label, rust on hover.
export default function BookBanner() {
  return (
    <Link
      href='/books/out-of-the-fish-tank'
      className='group block bg-[#221f17] text-[#efe7d3] hover:bg-[#8a4b30] transition'>
      <div className='max-w-screen-xl mx-auto px-5 py-2.5 flex items-center justify-center gap-3 text-sm text-center'>
        <span className='uppercase tracking-[0.25em] text-[10px] text-[#b9a06a] group-hover:text-[#efe7d3]'>
          New book
        </span>
        <span>
          <span className={`${spectral.className} italic`}>Out of the Fish Tank</span> — the reconstructed life of Chaim Zeidler.
        </span>
        <span className='hidden sm:inline underline underline-offset-4'>Read more →</span>
      </div>
    </Link>
  )
}
