import { defineArrayMember, defineField, defineType } from 'sanity'

export const blogPosts = defineType({
  name: 'blog',
  type: 'document',
  title: 'Blog',
  fields: [
    defineField({
      title: 'Título',
      name: 'title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      type: 'image',
      name: 'postImage',
      title: 'Imagem do post',
      fields: [
        defineField({
          name: 'altText',
          type: 'string',
          title: 'Texto Alternativo',
          description: 'Escreva uma frase que descreva a imagem.',
          validation: (Rule) =>
            Rule.required().error('Este campo é obrigatório.'),
        }),
      ],
      validation: (Rule) =>
        Rule.required().error('Imagem é um campo obrigatório.'),
    }),
    defineField({
      type: 'date',
      name: 'date',
      title: 'Data de publicação do Post',
      options: {
        dateFormat: 'DD/MM/YYYY',
      },
      validation: (Rule) =>
        Rule.required().error('Data é um campo obrigatório.'),
    }),
    {
      title: 'Conteúdo do post',
      name: 'content',
      type: 'array',
      of: [{ type: 'block' }],
    },
    defineField({
      title: 'Autores',
      name: 'authors',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'string',
          validation: (Rule) =>
            Rule.required().error('Autor é um campo obrigatório!'),
        }),
      ],
      validation: (Rule) =>
        Rule.required().min(1).error('Autor é um campo obrigatório!'),
    }),
    {
      type: 'slug',
      title: 'Slug',
      name: 'slug',
      description: 'Clique no botão Generate para gerar o valor.',
      options: {
        source: 'title',
        maxLength: 70,
        isUnique: (value, context) => context.defaultIsUnique(value, context),
      },
      validation: (Rule) => Rule.required(),
    },
  ],
})
