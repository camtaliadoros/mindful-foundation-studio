import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'listenAppPage',
  title: 'ListenApp Page',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Page Title',
      initialValue: 'ListenApp',
    }),
    defineField({
      name: 'headerHeadline',
      type: 'string',
      title: 'Header Headline',
      initialValue: 'ListenApp',
    }),
    defineField({
      name: 'headerSubheadline',
      type: 'string',
      title: 'Header Subheadline',
      initialValue: 'End Silence. Stop Violence.',
    }),
    defineField({
      name: 'whatItIsTitle',
      type: 'string',
      title: 'What It Is Title',
      initialValue: 'What It Is',
    }),
    defineField({
      name: 'whatItIs',
      type: 'blockContent',
      title: 'What It Is Content',
      description: 'Description of what ListenApp is and how it works',
    }),
    defineField({
      name: 'whyItMattersTitle',
      type: 'string',
      title: 'Why It Matters Title',
      initialValue: 'Why It Matters',
    }),
    defineField({
      name: 'whyItMatters',
      type: 'blockContent',
      title: 'Why It Matters Content',
      description: 'Explanation of why ListenApp is important',
    }),
    defineField({
      name: 'featuresTitle',
      type: 'string',
      title: 'Features Title',
      initialValue: 'Features',
    }),
    defineField({
      name: 'features',
      type: 'array',
      title: 'Features List',
      of: [
        {
          type: 'object',
          name: 'feature',
          title: 'Feature',
          fields: [
            defineField({
              name: 'title',
              type: 'string',
              title: 'Feature Title',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'description',
              type: 'text',
              title: 'Feature Description',
              validation: (Rule) => Rule.required(),
            }),
          ],
          preview: {
            select: {
              title: 'title',
              subtitle: 'description',
            },
          },
        },
      ],
    }),
    defineField({
      name: 'partnersTitle',
      type: 'string',
      title: 'Partners Title',
      initialValue: 'Our Partners',
    }),
    defineField({
      name: 'partners',
      type: 'blockContent',
      title: 'Partners Content',
      description: 'Information about ListenApp partners and supporters',
    }),
    defineField({
      name: 'listenAppPartners',
      type: 'reference',
      title: 'ListenApp Partners — Logo Section',
      to: [{type: 'logoSection'}],
      description: 'Select a logo section document for ListenApp partners',
    }),
    defineField({
      name: 'specialThanksTitle',
      type: 'string',
      title: 'Special Thanks Title',
      initialValue: 'Special Thanks',
    }),
    defineField({
      name: 'specialThanks',
      type: 'reference',
      title: 'Special Thanks — Logo Section',
      to: [{type: 'logoSection'}],
      description: 'Select a logo section document for special thanks',
    }),
    defineField({
      name: 'callToActionTitle',
      type: 'string',
      title: 'Call to Action Title',
      initialValue:
        'If your organisation supports victims of abuse, partner with us to make ListenApp available to those who need it most.',
    }),
    defineField({
      name: 'primaryCta',
      type: 'cta',
      title: 'Primary CTA',
      description: 'e.g., Get in Touch',
    }),
    defineField({
      name: 'secondaryCta',
      type: 'cta',
      title: 'Secondary CTA',
      description: 'e.g., Visit ListenApp Website',
    }),
    defineField({
      name: 'seo',
      type: 'seo',
      title: 'SEO',
      description: 'Overrides default SEO for this page',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'headerHeadline',
    },
  },
})
