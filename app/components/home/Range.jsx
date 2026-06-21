import { rangeCards } from './data'

// 05 — Range: glaciologist → software leader → author, and why each still matters.
export default function Range() {
  return (
    <section
      id='range'
      aria-labelledby='range-h'
      className='py-[clamp(64px,9vw,112px)] border-t border-hair bg-paper-alt'>
      <div className='max-w-shell mx-auto px-[clamp(22px,5vw,56px)]'>
        <div className='max-w-[64ch]'>
          <span className='block mb-[18px] font-mono text-[12px] tracking-[0.16em] uppercase text-umber-soft'>
            <span className='text-clay-ink'>05</span>&nbsp;&nbsp;Range
          </span>
          <h2
            id='range-h'
            className='m-0 font-newsreader font-medium text-[clamp(1.9rem,3.6vw,2.7rem)] leading-[1.08] tracking-[-0.01em] text-umber'>
            A rare path — and every stop earns its keep.
          </h2>
          <p className='mt-[20px] text-[1.1rem] leading-[1.6] text-umber-muted max-w-[54ch]'>
            Glaciologist to software leader to author. The arc isn’t trivia; each phase trained a muscle I still use
            directing engineering teams today.
          </p>
        </div>
        <div className='mt-[clamp(36px,5vw,48px)] grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-[24px]'>
          {rangeCards.map((c) => (
            <div
              key={c.title}
              data-reveal
              className='bg-paper-card border border-hair-strong rounded-[12px] px-[28px] py-[30px]'>
              <div className='flex items-center gap-[10px] mb-[18px]'>
                <span aria-hidden='true' className='w-[9px] h-[9px] rounded-full bg-clay flex-none' />
                <span className='font-mono text-[11px] tracking-[0.06em] text-umber-faint'>{c.meta}</span>
              </div>
              <h3 className='mt-0 mb-[10px] font-newsreader font-medium text-[1.3rem] tracking-[-0.01em] text-umber'>
                {c.title}
              </h3>
              <p className='mt-0 mb-[16px] text-[0.96rem] leading-[1.58] text-umber-muted'>{c.body}</p>
              <div className='font-mono text-[11px] tracking-[0.05em] uppercase leading-[1.5] text-clay-ink'>
                {c.takeaway}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
