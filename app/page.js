import Nav from './components/Nav'
import BookBanner from './components/BookBanner'
import Hero from './components/Hero'
import Coding from './components/Coding'
import Reel from './components/Reel'
import Tech from './components/Tech'
import Teaching from './components/Teaching'
import Entrepreneur from './components/Entrepreneur'
import Service from './components/Service'
import BookTeaser from './components/BookTeaser'
import Footer from './components/Footer'
import CTA from './components/CTA'

// Subtle alternating band to give the stacked logo-grid sections some rhythm.
const band = 'bg-stone-900/40'

export default function Home() {
  return (
    <>
      <BookBanner />
      <Nav />
      <div id='top'>
        <Hero />
      </div>
      <div id='work' className={band}>
        <Coding />
      </div>
      <Reel />
      <div id='leadership' className={band}>
        <Entrepreneur />
      </div>
      <Service />
      <div id='tech' className={band}>
        <Tech />
      </div>
      <div id='teaching'>
        <Teaching />
      </div>
      <BookTeaser />
      <div id='contact' className={band}>
        <CTA />
      </div>
      <Footer />
    </>
  )
}
