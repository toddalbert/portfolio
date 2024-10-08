import Hero from './components/Hero'
import Coding from './components/Coding'
import Reel from './components/Reel'
import Tech from './components/Tech'
import Teaching from './components/Teaching'
import Entrepreneur from './components/Entrepreneur'
import Service from './components/Service'
import Footer from './components/Footer'
import CTA from './components/CTA'

export default function Home() {
  return (
    <>
      <Hero />
      <Coding />
      <Reel />
      <Entrepreneur />
      <Service />
      <Tech />
      <Teaching />
      <CTA />
      <Footer />
    </>
  )
}
