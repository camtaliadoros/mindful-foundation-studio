import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'cta',
  title: 'Call To Action',
  type: 'object',
  fields: [
    defineField({
      name: 'label',
      type: 'string',
      title: 'Label',
      validation: (Rule) => Rule.required(),
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
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'href',
      type: 'url',
      title: 'URL',
      hidden: ({parent}) => parent?.actionType !== 'url',
      validation: (Rule) =>
        Rule.custom((value, context) => {
          const actionType = (context.parent as any)?.actionType
          if (actionType === 'url' && !value) {
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
          if (actionType === 'email' && !value) {
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
          if (actionType === 'pdf' && !value) {
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
})
