import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'blogPost',
  title: 'Articles',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Article Title',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'headline',
      type: 'string',
      title: 'Headline',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'subheadline',
      type: 'string',
      title: 'Subheadline',
    }),
    defineField({
      name: 'featuredImage',
      type: 'image',
      title: 'Featured Image',
      options: {
        hotspot: true,
      },
      fields: [
        defineField({
          name: 'alt',
          type: 'string',
          title: 'Alternative Text',
          description: 'Important for SEO and accessibility.',
        }),
      ],
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'publishedAt',
      type: 'datetime',
      title: 'Published At',
      initialValue: () => new Date().toISOString(),
    }),
    defineField({
      name: 'excerpt',
      type: 'text',
      title: 'Excerpt',
      description: 'Short description for news listing and SEO',
      rows: 3,
    }),
    defineField({
      name: 'contentBlocks',
      type: 'array',
      title: 'Content Blocks',
      description: 'Add up to 3 content blocks with optional images between them',
      of: [
        {
          type: 'object',
          name: 'contentBlock',
          title: 'Content Block',
          fields: [
            defineField({
              name: 'content',
              type: 'blockContent',
              title: 'Content',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'image',
              type: 'image',
              title: 'Image (Optional)',
              options: {
                hotspot: true,
              },
              fields: [
                defineField({
                  name: 'alt',
                  type: 'string',
                  title: 'Alternative Text',
                  description: 'Important for SEO and accessibility.',
                }),
                defineField({
                  name: 'caption',
                  type: 'string',
                  title: 'Caption',
                }),
              ],
            }),
          ],
          preview: {
            select: {
              title: 'content',
              media: 'image',
            },
            prepare(selection) {
              const {title, media} = selection
              const block = (title || []).find((block: any) => block._type === 'block')
              return {
                title: block ? block.children[0]?.text : 'Content Block',
                media: media,
              }
            },
          },
        },
      ],
      validation: (Rule) => Rule.max(3),
    }),
    defineField({
      name: 'cta',
      type: 'reference',
      title: 'Call to Action (Optional)',
      description: 'Optional CTA at the end of the article. Select an existing CTA or create a new one.',
      to: [{type: 'articleCTA'}],
    }),
    defineField({
      name: 'seo',
      type: 'seo',
      title: 'SEO',
      description: 'Overrides default SEO for this article',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'headline',
      media: 'featuredImage',
    },
  },
  orderings: [
    {
      title: 'Published Date, New',
      name: 'publishedAtDesc',
      by: [{field: 'publishedAt', direction: 'desc'}],
    },
    {
      title: 'Published Date, Old',
      name: 'publishedAtAsc',
      by: [{field: 'publishedAt', direction: 'asc'}],
    },
  ],
})
