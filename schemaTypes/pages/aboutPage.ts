import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'aboutPage',
  title: 'About Page',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Title',
      initialValue: 'About Us',
      validation: (Rule) => Rule.required(),
    }),
    // Header
    defineField({
      name: 'headerHeadline',
      type: 'string',
      title: 'Header Headline',
      initialValue: 'About The Mindful Foundation',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'headerSubheadline',
      type: 'string',
      title: 'Header Subheadline',
      initialValue: 'Building safer futures together.',
      validation: (Rule) => Rule.required(),
    }),
    // Who We Are
    defineField({
      name: 'whoWeAreTitle',
      type: 'string',
      title: 'Who We Are — Title',
      initialValue: 'Who We Are',
    }),
    defineField({
      name: 'whoWeAre',
      type: 'blockContent',
      title: 'Who We Are — Content',
      validation: (Rule) => Rule.required(),
    }),
    // Mission
    defineField({
      name: 'missionTitle',
      type: 'string',
      title: 'Our Mission — Title',
      initialValue: 'Our Mission',
    }),
    defineField({
      name: 'mission',
      type: 'text',
      rows: 3,
      title: 'Our Mission — Text',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'missionImage',
      type: 'image',
      title: 'Our Mission — Image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative text',
          description: 'Important for SEO and accessibility',
        },
      ],
    }),
    // Approach
    defineField({
      name: 'approachTitle',
      type: 'string',
      title: 'Our Approach — Title',
      initialValue: 'Our Approach',
    }),
    defineField({
      name: 'approach',
      type: 'array',
      title: 'Approach Items',
      of: [
        {
          type: 'object',
          name: 'approachItem',
          title: 'Approach Item',
          fields: [
            {name: 'title', type: 'string', title: 'Title', validation: (Rule) => Rule.required()},
            {
              name: 'description',
              type: 'text',
              rows: 3,
              title: 'Description',
              validation: (Rule) => Rule.required(),
            },
          ],
        },
      ],
      validation: (Rule) => Rule.min(1),
    }),
    // Team
    defineField({
      name: 'teamTitle',
      type: 'string',
      title: 'The Team — Title',
      initialValue: 'The Team',
    }),
    defineField({
      name: 'team',
      type: 'blockContent',
      title: 'The Team — Content',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'teamImage',
      type: 'image',
      title: 'The Team — Image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative text',
          description: 'Important for SEO and accessibility',
        },
      ],
    }),
    // Advisory Board
    defineField({
      name: 'advisoryBoardTitle',
      type: 'string',
      title: 'Advisory Board — Title',
      initialValue: 'Advisory Board',
    }),
    defineField({
      name: 'advisoryBoard',
      type: 'array',
      title: 'Advisory Board',
      of: [{type: 'linkableLogo'}],
    }),
    // ListenApp Partners
    defineField({
      name: 'listenAppPartnersTitle',
      type: 'string',
      title: 'ListenApp Partners — Title',
      initialValue: 'ListenApp Partners',
    }),
    defineField({
      name: 'listenAppPartners',
      type: 'array',
      title: 'ListenApp Partners',
      of: [{type: 'linkableLogo'}],
    }),
    defineField({
      name: 'specialThanksTitle',
      type: 'string',
      title: 'Special Thanks — Title',
      initialValue: 'Special thanks to',
    }),
    defineField({
      name: 'specialThanks',
      type: 'array',
      title: 'Special Thanks',
      of: [{type: 'linkableLogo'}],
    }),
    // SEO overrides
    defineField({
      name: 'seo',
      type: 'seo',
      title: 'SEO',
      description: 'Overrides default SEO for this page',
    }),
  ],
  preview: {select: {title: 'title'}},
})
