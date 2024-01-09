import AboutSection from './components/about-section'
import { GamesGrid } from './components/games-grid'

export default function Home() {
  return (
    <>
      <div className="px-8 pt-5 sm:px-10 lg:px-24">
        <GamesGrid />
        <AboutSection />
        <p>This is a content to make our page longer</p>
        <div className="w-full h-screen bg-green-300"></div>
        <p>Lorem Ipsum is simply dummy text ...</p>
      </div>
    </>
  )
}
