export default function CTA() {
  return (
    <section className='text-stone-300 body-font'>
      <div className='container mx-auto flex px-5 py-24 md:flex-row flex-col items-center'>

        <div className='container mt-24 md:mt-8 lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col mb-16 md:mb-0 items-center text-center'>
          <h2 className='title-font sm:text-4xl text-3xl mb-4 font-medium text-stone-200'>
            Let's Connect
          </h2>
          <div className='flex justify-center flex-wrap'>
            <a
              href='/Albert-Todd-resume-June-2024.pdf'
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
