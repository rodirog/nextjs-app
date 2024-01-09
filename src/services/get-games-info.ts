import client from '../../sanity.client'
import { groq } from 'next-sanity'
import { ImageAsset, PortableTextBlock } from 'sanity'

type TFirstGameImageData = {
  gameImage: {
    image: ImageAsset
    alt: string
  }
  slug: string
}

type TGameImagesData = TFirstGameImageData

type TGamesData = TGameImagesData & {
  name: string
  price: string
  description: PortableTextBlock[]
}

export async function getFirstGameImageData(): Promise<TFirstGameImageData> {
  return await client.fetch<TFirstGameImageData>(
    groq`
      *[_type == 'games'][0] {
        _id,
        name,
        gameImage {alt, "image": asset},
        "slug": slug.current
      }
      `,
  )
}

export async function getGameImagesData(): Promise<TGameImagesData[]> {
  return await client.fetch<TGameImagesData[]>(
    groq`
      *[_type == 'games'][1..-1] {
        _id,
        name,
        gameImage {alt, "image": asset},
        "slug": slug.current
      }
      `,
  )
}

export async function getGamesData(): Promise<TGamesData[]> {
  return await client.fetch<TGamesData[]>(
    groq`
      *[_type == 'games'] {
        _id,
        name,
        gameImage {alt, "image": asset},
        "slug": slug.current,
        price,
        description
      }
      `,
  )
}
