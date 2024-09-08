import { barlow } from '../fonts'

export default function Hero() {
  return (
    <section className='text-stone-300 body-font'>
      <div className='container mx-auto flex px-5 py-24 md:flex-row flex-col items-center'>
        <div className='lg:max-w-lg lg:w-full md:w-1/2 w-5/6 relative'>
          <div className='bg-blue-400 opacity-60 -skew-y-3 rotate-3 p-8 rounded-xl absolute -top-8 -left-8 -right-8 -bottom-8'></div>
          <img
            data-aos='fade-up'
            data-aos-duration='500'
            data-aos-offset='100'
            className='object-cover object-center rounded z-10'
            alt='Todd Albert'
            src='/todd-albert-sm.jpg'
          />
        </div>

        <div className='container mt-24 md:mt-8 lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center'>
          <h1 className='title-font sm:text-4xl text-3xl mb-4 font-medium text-stone-200'>
            Todd H. Albert, Ph.D. <br className='hidden lg:inline-block' />
            Tech Leader
          </h1>
          <p className='mb-8 text-md leading-relaxed text-stone-400'>
            Todd is a hands-on software engineering leader, systems engineer, and product developer with over
            30 years of coding experience and 15 years of leadership. He has worked in various
            roles, including Principal Software Engineer, VP of Engineering, and CTO.
          </p>
          <p className='mb-8 text-md leading-relaxed text-stone-400'>
            From developing AI apps for the accessibility community to AR apps for Fortune 500
            companies, Todd has recruited, built, and lead teams, designing and launching projects spanning
            from web and e-commerce platforms, mobile apps and games, AI, data science and engineering, AR and VR,
            to web3 and blockchain.
          </p>
          <div className='flex justify-center flex-wrap'>
            <a
              href='/Albert-Todd-resume-Sep-2024.pdf'
              target='_Blank'
              rel='nofollow noreferrer'
              className='px-6 py-2 mr-4 mb-4 transition uppercase bg-blue-500 border-2 border-blue-500 rounded-lg text-white hover:bg-orange-400 hover:border-orange-400 text-md'>
              Latest Resume
            </a>
            <a
              href='https://www.linkedin.com/in/toddalbert/'
              target='_Blank'
              rel='nofollow noreferrer'
              className='px-6 py-2 mr-4 mb-4 transition uppercase bg-transparent border-2 border-blue-500 rounded-lg text-white hover:bg-orange-400 hover:border-orange-400 text-md'>
              LinkedIn
            </a>
            <a
              href='https://github.com/toddalbert'
              target='_Blank'
              rel='nofollow noreferrer'
              className='px-6 py-2 mr-4 mb-4 transition uppercase bg-transparent border-2 border-blue-500 rounded-lg text-white hover:bg-orange-400 hover:border-orange-400 text-md'>
              GitHub
            </a>
            <a
              href='https://scholar.google.dk/citations?user=lYZY0SYAAAAJ&hl=en'
              target='_Blank'
              rel='nofollow noreferrer'
              className='px-6 py-2 mr-4 mb-4 transition uppercase bg-transparent border-2 border-blue-500 rounded-lg text-white hover:bg-orange-400 hover:border-orange-400 text-md'>
              Google Scholar
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
