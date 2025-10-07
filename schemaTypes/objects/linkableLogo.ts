import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'linkableLogo',
  title: 'Linkable Logo',
  type: 'object',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
      title: 'Name',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'logo',
      type: 'image',
      title: 'Logo',
      options: {hotspot: true},
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'url',
      type: 'url',
      title: 'URL',
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {select: {title: 'name', media: 'logo'}},
})
