import { ImageAsset, PortableTextBlock } from 'sanity'
import { SanityImage } from '../sanity-image'
import Button from '../navigation/navbar/Button'
import { PortableText } from '@portabletext/react'
import styles from './game-section.module.css'

interface Props {
  name: string
  imageAsset: ImageAsset
  alt: string
  price: string
  description: PortableTextBlock[]
}

const GameSection = ({ name, imageAsset, alt, price, description }: Props) => {
  return (
    <div className={'px-10 sm:px-16 lg:px-24'}>
      <h1 className={'text-center text-xl sm:text-3xl md:text-4xl mb-4'}>
        {name}
      </h1>
      <SanityImage
        className={'mx-auto'}
        asset={imageAsset}
        alt={alt}
      ></SanityImage>
      <div className={'flex items-center gap-8 sm:gap-11 mt-5 mb-9'}>
        <div className={'lg:flex lg: gap-1'}>
          <p className={'text-sm sm:text-base lg:text-xl'}>Valor: </p>
          <p className={'text-sm sm:text-base lg:text-xl whitespace-nowrap'}>
            R$ {price}
          </p>
        </div>
        <Button text="Comprar"></Button>
      </div>
      <div className={styles.content}>
        <PortableText value={description}></PortableText>
      </div>
    </div>
  )
}

export default GameSection
