import Link from 'next/link'
import { SanityImage } from '../../sanity-image'
import { getPostsPreviewData } from '@/services/get-posts'

export async function BlogCardsSection() {
  const postsPreviewData = await getPostsPreviewData()

  return (
    <div
      className={
        'flex flex-col min-[450px]:grid min-[450px]:grid-cols-2 md:grid-cols-3 gap-4 md:flex-row md:gap-5 xl:gap-7 mt-7 mb-16 xl:mb-28'
      }
    >
      {postsPreviewData.slice(0, -1).map((data) => {
        return (
          <Link href={`/blog/${data.slug}`} key={data.slug}>
            <div className={'flex flex-col gap-1'}>
              <SanityImage
                className={'w-full h-32 md:h-40 xl:h-52 object-cover'}
                asset={data.image}
                alt={data.altText}
              ></SanityImage>
              <h2 className={'text-xs md:text-base text-pixel-grey'}>
                {data.title}
              </h2>
            </div>
          </Link>
        )
      })}
    </div>
  )
}
