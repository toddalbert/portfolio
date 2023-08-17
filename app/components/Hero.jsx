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

        <div className='container mt-24 md:mt-8 lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center'>
          <h1 className='title-font sm:text-4xl text-3xl mb-4 font-medium text-zinc-200'>
            Todd H. Albert, Ph.D. <br className='hidden lg:inline-block' />
            Software Engineer
          </h1>
          <p className="mb-8 text-md leading-relaxed text-zinc-400">
            A seasoned software engineer with over 30 years of professional experience,
            I've been mentoring startup founders, engineers, and students for the past
            22+ years and building and launching dozens of projects for startups to
            Fortune 100 companies. I strive to make the biggest impact between mentoring,
            product design, servant leadership, and coding (my first language). I've even
            been invited by X (the Alphabet moon-shot company, not a Twitter-rebrand) to
            pitch a project I was leading (and have an open-invitation back).
          </p>
          <p className="mb-8 text-md leading-relaxed text-zinc-400">
            I have extensive experience with a wide range of technologies and languages
            including C#, JavaScript / TypeScript, React, Next.js, Unity, React-Native,
            Swift, AWS, Google Cloud, Azure, Mongo, Firestore, and SQL.
          </p>
          <div className='flex justify-center flex-wrap'>
            <a
              href='https://www.linkedin.com/in/toddalbert/'
              target='_Blank'
              rel='nofollow noreferrer'
              className="px-6 py-2 mr-4 mb-4 transition uppercase bg-transparent border-2 border-blue-500 rounded-lg text-white hover:bg-blue-500 text-md"
              >
              LinkedIn
            </a>
            <a
              href='https://github.com/toddalbert'
              target='_Blank'
              rel='nofollow noreferrer'
              className="px-6 py-2 mr-4 mb-4 transition uppercase bg-transparent border-2 border-blue-500 rounded-lg text-white hover:bg-blue-500 text-md"
              >
              GitHub
            </a>
            <a
              href='https://scholar.google.dk/citations?user=lYZY0SYAAAAJ&hl=en'
              target='_Blank'
              rel='nofollow noreferrer'
              className="px-6 py-2 mr-4 mb-4 transition uppercase bg-transparent border-2 border-blue-500 rounded-lg text-white hover:bg-blue-500 text-md"
              >
              Google Scholar
            </a>
            <a
              href='https://www.dropbox.com/scl/fi/k42kc1vew64pmwpzqg49y/Albert-resume-Aug-2023.pdf?rlkey=wa1bg4p3zristkmd5kpjvki5w&dl=0'
              target='_Blank'
              rel='nofollow noreferrer'
              className="px-6 py-2 mr-4 mb-4 transition uppercase bg-transparent border-2 border-blue-500 rounded-lg text-white hover:bg-blue-500 text-md"
              >
              Latest Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
