import { GamesSection } from './components/games-section'

export default function Home() {
  return (
    <>
      <div className="px-5 pt-5 sm:px-10 lg:px-24">
        <GamesSection />
        <p>This is a content to make our page longer</p>
        <div className="w-full h-screen bg-green-300"></div>
        <p>Lorem Ipsum is simply dummy text ...</p>
      </div>
    </>
  )
}
