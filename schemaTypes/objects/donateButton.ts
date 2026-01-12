import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'donateButton',
  title: 'Donate Button',
  type: 'object',
  fields: [
    defineField({
      name: 'label',
      type: 'string',
      title: 'Button Label',
      initialValue: 'Donate',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'href',
      type: 'url',
      title: 'Link URL',
      validation: (Rule) => Rule.required(),
    }),
  ],
})


