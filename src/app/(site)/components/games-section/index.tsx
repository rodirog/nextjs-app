import GameCard from '../game-card'
import {
  getFirstGameImageData,
  getGameImagesData,
} from '@/services/get-games-info'
import { SanityImage } from '../sanity-image'

export async function GamesSection() {
  const firstGameImageData = await getFirstGameImageData()

  const gameImagesData = await getGameImagesData()

  return (
    <>
      <div className={'sm:flex-row mb-5 h-48 lg:h-[31.2rem]'}>
        <SanityImage
          key={firstGameImageData.slug}
          asset={firstGameImageData.gameImage.image}
          className={'w-full h-full'}
          style={{ objectFit: 'cover' }}
          alt={firstGameImageData.gameImage.alt}
        ></SanityImage>
      </div>
      <div className={'flex flex-col sm:flex-row flex-wrap gap-5'}>
        {gameImagesData.map((imagesData) => {
          return (
            <>
              <GameCard
                key={imagesData.slug}
                imageAsset={imagesData.gameImage.image}
                alt={imagesData.gameImage.alt}
              />
            </>
          )
        })}
      </div>
    </>
  )
}
