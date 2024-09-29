'use client'
import { useState, useMemo } from 'react'
import { Dialog, DialogBackdrop, DialogPanel } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { portfolioItems } from './portfolioItems'

export default function QuickView({ src, alt, className, slug, videoSrc, videoAlt }) {
  const [open, setOpen] = useState(false)

  const product = useMemo(() => portfolioItems[slug], [slug])
  const hasImage = useMemo(() => product.imageSrc, [product])
  const hasVideo = useMemo(() => product.videoSrc, [product])

  return (
    <>
      <span onClick={() => setOpen(true)} className='flex justify-center items-center cursor-zoom-in'>
        <img
          className={className}
          alt={alt}
          src={src}
        />
      </span>
      <Dialog open={open} onClose={setOpen} className='relative z-10'>
        <DialogBackdrop
          transition
          className='fixed inset-0 hidden bg-zinc-500 bg-opacity-75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in md:block'
        />

        <div className='fixed inset-0 z-10 w-screen overflow-y-auto'>
          <div className='flex min-h-full items-stretch justify-center text-center md:items-center md:px-2 lg:px-4'>
            <DialogPanel
              transition
              className='flex w-full transform text-left text-base transition data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in md:my-8 md:max-w-2xl md:px-4 data-[closed]:md:translate-y-0 data-[closed]:md:scale-95 lg:max-w-4xl'>
              <div className='relative flex w-full items-center overflow-hidden bg-zinc-800 px-4 pb-8 pt-14 shadow-2xl sm:px-6 sm:pt-8 md:p-6 lg:p-8'>
                <button
                  type='button'
                  onClick={() => setOpen(false)}
                  className='absolute right-4 top-4 text-zinc-100 hover:text-zinc-500 sm:right-6 sm:top-8 md:right-6 md:top-6 lg:right-8 lg:top-8'>
                  <span className='sr-only'>Close</span>
                  <XMarkIcon aria-hidden='true' className='h-6 w-6' />
                </button>

                <div className='grid w-full grid-cols-1 items-start gap-x-6 gap-y-8 sm:grid-cols-12 lg:gap-x-8'>
                  {hasImage && (
                    <div className='sm:col-span-4 lg:col-span-5'>
                      <div className='aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-blue-600 -skew-y-3 rotate-3'>
                        <img
                          alt={product.imageAlt}
                          src={product.imageSrc}
                          className='object-contain object-center p-4 rounded-lg skew-y-3 -rotate-3'
                        />
                      </div>
                    </div>
                  )}
                  {hasVideo && (
                    <div className='sm:col-span-4 lg:col-span-5'>
                      <div className='flex-col justify-center aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-blue-600 -skew-y-3 rotate-3'>

                        <video className="w-full mt-auto mb-auto h-auto max-w-full object-cover object-center p-4 rounded-lg skew-y-3 -rotate-3" autoplay muted controls>
                          <source src={product.videoSrc} type="video/mp4" />
                            {product.videoAlt}
                        </video>

                        {/* <img
                          alt={product.videoAlt}
                          src={product.videoSrc}
                          className='object-cover object-center p-4 rounded-lg skew-y-3 -rotate-3'
                        /> */}
                      </div>
                    </div>
                  )}
                  <div className={hasImage || hasVideo ? 'sm:col-span-8 lg:col-span-7' : 'col-span-12'}>
                    <h2 className='text-2xl font-bold text-zinc-100 sm:pr-12'>{product.name}</h2>

                    <section aria-labelledby='information-heading' className='mt-3'>
                      <h3 id='information-heading' className='sr-only'>
                        Product information
                      </h3>

                      <div className='mt-6'>
                        <h4 className='sr-only'>Description</h4>

                        <p className='text-sm text-zinc-400'>{product.description}</p>
                      </div>

                      <div className='mt-4 w-full'>
                        <h4 className='sr-only'>Technology used</h4>
                        {product.tech && product.tech.map(tech => (
                          <span key={tech} className="text-sm font-medium me-2 px-2.5 py-0.5 rounded bg-blue-900 text-blue-300">{tech}</span>
                        ))}
                      </div>

                    </section>

                  </div>
                </div>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  )
}
