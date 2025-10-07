import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'testimonial',
  title: 'Testimonial',
  type: 'object',
  fields: [
    defineField({
      name: 'quote',
      type: 'text',
      title: 'Quote',
      validation: (Rule) => Rule.required().min(10),
    }),
    defineField({
      name: 'author',
      type: 'string',
      title: 'Author',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'roleOrTitle',
      type: 'string',
      title: 'Role/Title',
    }),
    defineField({
      name: 'org',
      type: 'string',
      title: 'Organisation',
    }),
  ],
  preview: {
    select: {title: 'author', subtitle: 'org'},
    prepare(selection) {
      return selection
    },
  },
})

