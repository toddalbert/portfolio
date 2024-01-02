export default function Tech() {
  return (
    <section data-aos="fade-up" data-aos-duration="500" data-aos-offset="100">
      <div className='py-8 lg:py-16 mx-auto my-auto max-w-screen-xl px-4'>
        <h3 className='mb-4 lg:mb-16 text-3xl font-medium tracking-tight leading-tight text-center text-stone-200 md:text-4xl'>
          Some of the tech I've been enjoying most lately
        </h3>
        <div className='grid grid-cols-2 gap-8 text-stone-400 sm:gap-12 md:grid-cols-3 lg:grid-cols-6'>
          <span className='flex justify-center items-center'>
            <img
              className='h-8 grayscale brightness-200 contrast-0 hover:scale-150 transition'
              alt='Next.js'
              src='/tech/Nextjs-logo.svg'
            />
          </span>
          <span className='flex justify-center items-center'>
            <img
              className='h-14 brightness-100 contrast-50 grayscale hover:scale-150 transition'
              alt='React Native'
              src='/tech/react-native-logo.png'
            />
          </span>
          <span className='flex justify-center items-center'>
            <img
              className='h-14 brightness-50 contrast-50 grayscale hover:scale-150 transition'
              alt='React'
              src='/tech/react.svg'
            />
          </span>
          <span className='flex justify-center items-center'>
            <img
              className='h-9 grayscale brightness-200 contrast-0 hover:scale-150 transition'
              alt='Tailwind CSS'
              src='/tech/Tailwind_CSS_Logo.svg'
            />
          </span>
          <span className='flex justify-center items-center'>
            <img
              className='h-12 grayscale brightness-200 contrast-0 hover:scale-150 transition'
              alt='Express'
              src='/tech/expressjs.svg'
            />
          </span>
          <span className='flex justify-center items-center'>
            <img
              className='h-12 grayscale brightness-200 contrast-0 hover:scale-150 transition'
              alt='c-sharp'
              src='/tech/c-sharp.png'
            />
          </span>
          <span className='flex justify-center items-center'>
            <img
              className='h-12 grayscale brightness-100 contrast-50 hover:scale-150 transition'
              alt='Unity'
              src='/tech/unity.png'
            />
          </span>
          <span className='flex justify-center items-center'>
            <img
              className='h-12 brightness-50 contrast-100 hover:scale-150 transition'
              alt='TypeScript'
              src='/tech/typescript.svg'
            />
          </span>
          <span className='flex justify-center items-center'>
            <img
              className='h-12 grayscale brightness-200 contrast-0 hover:scale-150 transition'
              alt='Solidity'
              src='/tech/solidity.png'
            />
          </span>
          <span className='flex justify-center items-center'>
            <img
              className='h-12 grayscale brightness-200 contrast-0 hover:scale-150 transition'
              alt='Python'
              src='/tech/Python.svg'
            />
          </span>
          <span className='flex justify-center items-center'>
            <img
              className='h-12 grayscale brightness-100 contrast-50 hover:scale-150 transition'
              alt='Scikit learn'
              src='/tech/Scikit_learn.svg'
            />
          </span>
          <span className='flex justify-center items-center'>
            <img
              className='h-12 grayscale brightness-200 contrast-0 hover:scale-150 transition'
              alt='Mongo DB'
              src='/tech/mongodb.svg'
            />
          </span>
          <span className='flex justify-center items-center'>
            <img
              className='h-12 grayscale brightness-100 contrast-50 hover:scale-150 transition'
              alt='Firestore'
              src='/tech/firestore.png'
            />
          </span>
          <span className='flex justify-center items-center'>
            <img
              className='h-12 grayscale brightness-100 contrast-50 hover:scale-150 transition'
              alt='Terraform'
              src='/tech/terraform.png'
            />
          </span>
          <span className='flex justify-center items-center'>
            <img
              className='h-12 grayscale brightness-100 contrast-50 hover:scale-150 transition'
              alt='Expo'
              src='/tech/expo.png'
            />
          </span>
        </div>
      </div>
    </section>
  )
}
