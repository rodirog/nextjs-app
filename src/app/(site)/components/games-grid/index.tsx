import GameGridImage from '../games-grid-image'
import {
  getFirstGameImageData,
  getGameImagesData,
} from '@/services/get-games-info'
import { SanityImage } from '../sanity-image'
import Link from 'next/link'

export async function GamesGrid() {
  const firstGameImageData = await getFirstGameImageData()

  const gameImagesData = await getGameImagesData()

  return (
    <>
      <div className={'sm:flex-row mb-5 h-48 lg:h-[31.2rem]'}>
        <Link href={`/games/#${firstGameImageData.slug}`}>
          <SanityImage
            key={firstGameImageData.slug}
            asset={firstGameImageData.gameImage.image}
            className={'w-full h-full'}
            style={{ objectFit: 'cover' }}
            alt={firstGameImageData.gameImage.alt}
          ></SanityImage>
        </Link>
      </div>
      <div className={'flex flex-col sm:flex-row flex-wrap gap-5'}>
        {gameImagesData.map((imagesData) => {
          return (
            <GameGridImage
              key={imagesData.slug}
              imageAsset={imagesData.gameImage.image}
              alt={imagesData.gameImage.alt}
              href={`/games/#${imagesData.slug}`}
            />
          )
        })}
      </div>
    </>
  )
}
