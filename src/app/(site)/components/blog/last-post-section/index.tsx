import { SanityImage } from '../../sanity-image'
import { getLastPostData } from '@/services/get-posts'
import { PortableText } from '@portabletext/react'
import styles from './last-post-section.module.css'
import Link from 'next/link'

export async function LastPostSection() {
  const data = await getLastPostData()
  const authorsString = data.authors.join(', ')
  const dateComponents = data.publishedAt.split('-')
  const formattedDate =
    dateComponents[1] + '/' + dateComponents[2] + '/' + dateComponents[0]

  return (
    <Link href={`/blog/${data.slug}`}>
      <div className={'flex flex-col gap-2 md:flex-row md:gap-5'}>
        <SanityImage
          className={'mx-auto max-h-96 object-cover'}
          asset={data.image}
          alt={data.altText}
        ></SanityImage>
        <div>
          <div className={'flex flex-col gap-0.5 xl:gap-2 mx-auto'}>
            <h2
              className={
                'text-pixel-grey text-base sm:text-xl lg:text-2xl xl:text-3xl '
              }
            >
              {data.title}
            </h2>
            <p className={'text-pixel-grey text-xs xl:text-base mb-3 xl:mb-5'}>
              Por {authorsString}, {formattedDate}
            </p>
          </div>
          <div className={styles.content}>
            <PortableText value={data.content}></PortableText>
          </div>
        </div>
      </div>
    </Link>
  )
}
