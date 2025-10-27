import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'CTABlock',
  title: 'CTA Block',
  type: 'document',
  fields: [
    defineField({
      name: 'callToActionTitle',
      type: 'string',
      title: 'Call to Action – Title',
      initialValue: 'Together, we can build safer futures.',
    }),
    defineField({
      name: 'primaryCta',
      type: 'cta',
      title: 'Primary CTA',
      description: 'e.g., Contact Us',
    }),
    defineField({
      name: 'secondaryCta',
      type: 'cta',
      title: 'Secondary CTA',
      description: 'e.g., Download Info Pack',
    }),
  ],
})
