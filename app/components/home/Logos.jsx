// Affiliation logo strip — six maximum, per the rebrand brief's "executive selectivity".
const logos = [
  { src: '/logos/nasa.png', alt: 'NASA', dim: false },
  { src: '/logos/noaa.svg', alt: 'NOAA', dim: false },
  { src: '/logos/pbs-kids.svg', alt: 'PBS Kids', dim: false },
  { src: '/logos/switch.svg', alt: 'Nintendo Switch', dim: false },
  { src: '/logos/cypher-learning.svg', alt: 'CYPHER Learning', dim: false },
  { src: '/logos/boca-code.svg', alt: 'Boca Code', dim: true },
]

export default function Logos() {
  return (
    <section className='bg-sand'>
      <div
        data-aos='fade-up'
        className='max-w-[1200px] mx-auto px-[clamp(20px,5vw,64px)] py-[clamp(34px,4vw,52px)] flex flex-wrap items-center justify-between gap-[clamp(24px,4vw,56px)]'>
        <span className='font-mono text-[11.5px] tracking-[0.12em] text-[#8A8272] whitespace-nowrap'>
          WORK &amp; RESEARCH ACROSS
        </span>
        <div className='flex flex-wrap items-center gap-[clamp(24px,3.6vw,52px)]'>
          {logos.map(l => (
            <img
              key={l.alt}
              src={l.src}
              alt={l.alt}
              className={
                l.dim
                  ? 'h-[34px] w-auto max-w-[128px] object-contain [filter:grayscale(1)_brightness(0)] opacity-[0.55]'
                  : 'h-[34px] w-auto max-w-[128px] object-contain [filter:grayscale(1)_contrast(1.02)] opacity-[0.82]'
              }
            />
          ))}
        </div>
      </div>
    </section>
  )
}
