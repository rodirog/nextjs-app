import { defineField } from 'sanity'

const games = {
  name: 'games',
  title: 'Games',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Game Name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    {
      name: 'gameImage',
      title: 'Game Image',
      type: 'image',
      description: 'Upload a picture of the game',
      options: { hotspot: true },
      fields: [
        {
          name: 'alt',
          title: 'Alt',
          type: 'string',
        },
      ],
    },
    {
      name: 'description',
      title: 'Game Description',
      type: 'array',
      of: [{ type: 'block' }],
    },
    defineField({
      name: 'price',
      title: 'Game Price',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      type: 'slug',
      title: 'Slug',
      name: 'slug',
      description: 'Slug do jogo. Clique no botão Generate para gerá-la.',
      options: {
        source: 'name',
        isUnique: (value, context) => context.defaultIsUnique(value, context),
      },
      validation: (Rule) => Rule.required(),
    }),
  ],
}

export default games
