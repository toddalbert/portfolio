import { barlow } from '../fonts'

export default function Hero() {
  return (
    <section className='text-zinc-300 body-font'>
      <div className='container mx-auto flex px-5 py-24 md:flex-row flex-col items-center'>
        <div className='lg:max-w-lg lg:w-full md:w-1/2 w-5/6 relative'>
          <div className='bg-blue-400 opacity-60 -skew-y-6 p-8 rounded-xl absolute -top-8 -left-8 -right-8 -bottom-8'></div>
            <img
              data-aos="fade-up" data-aos-duration="500" data-aos-offset="100"
              className='object-cover object-center rounded z-10'
              alt='Todd Albert'
              src='/todd-albert-sm.jpg'
            />
        </div>

        <div className='lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center'>
          <h1 className='title-font sm:text-4xl text-3xl mb-4 font-medium text-zinc-200'>
            Todd H. Albert, Ph.D. <br className='hidden lg:inline-block' />
            Software Engineer
          </h1>
          <p className="mb-8 text-md leading-relaxed text-zinc-400">
            Seasoned software engineer with over 30 years of experience. Proven
            ability to lead and manage teams, as well as develop and deliver high-quality software
            solutions. Extensive experience with a wide range of technologies and languages,
            including C#, JavaScript, React, Unity, React-Native, Swift, AWS, Google Cloud, Azure,
            Mongo, Firestore, and SQL. Former NASA Research Fellow and Professor and experienced
            entrepreneur and mentor.
          </p>
          <div className='flex justify-center'>
            <a
              href='https://github.com/toddalbert'
              target='_Blank'
              rel='nofollow noreferrer'
              className="px-6 py-2 mr-4 text-white uppercase bg-blue-500 border-2 border-transparent rounded-lg text-md hover:bg-blue-400"
              // className='inline-flex focus:outline-none hover:bg-indigo-600'
              >
              GitHub
            </a>
            <a
              href='https://www.linkedin.com/in/toddalbert/'
              target='_Blank'
              rel='nofollow noreferrer'
              className="px-6 py-2 text-blue-500 uppercase bg-transparent border-2 border-blue-500 rounded-lg dark:text-white hover:bg-blue-500 hover:text-white text-md"
              // className='ml-4 inline-flex text-zinc-700 bg-zinc-100 border-0 focus:outline-none hover:bg-zinc-200 rounded text-lg'
              >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
