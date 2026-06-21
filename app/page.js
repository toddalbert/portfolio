import RevealController from './components/home/RevealController'
import SiteNav from './components/home/SiteNav'
import Hero from './components/home/Hero'
import OperatingAtScale from './components/home/OperatingAtScale'
import Outcomes from './components/home/Outcomes'
import HowILead from './components/home/HowILead'
import TrackRecord from './components/home/TrackRecord'
import Range from './components/home/Range'
import Writing from './components/home/Writing'
import Book from './components/home/Book'
import SiteFooter from './components/home/SiteFooter'

// 2026 warm-editorial homepage — executive-authority site per the
// Todd Albert.dc.html design handoff. Sections run in narrative order.
export default function Home() {
  return (
    <div className='font-hanken bg-paper text-umber-body overflow-x-hidden'>
      <RevealController />
      <SiteNav />
      <main>
        <Hero />
        <OperatingAtScale />
        <Outcomes />
        <HowILead />
        <TrackRecord />
        <Range />
        <Writing />
        <Book />
      </main>
      <SiteFooter />
    </div>
  )
}
