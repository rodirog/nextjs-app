// { StaticImageData } from 'next/image'
import { ImageAsset } from 'sanity'
import { SanityImage } from '../sanity-image'
import Link from 'next/link'

interface Props {
  imageAsset: ImageAsset
  alt: string
  href: string
}

const GameGridImage = ({ imageAsset, alt, href }: Props) => {
  return (
    <div className={'sm:flex-1 h-48 lg:h-72'}>
      <Link href={href}>
        <SanityImage
          className={'w-full h-full'}
          asset={imageAsset}
          style={{ objectFit: 'cover' }}
          alt={alt}
        ></SanityImage>
      </Link>
    </div>
  )
}

export default GameGridImage
