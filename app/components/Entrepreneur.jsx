export default function Teaching() {
  return (
    <section>
      <div className='py-8 lg:py-16 mx-auto max-w-screen-xl px-4'>
        <h2 className='mb-8 lg:mb-16 text-3xl font-medium tracking-tight leading-tight text-center text-zinc-900 dark:text-zinc-200 md:text-4xl'>
          13+ Years of Entrepreneurship
        </h2>
        <div className='grid grid-cols-2 gap-8 text-zinc-500 sm:gap-12 md:grid-cols-3 lg:grid-cols-6 dark:text-zinc-400'>
          <span className='flex justify-center items-center'>
            <img
              className='h-9 brightness-50 hover:scale-150 transition'
              alt='Boca Code'
              src='/logos/boca-code.svg'
            />
          </span>
          <span className='flex justify-center items-center'>
            <img
              className='h-9 brightness-50 hover:scale-150 transition'
              alt='Nebular Agency'
              src='/logos/nebular2.png'
            />
          </span>
          <span className='flex justify-center items-center'>
            <img
              className='h-9 grayscale brightness-75 hover:scale-150 transition'
              alt='Curator'
              src='/logos/curator.png'
            />
          </span>
          <span className='flex justify-center items-center'>
            <img
              className='h-9 grayscale brightness-75 contrast-50 hover:scale-150 transition'
              alt='MV Realty'
              src='/logos/mvrealty.png'
            />
          </span>
        
        </div>
      </div>
    </section>
  )
}
