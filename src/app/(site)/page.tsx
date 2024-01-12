import AboutSection from './components/about-section'
import CareerSection from './components/career-section'
import { GamesGrid } from './components/games-grid'

export default function Home() {
  return (
    <>
      <div className="px-8 pt-5 sm:px-10 lg:px-24">
        <GamesGrid />
        <AboutSection />
        <CareerSection />
      </div>
    </>
  )
}
