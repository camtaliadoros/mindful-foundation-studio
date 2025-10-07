import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'seo',
  title: 'SEO',
  type: 'object',
  fields: [
    defineField({
      name: 'metaTitle',
      type: 'string',
      title: 'Meta Title',
      validation: (Rule) => Rule.max(60),
    }),
    defineField({
      name: 'metaDescription',
      type: 'text',
      rows: 3,
      title: 'Meta Description',
      validation: (Rule) => Rule.max(160),
    }),
    defineField({
      name: 'ogImage',
      type: 'image',
      title: 'Open Graph Image',
      options: {hotspot: true},
    }),
    defineField({
      name: 'noIndex',
      type: 'boolean',
      title: 'No Index (discourage search engines)',
      initialValue: false,
    }),
  ],
})



