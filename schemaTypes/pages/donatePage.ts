import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'donatePage',
  title: 'Donate Page',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Title',
      description: 'Internal title (not shown on the page).',
      initialValue: 'Donate Page',
      validation: (Rule) => Rule.required(),
    }),
    // Header
    defineField({
      name: 'headerHeadline',
      type: 'string',
      title: 'Header Headline',
      initialValue: 'Support our work',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'headerSubheadline',
      type: 'string',
      title: 'Header Subheadline',
      initialValue: 'Every donation helps prevent harm and heal futures.',
      validation: (Rule) => Rule.required(),
    }),
    // Body
    defineField({
      name: 'body',
      type: 'blockContent',
      title: 'Body Content',
      description: 'The main text shown above the donation button/embed.',
    }),
    // Payment
    defineField({
      name: 'paymentMode',
      type: 'string',
      title: 'Payment Mode',
      description:
        'Choose how visitors donate: a button that links to Stripe, or an embedded Stripe payment form on the page.',
      options: {
        list: [
          {title: 'Button linking to Stripe', value: 'link'},
          {title: 'Embedded Stripe payment form', value: 'embed'},
        ],
        layout: 'radio',
      },
      initialValue: 'link',
      validation: (Rule) => Rule.required(),
    }),
    // Link mode
    defineField({
      name: 'donateUrl',
      type: 'url',
      title: 'Stripe Donation Link',
      description: 'The Stripe payment link (e.g. https://donate.stripe.com/...).',
      hidden: ({parent}) => parent?.paymentMode === 'embed',
    }),
    defineField({
      name: 'buttonLabel',
      type: 'string',
      title: 'Button Label',
      initialValue: 'Donate Now',
      hidden: ({parent}) => parent?.paymentMode === 'embed',
    }),
    // Embed mode
    defineField({
      name: 'stripePublishableKey',
      type: 'string',
      title: 'Stripe Publishable Key',
      description: 'From the Stripe Dashboard — starts with "pk_live_" (safe to expose).',
      hidden: ({parent}) => parent?.paymentMode !== 'embed',
    }),
    defineField({
      name: 'stripeBuyButtonId',
      type: 'string',
      title: 'Stripe Buy Button ID',
      description: 'From the Stripe Dashboard Buy Button — starts with "buy_btn_".',
      hidden: ({parent}) => parent?.paymentMode !== 'embed',
    }),
    defineField({
      name: 'securePaymentNote',
      type: 'text',
      rows: 2,
      title: 'Secure Payment Note',
      description: 'Small reassurance text shown beneath the donation button/embed.',
      initialValue:
        'Donations are processed securely by Stripe. You will be taken to Stripe’s secure checkout to complete your gift.',
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
        }),
      ],
    }),
  ],
  preview: {
    select: {title: 'title'},
    prepare({title}) {
      return {title: title || 'Donate Page'}
    },
  },
})
