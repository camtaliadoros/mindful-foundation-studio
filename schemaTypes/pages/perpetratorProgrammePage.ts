import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'perpetratorProgrammePage',
  title: 'Perpetrator Programme Page',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Page Title',
      initialValue: 'Perpetrator Programme',
    }),
    defineField({
      name: 'headerHeadline',
      type: 'string',
      title: 'Header Headline',
      initialValue: 'Perpetrator Programme',
    }),
    defineField({
      name: 'headerSubheadline',
      type: 'string',
      title: 'Header Subheadline',
      initialValue: 'Own the past. Change the future.',
    }),
    defineField({
      name: 'whyItsNeededTitle',
      type: 'string',
      title: "Why It's Needed Title",
      initialValue: "Why It's Needed",
    }),
    defineField({
      name: 'whyItsNeeded',
      type: 'blockContent',
      title: "Why It's Needed Content",
      description: 'Explanation of why the perpetrator programme is needed',
    }),
    defineField({
      name: 'ourApproachTitle',
      type: 'string',
      title: 'Our Approach Title',
      initialValue: 'Our Approach',
    }),
    defineField({
      name: 'ourApproach',
      type: 'blockContent',
      title: 'Our Approach Content',
      description: 'Description of the programme approach and methodology',
    }),
    defineField({
      name: 'whatTheProgrammeProvidesTitle',
      type: 'string',
      title: 'What the Programme Provides Title',
      initialValue: 'What the Programme Provides',
    }),
    defineField({
      name: 'whatTheProgrammeProvides',
      type: 'array',
      title: 'Programme Features List',
      of: [
        {
          type: 'object',
          name: 'programmeFeature',
          title: 'Programme Feature',
          fields: [
            defineField({
              name: 'title',
              type: 'string',
              title: 'Feature Title',
              validation: (Rule) => Rule.required(),
            }),
          ],
          preview: {
            select: {
              title: 'title',
            },
          },
        },
      ],
    }),
    defineField({
      name: 'outcomesTitle',
      type: 'string',
      title: 'Outcomes Title',
      initialValue: 'Outcomes',
    }),
    defineField({
      name: 'outcomes',
      type: 'blockContent',
      title: 'Outcomes Content',
      description: 'Description of programme outcomes and impact',
    }),
    defineField({
      name: 'expansionTitle',
      type: 'string',
      title: 'Expansion Title',
      initialValue: 'Expansion',
    }),
    defineField({
      name: 'expansion',
      type: 'blockContent',
      title: 'Expansion Content',
      description: 'Information about programme expansion and partnerships',
    }),
    defineField({
      name: 'callToActionTitle',
      type: 'string',
      title: 'Call to Action Title',
      initialValue: 'Want to support or collaborate on this vital work?',
    }),
    defineField({
      name: 'primaryCta',
      type: 'cta',
      title: 'Primary CTA',
      description: 'e.g., Contact Us',
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
