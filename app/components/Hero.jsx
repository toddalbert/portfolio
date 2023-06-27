import { barlow } from '../fonts'

export default function Hero() {
  return (
    <section className='text-zinc-400 body-font'>
      <div className='container mx-auto flex px-5 py-24 md:flex-row flex-col items-center'>
        <div className='lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center'>
          <h1 className='title-font sm:text-4xl text-3xl mb-4 font-medium text-zinc-200'>
            Todd H. Albert{' '}
            <br className='hidden lg:inline-block' />
            Senior Software Engineer
          </h1>
          <p className={`mb-8 text-lg leading-relaxed ${barlow.className}`}>
            Seasoned software engineer with over 30 years of experience in the industry. Proven ability to lead
            and manage teams, as well as develop and deliver high-quality software solutions. Extensive experience
            with a wide range of technologies and languages, including C#, JavaScript, React, Unity, React-Native,
            Swift, AWS, Google Cloud, Azure, Mongo, Firestore, and SQL. Former NASA Research Fellow and Professor.
            Experienced entrepreneur with over 13 years of experience managing teams of up to 20 people.
          </p>
          <div className='flex justify-center'>
            <a href="https://github.com/toddalbert" target='_Blank' rel='nofollow noreferrer' className='inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg'>
              GitHub
            </a>
            <a href="#" className='ml-4 inline-flex text-zinc-700 bg-zinc-100 border-0 py-2 px-6 focus:outline-none hover:bg-zinc-200 rounded text-lg'>
              Resume
            </a>
          </div>
        </div>
        <div className='lg:max-w-lg lg:w-full md:w-1/2 w-5/6'>
          <img
            className='object-cover object-center rounded'
            alt='Todd Albert'
            src='/todd-albert-sm.jpg'
          />
        </div>
      </div>
    </section>
  )
}
