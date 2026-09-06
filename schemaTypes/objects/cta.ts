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
      description: 'Optional - leave empty if you don\'t want a CTA',
    }),
    defineField({
      name: 'actionType',
      type: 'string',
      title: 'Action Type',
      options: {
        list: [
          {title: 'Internal Page', value: 'internal'},
          {title: 'Link to URL', value: 'url'},
          {title: 'Email Link', value: 'email'},
          {title: 'PDF Download', value: 'pdf'},
        ],
      },
      initialValue: 'internal',
      description: 'Optional - leave empty if you don\'t want a CTA',
    }),
    defineField({
      name: 'internalLink',
      type: 'reference',
      title: 'Page',
      description: 'The page on this site to link to.',
      hidden: ({parent}) => parent?.actionType !== 'internal',
      to: [
        {type: 'homepage'},
        {type: 'aboutPage'},
        {type: 'thinkDifferentPage'},
        {type: 'listenAppPage'},
        {type: 'perpetratorProgrammePage'},
        {type: 'blogPage'},
        {type: 'contactPage'},
        {type: 'donatePage'},
        {type: 'blogPost'},
      ],
      validation: (Rule) =>
        Rule.custom((value, context) => {
          const actionType = (context.parent as any)?.actionType
          const label = (context.parent as any)?.label
          if (label && actionType === 'internal' && !value) {
            return 'Please choose a page when action type is "Internal Page"'
          }
          return true
        }),
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
})
