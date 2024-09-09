import QuickView from './QuickView'

const techs = [
  'AI',
  'Animation',
  'AR',
  'AWS',
  'Azure',
  'Blockchain',
  'C#',
  'Cloud',
  'Expo',
  'Express',
  'Firestore',
  'Game Dev',
  'Google Cloud',
  'iOS',
  'JavaScript',
  'Mobile',
  'MongoDB',
  'Next.js',
  'Node.js',
  'Python',
  'React',
  'Solidity',
  'SQL',
  'Swift',
  'Tailwind',
  'Terrform',
  'TypeScript',
  'Unity',
  'VR',
  'Web3',
]

export default function Coding() {
  return (
    <section data-aos='fade-up' data-aos-duration='500' data-aos-offset='100'>
      <div className='py-8 lg:py-16 mx-auto my-auto max-w-screen-xl px-4'>
        <h2 className='text-3xl font-medium tracking-tight leading-tight text-center text-stone-200 md:text-4xl'>
          30+ Years of Coding Experience
        </h2>
        <p className='my-4 w-sm md:w-1/2 mx-auto tracking-tight leading-tight text-center text-stone-400'>
          I have extensive experience working with Fortune 500 companies and startups alike. From AR
          and VR games to web apps to mobile, I haven't met a project I couldn't build.
        </p>
        <div className='flex flex-wrap justify-center my-4 lg:mb-16 w-sm md:w-3/4 mx-auto text-center text-stone-400'>
          {techs.map(tech => (
            <span
              key={tech}
              className='text-sm font-medium me-2 mb-2 px-2.5 py-0.5 rounded bg-blue-900 text-blue-300'>
              {tech}
            </span>
          ))}
        </div>

        <div className='grid grid-cols-2 gap-8 text-stone-400 sm:gap-12 md:grid-cols-3 lg:grid-cols-6'>

          <QuickView
            className='h-9 grayscale brightness-200 contrast-50 hover:scale-150 transition'
            alt='AccuWeather'
            slug='accuweather'
            src='/logos/AccuWeather.svg'
          />
          <QuickView
            className='h-9 grayscale invert brightness-200 contrast-50 hover:scale-150 transition'
            alt='Ally'
            slug='ally'
            src='/logos/ally.svg'
          />

          <QuickView
            className='h-12 grayscale invert brightness-125 hover:scale-150 transition'
            alt='American Electric Power'
            slug='aep'
            src='/logos/aep.svg'
          />

          <QuickView
            className='h-12 grayscale invert brightness-200 contrast-75 hover:scale-150 transition'
            alt='Amway'
            slug='amway'
            src='/logos/amway.png'
          />
          <QuickView
            className='h-9 grayscale invert brightness-200 contrast-50 hover:scale-150 transition'
            alt='Barefoot Wine'
            slug='barefoot'
            src='/logos/barefoot.svg'
          />
          <span className='flex justify-center items-center'>
            <img
              className='h-9 brightness-75 hover:scale-150 transition'
              alt='Boca Code'
              src='/logos/boca-code.svg'
            />
          </span>
          <span className='flex justify-center items-center'>
            <img
              className='h-7 grayscale brightness-200 contrast-50 hover:scale-150 transition'
              alt='Bowling Green State University'
              src='/logos/bgsu-rev.svg'
            />
          </span>
          <span className='flex justify-center items-center'>
            <img
              className='h-9 brightness-150 contrast-50 hover:scale-150 transition'
              alt='CIRES'
              src='/logos/cires.png'
            />
          </span>
          <span className='flex justify-center items-center'>
            <img
              className='h-12 grayscale brightness-200 contrast-50 hover:scale-150 transition'
              alt='Cornerstone Learning Community'
              src='/logos/clc.png'
            />
          </span>
          <span className='flex justify-center items-center'>
            <img
              className='h-9 grayscale hover:scale-150 transition'
              alt='Curator'
              src='/logos/curator.png'
            />
          </span>
          <span className='flex justify-center items-center'>
            <img
              className='h-12 grayscale brightness-75 hover:scale-150 transition'
              alt='Eight O`Clock Coffee'
              src='/logos/eight_o_clock.svg'
            />
          </span>
          <QuickView
            className='h-12 grayscale invert brightness-150 hover:scale-150 transition'
            alt='Fiat'
            slug='fiat'
            src='/logos/Fiat.svg'
          />
          <span className='flex justify-center items-center'>
            <img
              className='h-12 brightness-75 hover:scale-150 transition'
              alt='Frenchie Ballers'
              src='/logos/frenchie-ballers.png'
            />
          </span>
          <span className='flex justify-center items-center'>
            <img
              className='h-12 brightness-125 hover:scale-150 transition'
              alt='George P Johnson'
              src='/logos/GPJ.png'
            />
          </span>
          <span className='flex justify-center items-center'>
            <img
              className='h-12 brightness-75 hover:scale-150 transition'
              alt='Hemp Temps'
              src='/logos/hemp-temps.png'
            />
          </span>
          <span className='flex justify-center items-center'>
            <img
              className='h-9 brightness-75 hover:scale-150 transition'
              alt='Imanyco'
              src='/logos/imanyco.png'
            />
          </span>
          <span className='flex justify-center items-center'>
            <img
              className='h-6 brightness-75 hover:scale-150 transition'
              alt='JetRide'
              src='/logos/jetride.png'
            />
          </span>
          <span className='flex justify-center items-center'>
            <img
              className='h-12 brightness-75 hover:scale-150 transition'
              alt='Koda'
              src='/logos/koda.png'
            />
          </span>
          <span className='flex justify-center items-center'>
            <img
              className='h-12 invert opacity-60 hover:scale-150 transition'
              alt='Mack Industrial'
              src='/logos/mack-industrial.png'
            />
          </span>
          <span className='flex justify-center items-center'>
            <img
              className='h-12 brightness-75 contrast-75 hover:scale-150 transition'
              alt='Magic City Cup'
              src='/logos/magic-city-cup.png'
            />
          </span>
          <QuickView
            className='h-9 grayscale brightness-200 contrast-0 hover:scale-150 transition'
            alt='Magna'
            slug='magna'
            src='/logos/magna.svg'
          />
          <QuickView
            className='h-9 brightness-75 contrast-50 hover:scale-150 transition'
            alt='Marvel'
            slug='marvel'
            src='/logos/marvel.svg'
          />
          <span className='flex justify-center items-center'>
            <img
              className='h-9 grayscale contrast-75 hover:scale-150 transition'
              alt='MV Realty'
              src='/logos/mvrealty.png'
            />
          </span>
          <span className='flex justify-center items-center'>
            <img
              className='h-6 brightness-75 contrast-75 hover:scale-150 transition'
              alt='MyPhoto'
              src='/logos/myphoto.png'
            />
          </span>
          <span className='flex justify-center items-center'>
            <img
              className='h-14 brightness-75 hover:scale-150 transition'
              alt='NASA'
              src='/logos/nasa.png'
            />
          </span>
          <span className='flex justify-center items-center'>
            <img
              className='h-9 brightness-75 hover:scale-150 transition'
              alt='Nebular Agency'
              src='/logos/nebular2.png'
            />
          </span>
          <span className='flex justify-center items-center'>
            <img
              className='h-14 invert contrast-75 hover:scale-150 transition'
              alt='Nintendo Switch'
              src='/logos/switch.svg'
            />
          </span>
          <span className='flex justify-center items-center'>
            <img
              className='h-12 grayscale brightness-75 contrast-75 hover:scale-150 transition'
              alt='PBS Kids'
              src='/logos/pbs-kids.svg'
            />
          </span>
          <span className='flex justify-center items-center'>
            <img
              className='h-14 invert brightness-75 hover:scale-150 transition'
              alt='Shelby USA'
              src='/logos/shelby.png'
            />
          </span>
          <span className='flex justify-center items-center'>
            <img
              className='h-9 grayscale contrast-50 brightness-125 hover:scale-150 transition'
              alt='Site Impact'
              src='/logos/site-impact.png'
            />
          </span>
          <span className='flex justify-center items-center'>
            <img
              className='h-12 brightness-125 hover:scale-150 transition'
              alt='Sprint'
              src='/logos/Sprint_Corporation_Logo.svg'
            />
          </span>
          <span className='flex justify-center items-center'>
            <img
              className='h-12 grayscale brightness-125 contrast-50 hover:scale-150 transition'
              alt='Sun Country Airlines'
              src='/logos/sun-country.webp'
            />
          </span>
          <span className='flex justify-center items-center'>
            <svg
              className='h-9 hover:scale-150 transition'
              version='1.1'
              baseProfile='tiny'
              xmlns='http://www.w3.org/2000/svg'
              x='0px'
              y='0px'
              viewBox='0 0 177.1 41.5'>
              <path
                fill='#BEBEBE'
                d='M74.7,30.3c0,0.5-0.6,0.5-0.9,0.5c-0.2,0-0.5,0-0.9,0c-0.9-0.1-2.1-0.1-3.2,0 c-0.4,0-0.8,0.1-1.2,0.1c-0.4,0-0.6-0.3-0.6-0.5c0-0.5,0.4-0.7,0.8-0.8c0.5-0.2,1.1-0.4,1-1.6l-0.3-11.2c0-0.5-0.1-0.8-0.1-0.9 c-0.1,0-0.3,0.2-0.5,0.7l-6,12.2c0,0.1-0.1,0.2-0.1,0.3c-0.4,0.9-0.7,1.3-1,1.3c-0.4,0-0.6-0.6-0.8-0.9l0-0.1l-6.2-12.9 c0-0.1,0-0.1-0.1-0.1c0,0,0,0.1,0,0.2l-0.3,10.1c-0.1,2.3,0.9,2.6,1.7,2.8c0.4,0.1,0.9,0.2,0.9,0.8c0,0.6-0.7,0.6-1,0.6 c-0.2,0-0.5,0-0.8,0c-0.5,0-1.2-0.1-1.7-0.1c-0.9,0-1.5,0-1.9,0.1c-0.2,0-0.4,0-0.6,0c-0.3,0-0.5-0.2-0.5-0.6c0-0.5,0.4-0.7,0.7-0.8 c0.5-0.1,1.2-0.3,1.3-2.1c0.1-1.3,0.2-2.5,0.3-3.6c0.2-2.8,0.4-5,0.4-7.2c0-4.8-1.4-5.2-2.1-5.5c-0.3-0.1-0.7-0.2-0.7-0.7c0-0.2,0.1-0.6,0.7-0.6c0.3,0,0.5,0,0.8,0.1c0.5,0.1,1,0.1,1.5,0c0.3,0,0.5-0.1,0.8-0.1c0.5,0,0.6,0.4,0.7,0.7 c0,0.1,0.1,0.1,0.1,0.2l7,14.9c0.1,0.2,0.2,0.5,0.3,0.5c0.1-0.2,0.4-0.8,0.7-1.3l0-0.1L69.9,11c0-0.1,0.1-0.1,0.1-0.2 c0.2-0.4,0.4-0.9,0.8-0.9c0.2,0,0.6,0,0.9,0.1c0.2,0,0.4,0,0.5,0c0.3,0,0.6,0,0.8-0.1c0.2,0,0.4-0.1,0.6-0.1c0.3,0,0.5,0.3,0.5,0.6 c0,0.5-0.4,0.6-0.8,0.7c-0.7,0.2-1.5,0.3-1.4,2.4l0.4,14.4c0.1,1.3,0.7,1.4,1.4,1.6C74.1,29.6,74.7,29.7,74.7,30.3z M98.5,30.3 c0,0.5-0.5,0.5-0.6,0.5c-0.6,0-1.2,0-1.8-0.1c-1,0-2-0.1-2.9,0c-0.4,0-0.8,0.1-1.2,0.1c-0.6,0-0.9-0.2-0.9-0.5 c0-0.5,0.5-0.6,0.9-0.8c0.5-0.2,0.9-0.3,0.9-0.7c0-0.4-0.4-1.3-0.6-2.1c-0.1-0.2-0.2-0.4-0.2-0.6L91,23.8c-0.3-0.7-0.4-0.9-1-0.9 h-6.4c-0.6,0-0.9,0-1.1,0.5l-1.9,4.1c-0.1,0.2-0.2,0.6-0.2,0.9c0,1.1,0.6,1.2,1.2,1.3c0.4,0.1,0.9,0.2,0.9,0.6 c0,0.5-0.2,0.7-0.7,0.7l-0.3,0c-0.4,0-0.8,0-1.2-0.1c-0.8-0.1-1.6-0.1-2.4,0c-0.4,0-0.8,0.1-1.2,0.1c-0.3,0-0.5-0.2-0.5-0.6c0-0.4,0.4-0.5,0.7-0.6c0.4-0.1,1-0.3,1.5-1.2l6.9-14.8c0.4-0.9,0.7-1.6,1-2.2c0.8-1.8,0.9-2.1,1.4-2.1c0.4,0,0.6,0.6,0.8,1.1 c0,0.1,0,0.1,0,0.2l6,14.9c0.1,0.3,0.2,0.6,0.3,0.9c0.3,0.8,0.6,1.7,1.1,2.4c0.4,0.7,1.1,0.8,1.6,0.9C98,29.7,98.5,29.8,98.5,30.3z M89.8,20.8l-2.8-7c0,0,0,0,0,0c0,0,0,0,0,0l-3.3,7c0,0.1-0.1,0.1-0.1,0.2c0,0,0,0,0,0c0,0,0.1,0,0.2,0h5.7c0.3,0,0.3,0,0.3,0 C89.9,21,89.9,21,89.8,20.8z M118.9,30.3c0,0.3-0.3,0.6-2.1,0.6c-2.2,0-3.4-1.5-4.5-3.2l-3.2-5.1c-0.1-0.2-0.2-0.3-0.3-0.5 c-0.6-1-0.6-1-2.5-1l-0.8,0c-0.3,0-0.4,0.1-0.5,0.1c-0.1,0.1-0.1,0.2,0,0.3c0,0,0,0.1,0,0.1v6.1c0,1.3,0.9,1.5,1.8,1.7 c0.6,0.1,1.2,0.3,1.2,0.8c0,0.2-0.1,0.5-0.5,0.5l-0.2,0c-0.1,0-0.2,0-0.3,0c-0.4,0-1.2-0.1-3-0.1c-0.5,0-1.1,0-1.6,0.1 c-0.5,0-1.1,0.1-1.7,0.1c-0.3,0-0.5-0.2-0.5-0.6c0-0.4,0.4-0.6,0.8-0.7c0.6-0.3,1.3-0.5,1.3-1.8V13c0-1.5-0.8-1.7-1.5-1.8 c-0.4-0.1-1-0.2-1-0.8c0-0.3,0.4-0.6,0.8-0.6c0.2,0,0.3,0,0.5,0c0.2,0,0.5,0.1,1.4,0.1c0.9,0,1.7,0,2.5-0.1c0.8,0,1.6-0.1,2.3-0.1l0.1,0c0.1,0,0.3,0,0.6,0c1.9,0,6.4,0.5,6.4,5.3c0,2.1-1.4,4.2-3.5,5.1l4.7,7.1c1.3,2,2.4,2.3,2.9,2.4 C118.5,29.8,118.9,29.8,118.9,30.3z M106.2,11.3l-0.3,0c-0.9,0-1.1,0-1.1,0.8v7.4c0,0,0.2,0.2,1.4,0.2h0c0.2,0,0.5,0,0.7,0 c0.2,0,0.5,0,0.7,0c0.9,0,3.8-0.3,3.8-3.9C111.5,11.7,107.8,11.3,106.2,11.3z M136.1,10.9c0-0.8-0.3-1.1-1.1-1.1c-0.1,0-0.4,0-0.8,0 c-1.2,0-3.7,0.1-7.6,0.1c-2.1,0-3.7,0-5.1-0.1c-1.1,0-2.1,0-3.1,0c-0.7,0-0.7,0.8-0.8,1.2l-0.3,3c0,0.3,0.2,0.6,0.5,0.6 c0.5,0,0.6-0.4,0.7-0.7l0.1-0.3c0.5-1.4,0.5-1.7,2.1-1.7l4.7,0c0,0,0.1,0.2,0.1,1c0,0.1,0,0.1,0,0.1v15.1c0,0.9-0.7,1.2-1.4,1.4 c-0.5,0.2-0.9,0.3-0.9,0.8c0,0.4,0.2,0.6,0.6,0.6c0,0,0.1,0,0.2,0c0.3,0,1.2-0.1,3.8-0.1c0.4,0,0.9,0,1.3,0.1c0.4,0,0.7,0.1,1.1,0.1 c0.2,0,0.3-0.1,0.4-0.1c0.1-0.1,0.1-0.3,0.1-0.4c0-0.5-0.5-0.6-0.9-0.7c-0.7-0.2-1.4-0.3-1.4-1.6V13.1l0-0.4c0-0.3,0-0.7,0-0.7 c0,0,0.3,0,0.4,0l4.6,0c1.6,0,1.7,0.7,1.8,1.3c0,0.4,0.1,0.9,0.7,0.9c0.2,0,0.3-0.1,0.4-0.2c0.2-0.2,0.2-0.5,0.1-0.7L136.1,10.9zM144.8,29.5c-0.9-0.2-1.5-0.4-1.5-1.4V12.6c0-1.2,0.7-1.4,1.3-1.6c0.4-0.1,0.8-0.2,0.8-0.7c0-0.5-0.5-0.5-0.8-0.5 c-0.5,0-0.9,0-1.4,0.1c-1,0.1-2,0.1-2.9,0c-0.5,0-1.1-0.1-1.6-0.1c-0.5,0-0.5,0.3-0.5,0.6c0,0.4,0.4,0.5,0.9,0.6 c0.7,0.2,1.5,0.4,1.5,1.5v14.8c0,1.7-0.8,1.9-1.4,2.1c-0.4,0.1-0.8,0.2-0.8,0.7c0,0.6,0.4,0.7,0.8,0.7c0.1,0,0.3,0,0.5,0 c0.4,0,1.1-0.1,2.3-0.1c0.7,0,1.4,0,2,0.1c0.4,0,0.8,0,1.1,0c0.3,0,0.8,0,0.8-0.5C145.9,29.8,145.3,29.6,144.8,29.5z M168.2,9.9 c-0.3,0-0.8,0-1.2,0.1c-0.5,0-1.2,0.1-1.7,0.1c-0.5,0-0.9,0-1.3-0.1c-0.4,0-0.9-0.1-1.3-0.1c-0.3,0-0.6,0.2-0.6,0.5 c0,0.5,0.5,0.6,1,0.8c0.9,0.2,2.2,0.5,2.2,2.9v12c0,0,0,0,0,0l-13.8-15.4c0,0-0.1-0.1-0.1-0.1c-0.2-0.3-0.5-0.6-0.8-0.6 c-0.2,0-0.5,0-0.7,0.1c-0.5,0.1-0.9,0.1-1.3,0c-0.2,0-0.5-0.1-0.7-0.1c-0.2,0-0.7,0.2-0.7,0.5c0,0.5,0.5,0.6,0.9,0.7 c1,0.2,2.6,0.6,2.6,4.7v10.7c0,2.5-1,2.8-1.7,3c-0.4,0.1-0.8,0.2-0.8,0.8c0,0.4,0.2,0.6,0.6,0.6c0.1,0,0.3,0,0.5,0                                                                        c0.6,0,1.5-0.1,2.2-0.1c0.8,0,1.5,0,2,0.1c0.4,0,0.7,0,1,0c0.1,0,0.6,0,0.6-0.6c0-0.5-0.5-0.6-0.9-0.6c-0.8-0.1-1.6-0.3-1.6-1.7V16 c0-0.2,0-0.3,0-0.4c0.1,0.1,0.2,0.2,0.3,0.3c0,0,0.1,0.1,0.1,0.1l12.5,14c0.6,0.6,0.9,0.9,1.3,0.9c0.5,0,0.5-0.7,0.5-1.5V12.7 c0-1.2,0.5-1.4,1-1.6c0.3-0.1,0.7-0.3,0.7-0.7C168.7,10.1,168.5,9.9,168.2,9.9z'></path>
              <g id='UT'>
                <path
                  id='T'
                  fill='#BEBEBE'
                  d='M38.5,17v13.9h-6V9.5h16.1c-0.3,0.3-0.2,0.8-0.7,1.5c-0.6,0.8-1.2,0.4-1.7,1  c-0.4,0.5-0.3,1.1-0.7,1.7c-0.6,0.8-1.5,0.5-2.2,1.3c-0.5,0.7-0.5,1.3-1,2H38.5z'></path>
                <path
                  id='U'
                  fill='#BEBEBE'
                  d='M24.1,9.5c-0.3,0.3-0.2,0.9-0.7,1.5c-0.6,0.8-1.2,0.4-1.7,1c-0.4,0.5-0.3,1.1-0.7,1.6 c-0.6,0.8-1.5,0.5-2.2,1.3c-0.5,0.7-0.5,1.3-1,2h7.8v7h-6.5c-0.5,0-1,0.1-1.3-0.3c-0.3-0.3-0.3-0.6-0.3-1l0-13.1h-6.9l0,15.1 c0,1.8,1.2,3.5,1.8,4.1c0.8,0.8,2.5,2.2,4.5,2.2h9.1l5.5-6.3l0-15.1h34.1z'></path>
              </g>
            </svg>
          </span>
        </div>
      </div>
    </section>
  )
}
