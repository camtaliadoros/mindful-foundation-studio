import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'strandItem',
  title: 'Strand Item',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Title',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      type: 'text',
      title: 'Description',
      rows: 3,
    }),

    defineField({
      name: 'internalLink',
      type: 'reference',
      title: 'Internal Page',
      to: [{type: 'homepage'}, {type: 'aboutPage'}],
      description: 'Reference to an internal page',
    }),
  ],
  validation: (Rule) =>
    Rule.custom((fields) => {
      if (fields?.href || fields?.internalLink) return true
      return 'Provide either Link URL or Internal Page'
    }),
})
