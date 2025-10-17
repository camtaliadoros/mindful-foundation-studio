import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'module',
  title: 'Course Module',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Module Title',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      type: 'text',
      title: 'Module Description',
      rows: 3,
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'description',
    },
    prepare(selection) {
      return {
        title: selection.title,
        subtitle: selection.subtitle,
      }
    },
  },
})
