import { barlow } from '../fonts'

export default function Hero() {
  return (
    <section className='text-zinc-400 body-font'>
      <div className='container mx-auto flex px-5 py-24 md:flex-row flex-col items-center'>
        <div className='lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center'>
          <h1 className='title-font sm:text-4xl text-3xl mb-4 font-medium text-zinc-200'>
            Todd H. Albert
            <br className='hidden lg:inline-block' />
            Senior Software Engineer
          </h1>
          <p className={`mb-8 text-lg leading-relaxed ${barlow.className}`}>
            Todd has over 40 years of coding experience, including over 20 years of experience
            working with Fortune 500 companies. He has worked with a wide variety of technologies
            and languages, including C#, JavaScript, React, Unity, React-Native, Swift, and SQL.
          </p>
          <p className={`mb-8 text-lg leading-relaxed ${barlow.className}`}>
            Todd is a former NASA Research Fellow and Professor with over 20 years of teaching
            experience, including developing curriculum, mentoring students, and evaluating
            grant proposals for NASA. He has over 13 years experience as an entrepreneur and
            has managed teams of up to 20 people.
          </p>
          <div className='flex justify-center'>
            <button className='inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg'>
              Button
            </button>
            <button className='ml-4 inline-flex text-zinc-700 bg-zinc-100 border-0 py-2 px-6 focus:outline-none hover:bg-zinc-200 rounded text-lg'>
              Button
            </button>
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
