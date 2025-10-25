import { defineField, defineType } from 'sanity';

export const siteSettings = defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    defineField({
      name: 'footerCopyright',
      title: 'Footer Copyright Text',
      type: 'string',
      description: 'Copyright text displayed in footer (e.g., "© 2023 All Rights Reserved.")',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'siteTitle',
      title: 'Site Title',
      type: 'string',
      description: 'Main site title for SEO',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'siteDescription',
      title: 'Site Description',
      type: 'text',
      rows: 3,
      description: 'Site description for SEO meta tags',
      validation: (Rule) => Rule.required().max(160),
    }),
  ],
  preview: {
    select: {
      title: 'siteTitle',
    },
    prepare(selection) {
      return {
        title: 'Site Settings',
        subtitle: selection.title,
      };
    },
  },
});
