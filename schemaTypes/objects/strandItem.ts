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
      name: 'href',
      type: 'url',
      title: 'Link URL',
      description: 'External or internal URL',
    }),
  ],
})
