// Announcement ribbon — top-of-page book callout.
export default function Ribbon() {
  return (
    <div className='bg-ink-deep border-b border-cream/[0.08] font-mono text-xs tracking-[0.04em] text-slate-3'>
      <div className='max-w-[1200px] mx-auto px-[clamp(20px,5vw,64px)] py-[9px] flex flex-wrap items-center justify-center gap-[14px]'>
        <span className='text-accent'>NEW BOOK</span>
        <span className='text-slate-4'>
          Out of the Fish Tank — the reconstructed life of Chaim Zeidler
        </span>
        <a href='#book' className='text-cream border-b border-cream/[0.35] pb-px'>
          Read more →
        </a>
      </div>
    </div>
  )
}
