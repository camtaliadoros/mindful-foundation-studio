import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'thinkDifferentPage',
  title: 'Think Different Page',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Title',
      initialValue: 'Think Different',
      validation: (Rule) => Rule.required(),
    }),

    // Mission Statement
    defineField({
      name: 'missionStatement',
      type: 'text',
      title: 'Mission Statement',
      rows: 4,
      validation: (Rule) => Rule.required(),
    }),

    // Overview
    defineField({
      name: 'overviewHeadline',
      type: 'string',
      title: 'Overview Headline',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'overview',
      type: 'blockContent',
      title: 'Overview',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'overviewImage',
      type: 'image',
      title: 'Overview — Image',
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

    // Why It's Different
    defineField({
      name: 'whyDifferentTitle',
      type: 'string',
      title: "Why It's Different — Title",
      initialValue: "Why It's Different",
    }),
    defineField({
      name: 'whyDifferentDescription',
      type: 'blockContent',
      title: "Why It's Different — Description",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'whyDifferentApproachesTitle',
      type: 'string',
      title: 'Approaches Used — Title',
      initialValue: 'The course draws on:',
    }),
    defineField({
      name: 'whyDifferentApproaches',
      type: 'array',
      title: 'Approaches Used',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'title',
              type: 'string',
              title: 'Title',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'icon',
              type: 'image',
              title: 'Icon',
              options: {
                hotspot: true,
              },
            },
          ],
          preview: {
            select: {
              title: 'title',
              media: 'icon',
            },
          },
        },
      ],
      validation: (Rule) => Rule.min(1),
    }),

    // Course Structure
    defineField({
      name: 'courseStructureTitle',
      type: 'string',
      title: 'Course Structure — Title',
      initialValue: 'Course Structure',
    }),
    defineField({
      name: 'courseStructureDescription',
      type: 'blockContent',
      title: 'Course Structure — Description',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'modulesTitle',
      type: 'string',
      title: 'Modules — Title',
      initialValue: 'Modules include:',
    }),
    defineField({
      name: 'modules',
      type: 'array',
      title: 'Course Modules',
      of: [{type: 'module'}],
      validation: (Rule) => Rule.min(1),
    }),

    // Course Aims
    defineField({
      name: 'courseAimsTitle',
      type: 'string',
      title: 'Course Aims — Title',
      initialValue: 'Course Aims',
    }),
    defineField({
      name: 'courseAims',
      type: 'array',
      title: 'Course Aims',
      of: [{type: 'string'}],
      validation: (Rule) => Rule.min(1),
    }),

    defineField({
      name: 'courseAimsImage',
      type: 'image',
      title: 'Course Aims — Image',
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

    // Impact So Far
    defineField({
      name: 'impactTitle',
      type: 'string',
      title: 'Impact — Title',
      initialValue: 'Impact So Far',
    }),
    defineField({
      name: 'impactDescription',
      type: 'blockContent',
      title: 'Impact — Description',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'impactOutcomes',
      type: 'array',
      title: 'Measured Outcomes',
      of: [{type: 'string'}],
      validation: (Rule) => Rule.min(1),
    }),
    defineField({
      name: 'impactStories',
      type: 'blockContent',
      title: 'Impact Stories & Examples',
      validation: (Rule) => Rule.required(),
    }),

    // Training for Educators & Staff
    defineField({
      name: 'trainingTitle',
      type: 'string',
      title: 'Training — Title',
      initialValue: 'Training for Educators & Staff',
    }),
    defineField({
      name: 'trainingDescription',
      type: 'blockContent',
      title: 'Training — Description',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'trainingCoversTitle',
      type: 'string',
      title: 'Training Covers — Title',
      initialValue: 'Training covers:',
    }),
    defineField({
      name: 'trainingCovers',
      type: 'array',
      title: 'Training Covers',
      of: [{type: 'string'}],
      validation: (Rule) => Rule.min(1),
    }),
    defineField({
      name: 'trainingParticipantsReceiveTitle',
      type: 'string',
      title: 'Participants Receive — Title',
      initialValue: 'Participants receive:',
    }),
    defineField({
      name: 'trainingParticipantsReceive',
      type: 'array',
      title: 'Participants Receive',
      of: [{type: 'string'}],
      validation: (Rule) => Rule.min(1),
    }),
    defineField({
      name: 'trainingDelivery',
      type: 'text',
      title: 'Training Delivery',
      rows: 3,
      validation: (Rule) => Rule.required(),
    }),

    // Call to Action
    defineField({
      name: 'ctaTitle',
      type: 'string',
      title: 'Call to Action — Title',
      initialValue: 'Bring Think Different to your school, organisation, or community.',
    }),
    defineField({
      name: 'ctaButtons',
      type: 'array',
      title: 'CTA Buttons',
      of: [{type: 'cta'}],
      validation: (Rule) => Rule.min(1),
    }),

    // SEO
    defineField({
      name: 'seo',
      type: 'seo',
      title: 'SEO',
      description: 'Overrides default SEO for this page',
    }),
  ],
  preview: {select: {title: 'title'}},
})
