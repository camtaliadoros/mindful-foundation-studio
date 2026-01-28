import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'articleCTA',
  title: 'Article CTA',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Title',
      description: 'Internal title for this CTA (for CMS organization)',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'label',
      type: 'string',
      title: 'Button Label',
      description: 'Text displayed on the button',
    }),
    defineField({
      name: 'actionType',
      type: 'string',
      title: 'Action Type',
      options: {
        list: [
          {title: 'Link to URL', value: 'url'},
          {title: 'Email Link', value: 'email'},
          {title: 'PDF Download', value: 'pdf'},
        ],
      },
      initialValue: 'url',
    }),
    defineField({
      name: 'href',
      type: 'url',
      title: 'URL',
      hidden: ({parent}) => parent?.actionType !== 'url',
      validation: (Rule) =>
        Rule.custom((value, context) => {
          const actionType = (context.parent as any)?.actionType
          const label = (context.parent as any)?.label
          // Only validate if label is provided (meaning CTA is being used)
          if (label && actionType === 'url' && !value) {
            return 'URL is required when action type is "Link to URL"'
          }
          return true
        }),
    }),
    defineField({
      name: 'email',
      type: 'email',
      title: 'Email Address',
      hidden: ({parent}) => parent?.actionType !== 'email',
      validation: (Rule) =>
        Rule.custom((value, context) => {
          const actionType = (context.parent as any)?.actionType
          const label = (context.parent as any)?.label
          // Only validate if label is provided (meaning CTA is being used)
          if (label && actionType === 'email' && !value) {
            return 'Email address is required when action type is "Email Link"'
          }
          return true
        }),
    }),
    defineField({
      name: 'pdf',
      type: 'file',
      title: 'PDF File',
      options: {
        accept: '.pdf',
      },
      hidden: ({parent}) => parent?.actionType !== 'pdf',
      validation: (Rule) =>
        Rule.custom((value, context) => {
          const actionType = (context.parent as any)?.actionType
          const label = (context.parent as any)?.label
          // Only validate if label is provided (meaning CTA is being used)
          if (label && actionType === 'pdf' && !value) {
            return 'PDF file is required when action type is "PDF Download"'
          }
          return true
        }),
    }),
    defineField({
      name: 'style',
      type: 'string',
      title: 'Style',
      options: {list: ['primary', 'secondary', 'link']},
      initialValue: 'primary',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      label: 'label',
      actionType: 'actionType',
    },
    prepare({title, label, actionType}) {
      return {
        title: title || 'Untitled Article CTA',
        subtitle: label
          ? `${label} (${actionType || 'url'})`
          : 'No label set',
      }
    },
  },
})
