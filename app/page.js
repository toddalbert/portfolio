import Ribbon from './components/home/Ribbon'
import SiteNav from './components/home/SiteNav'
import Hero from './components/home/Hero'
import Logos from './components/home/Logos'
import Outcomes from './components/home/Outcomes'
import ThroughLine from './components/home/ThroughLine'
import BookFeature from './components/home/BookFeature'
import Speaking from './components/home/Speaking'
import FinalCTA from './components/home/FinalCTA'
import SiteFooter from './components/home/SiteFooter'

// 2026 homepage redesign — executive authority site with literary depth.
// Sections in narrative order per the rebrand brief.
export default function Home() {
  return (
    <div className='font-grotesk text-cream bg-ink overflow-hidden'>
      <Ribbon />
      <SiteNav />
      <Hero />
      <Logos />
      <Outcomes />
      <ThroughLine />
      <BookFeature />
      <Speaking />
      <FinalCTA />
      <SiteFooter />
    </div>
  )
}
