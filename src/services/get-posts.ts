import client from '../../sanity.client'
import { groq } from 'next-sanity'
import { ImageAsset } from 'sanity'
import { PortableTextBlock } from '@portabletext/types'

export type TPostPreview = {
  title: string
  image: ImageAsset
  altText: string
  slug: string
}

export type TLastPostPreview = TPostPreview & {
  publishedAt: string
  authors: string[]
  content: PortableTextBlock[]
}

export type TPost = TLastPostPreview

export type TSlug = {
  slug: string
}

export async function getLastPostData(): Promise<TLastPostPreview> {
  return await client.fetch<TLastPostPreview>(
    groq`
      *[_type == 'blog'][-1] {
        title,
        authors,
        content,
        "publishedAt": date,
        _createdAt,
        "slug": slug.current,
        "altText": postImage.altText,
        "image": postImage.asset ->
      }
    `,
  )
}

export async function getPostsPreviewData(): Promise<TPostPreview[]> {
  return await client.fetch<TPostPreview[]>(
    groq`
      *[_type == 'blog'] {
        title,
        _createdAt,
        "slug": slug.current,
        "altText": postImage.altText,
        "image": postImage.asset ->
      } | order(_createdAt desc) 
    `,
  )
}

export async function getPostBySlug(slug: string): Promise<TPost> {
  return (
    await client.fetch<TPost[]>(
      groq`
        *[_type == 'blog' && slug.current == '${slug}'] {
          title,
          content,
          authors,
          "publishedAt": date,
          "altText": postImage.altText,
          "image": postImage.asset ->,
        }
      `,
    )
  )[0]
}

export async function getPostsSlugs(): Promise<TSlug[]> {
  return await client.fetch<TSlug[]>(
    groq`
      *[_type == 'blog'] {
        "slug": slug.current,
      }
      `,
  )
}

export async function getPostsData(slug: string): Promise<TPost> {
  return (
    await client.fetch<TPost[]>(
      groq`
        *[_type == 'blog' && slug.current == '${slug}'] {
          title,
          subtitle,
          content,
          authors,
          "createdAt": date,
          "updatedAt": _updatedAt,
          "bannerAltText": banner.altText,
          "bannerImage": banner.asset ->,
          "bannerImageDescription": banner.bannerImageDescription,
        }
      `,
    )
  )[0]
}
