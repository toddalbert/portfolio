import Link from 'next/link'

// Slim announcement strip promoting the book without crowding the portfolio.
export default function BookBanner() {
  return (
    <Link
      href='/book'
      className='group block bg-[#211c15] text-[#e9dfc9] hover:bg-[#7c2d2d] transition'>
      <div className='max-w-screen-xl mx-auto px-5 py-2.5 flex items-center justify-center gap-3 text-sm text-center'>
        <span className='uppercase tracking-[0.25em] text-[10px] text-[#c9a24a] group-hover:text-[#e9dfc9]'>
          New book
        </span>
        <span>
          <span className='italic'>Out of the Fish Tank</span> — the reconstructed life of Chaim Zeidler.
        </span>
        <span className='hidden sm:inline underline underline-offset-4'>Read more →</span>
      </div>
    </Link>
  )
}
