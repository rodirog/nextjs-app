import { getPostBySlug, getPostsSlugs } from '@/services/get-posts'
import Post from '../../components/blog/post'

interface PostPageProps {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  const slugs = await getPostsSlugs()

  return slugs
}

export default async function Page({ params: { slug } }: PostPageProps) {
  const data = await getPostBySlug(slug)

  return (
    <div className={'px-8 pt-5 sm:px-10 lg:px-24'}>
      <Post
        title={data.title}
        imageAsset={data.image}
        alt={data.altText}
        authors={data.authors}
        date={data.publishedAt}
        content={data.content}
      ></Post>
    </div>
  )
}
