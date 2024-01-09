import { getGamesData } from '@/services/get-games-info'
import React from 'react'
import GameSection from '../components/game-section'

async function Games() {
  const gamesData = await getGamesData()
  return (
    <>
      {gamesData.map((data) => {
        return (
          <div
            id={data.slug}
            key={data.slug}
            className={'mb-10 sm:mb-20 md:mb-24'}
          >
            <GameSection
              name={data.name}
              imageAsset={data.gameImage.image}
              alt={data.gameImage.alt}
              price={data.price}
              description={data.description}
            ></GameSection>
          </div>
        )
      })}
    </>
  )
}

export default Games
