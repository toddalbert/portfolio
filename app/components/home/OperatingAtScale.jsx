import { scaleRows } from './data'

// 01 — Operating at scale: positioning + definition-list of the operating reality.
export default function OperatingAtScale() {
  return (
    <section aria-labelledby='scale-h' className='py-[clamp(64px,9vw,112px)] border-t border-hair'>
      <div className='max-w-shell mx-auto px-[clamp(22px,5vw,56px)]'>
        <div className='flex flex-wrap gap-[clamp(36px,5vw,64px)] items-start'>
          <div className='flex-1 basis-[360px] min-w-0'>
            <span className='block mb-[18px] font-mono text-[12px] tracking-[0.16em] uppercase text-umber-soft'>
              <span className='text-clay-ink'>01</span>&nbsp;&nbsp;Operating at scale
            </span>
            <h2
              id='scale-h'
              className='m-0 font-newsreader font-medium text-[clamp(1.9rem,3.6vw,2.7rem)] leading-[1.08] tracking-[-0.01em] text-umber'>
              Bigger and more reliable, while it stays in flight.
            </h2>
            <p className='mt-[20px] text-[1.1rem] leading-[1.6] text-umber-muted max-w-[46ch]'>
              The hard problem isn’t a greenfield build. It’s taking a platform that already carries millions of people
              and a paying customer base and making it <b className='text-umber font-semibold'>faster, steadier, and
              bigger</b> without taking it down. That’s the result I’m accountable for.
            </p>
          </div>
          <ul className='flex-1 basis-[440px] min-w-0 m-0 p-0 list-none border-t border-hair'>
            {scaleRows.map((r) => (
              <li
                key={r.label}
                className='grid grid-cols-[130px_1fr] gap-[20px] py-[17px] border-b border-hair'>
                <span className='font-mono text-[11px] tracking-[0.08em] uppercase text-umber-label pt-[3px]'>
                  {r.label}
                </span>
                <span className='text-umber-body'>
                  {r.text}
                  {r.faint && <span className='text-umber-faint'> {r.faint}</span>}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
