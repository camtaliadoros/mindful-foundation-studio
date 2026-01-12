import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'logoSection',
  title: 'Partner Logos Section',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Title',
      description: 'Internal title for this logo section (for CMS organization)',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'colourScheme',
      type: 'string',
      title: 'Colour Scheme',
      description: 'Background colour scheme for this section',
      options: {
        list: [
          {title: 'Light', value: 'light'},
          {title: 'Dark', value: 'dark'},
        ],
      },
      initialValue: 'light',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'logos',
      type: 'array',
      title: 'Logos',
      of: [{type: 'linkableLogo'}],
      validation: (Rule) => Rule.min(1),
    }),
  ],
  preview: {
    select: {
      title: 'title',
      colourScheme: 'colourScheme',
    },
    prepare({title, colourScheme}) {
      return {
        title: title || 'Untitled Partner Logos Section',
        subtitle: `Colour Scheme: ${colourScheme || 'light'}`,
      }
    },
  },
})
