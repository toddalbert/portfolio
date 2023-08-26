export default function Reel() {
  return (
    <section data-aos="fade-up" data-aos-duration="500" data-aos-offset="100">
      <div className='py-8 lg:py-16 mx-auto my-auto max-w-screen-xl px-4'>
        <h2 className='text-3xl font-medium tracking-tight leading-tight text-center text-zinc-200 md:text-4xl'>
          Demo Reel
        </h2>
        <div className='my-8'>
          <iframe className="mx-auto" width="560" height="315" src="https://www.youtube.com/embed/E-rGIy6xVvs?si=-mj0Rz_n6_ckOimY" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
      </div>
    </section>
  )
}
