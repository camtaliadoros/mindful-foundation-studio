import {defineField, defineType} from 'sanity'

// Note: the document type is `blogPage` (not `newsPage`) because that is the
// type the live content was authored under, and what the website queries.
export default defineType({
  name: 'blogPage',
  title: 'News Page',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Page Title',
      initialValue: 'News',
    }),
    defineField({
      name: 'headerHeadline',
      type: 'string',
      title: 'Header Headline',
      initialValue: 'News',
    }),
    defineField({
      name: 'headerSubheadline',
      type: 'string',
      title: 'Header Subheadline',
      initialValue: 'Insights, updates, and stories from The Mindful Foundation',
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
