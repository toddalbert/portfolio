import { trackRows } from './data'

// 04 — Track record: leadership scope as a definition-list.
export default function TrackRecord() {
  return (
    <section id='leadership' aria-labelledby='track-h' className='py-[clamp(64px,9vw,112px)] border-t border-hair'>
      <div className='max-w-shell mx-auto px-[clamp(22px,5vw,56px)]'>
        <div className='flex flex-wrap gap-[clamp(36px,5vw,64px)] items-start'>
          <div className='flex-1 basis-[360px] min-w-0'>
            <span className='block mb-[18px] font-mono text-[12px] tracking-[0.16em] uppercase text-umber-soft'>
              <span className='text-clay-ink'>04</span>&nbsp;&nbsp;Track record
            </span>
            <h2
              id='track-h'
              className='m-0 font-newsreader font-medium text-[clamp(1.9rem,3.6vw,2.7rem)] leading-[1.08] tracking-[-0.01em] text-umber'>
              Fifteen years building the teams that ship.
            </h2>
            <p className='mt-[20px] text-[1.1rem] leading-[1.6] text-umber-muted max-w-[46ch]'>
              Principal, VP, CTO. I hire, level, and mentor across borders and time zones — and I hold the line between
              shipping fast and shipping safe. The teams I run are why the numbers above hold.
            </p>
          </div>
          <ul className='flex-1 basis-[440px] min-w-0 m-0 p-0 list-none border-t border-hair'>
            {trackRows.map((r) => (
              <li
                key={r.label}
                className='grid grid-cols-[130px_1fr] gap-[20px] py-[17px] border-b border-hair'>
                <span className='font-mono text-[11px] tracking-[0.08em] uppercase text-umber-label pt-[3px]'>
                  {r.label}
                </span>
                <span className='text-umber-body'>{r.text}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
