import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    defineField({
      name: 'siteName',
      type: 'string',
      title: 'Site Name',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'defaultSeo',
      type: 'seo',
      title: 'Default SEO',
    }),
    defineField({
      name: 'socialImage',
      type: 'image',
      title: 'Default Social Share Image',
      options: {hotspot: true},
    }),
    defineField({
      name: 'twitterHandle',
      type: 'string',
      title: 'Twitter Handle',
    }),
    defineField({
      name: 'donateButton',
      type: 'donateButton',
      title: 'Header Donate Button',
      description: 'Donate button configuration for the header menu. Button will be hidden if no link is provided.',
    }),
  ],
  preview: {select: {title: 'siteName'}},
})



