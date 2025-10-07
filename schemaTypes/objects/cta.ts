import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'cta',
  title: 'Call To Action',
  type: 'object',
  fields: [
    defineField({
      name: 'label',
      type: 'string',
      title: 'Label',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'href',
      type: 'url',
      title: 'URL',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'style',
      type: 'string',
      title: 'Style',
      options: {list: ['primary', 'secondary', 'link']},
      initialValue: 'primary',
    }),
  ],
})

