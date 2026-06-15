import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'contactPage',
  title: 'Contact Page',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Title',
      initialValue: 'Contact Us',
      validation: (Rule) => Rule.required(),
    }),
    // Header
    defineField({
      name: 'headerHeadline',
      type: 'string',
      title: 'Header Headline',
      initialValue: 'Contact Us',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'headerSubheadline',
      type: 'string',
      title: 'Header Subheadline',
      initialValue: "We'd love to hear from you.",
      validation: (Rule) => Rule.required(),
    }),
    // Body
    defineField({
      name: 'introText',
      type: 'text',
      rows: 3,
      title: 'Intro Text',
      description: 'Short paragraph shown to the left of the contact form.',
      initialValue:
        "Whether you're seeking support, looking to partner with us, or want to learn more about our work — reach out and we'll get back to you within 2–3 working days.",
    }),
    defineField({
      name: 'email',
      type: 'string',
      title: 'Contact Email Address',
      initialValue: 'info@themindfulfoundation.org',
      validation: (Rule) => Rule.required().email(),
    }),
    // Success message
    defineField({
      name: 'successHeading',
      type: 'string',
      title: 'Success Heading',
      description: 'Shown after the form is submitted successfully.',
      initialValue: 'Message sent',
    }),
    defineField({
      name: 'successMessage',
      type: 'text',
      rows: 2,
      title: 'Success Message',
      description: 'Body text shown after the form is submitted successfully.',
      initialValue: 'Thank you for reaching out. We aim to respond within 2-3 working days.',
    }),
    // SEO
    defineField({
      name: 'seo',
      type: 'object',
      title: 'SEO',
      fields: [
        defineField({
          name: 'title',
          type: 'string',
          title: 'Meta Title',
          validation: (Rule) => Rule.max(60),
        }),
        defineField({
          name: 'description',
          type: 'text',
          rows: 3,
          title: 'Meta Description',
          validation: (Rule) => Rule.max(160),
        }),
        defineField({
          name: 'keywords',
          type: 'array',
          title: 'Keywords',
          of: [{type: 'string'}],
          options: {layout: 'tags'},
        }),
        defineField({
          name: 'ogImage',
          type: 'image',
          title: 'Open Graph Image',
          options: {hotspot: true},
          fields: [
            defineField({
              name: 'asset',
              type: 'reference',
              to: [{type: 'sanity.imageAsset'}],
            }),
          ],
        }),
      ],
    }),
  ],
  preview: {
    select: {title: 'title'},
    prepare({title}) {
      return {title: title || 'Contact Page'}
    },
  },
})
