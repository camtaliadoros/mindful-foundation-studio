import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'stat',
  title: 'Statistic',
  type: 'object',
  fields: [
    defineField({
      name: 'value',
      type: 'string',
      title: 'Value',
      description: 'e.g. "2.4 million" or "1 in 3"',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      type: 'text',
      title: 'Description',
      rows: 2,
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {title: 'value', subtitle: 'description'},
  },
})

