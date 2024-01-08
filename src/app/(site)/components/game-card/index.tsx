// { StaticImageData } from 'next/image'
import { ImageAsset } from 'sanity'
import { SanityImage } from '../sanity-image'

interface Props {
  imageAsset: ImageAsset
  alt: string
}

const GameCard = ({ imageAsset, alt }: Props) => {
  return (
    <div className={'sm:flex-1 h-48 lg:h-72'}>
      <SanityImage
        className={'w-full h-full'}
        asset={imageAsset}
        style={{ objectFit: 'cover' }}
        alt={alt}
      ></SanityImage>
    </div>
  )
}

export default GameCard
