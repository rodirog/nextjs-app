import { ImageAsset, PortableTextBlock } from 'sanity'
import { PortableText } from '@portabletext/react'
import styles from './post.module.css'
import { SanityImage } from '../../sanity-image'

interface Props {
  title: string
  imageAsset: ImageAsset
  alt: string
  authors: string[]
  date: string
  content: PortableTextBlock[]
}

const Post = ({ title, imageAsset, alt, authors, date, content }: Props) => {
  const authorsString = authors.join(', ')
  const dateComponents = date.split('-')
  const formattedDate =
    dateComponents[1] + '/' + dateComponents[2] + '/' + dateComponents[0]

  return (
    <div className={'mb-16 xl:mb-28'}>
      <SanityImage
        className={
          'mx-auto mb-3 xl:mb-4 w-full object-cover h-48 md:h-72 xl:h-96'
        }
        asset={imageAsset}
        alt={alt}
        quality={100}
      ></SanityImage>
      <h2
        className={
          'text-pixel-grey text-base sm:text-xl lg:text-2xl xl:text-3xl mb-1 xl:mb-4'
        }
      >
        {title}
      </h2>
      <p className={'text-pixel-grey text-xs xl:text-base mb-3 xl:mb-6'}>
        Por {authorsString}, {formattedDate}
      </p>
      <div className={styles.content}>
        <PortableText value={content}></PortableText>
      </div>
    </div>
  )
}

export default Post
