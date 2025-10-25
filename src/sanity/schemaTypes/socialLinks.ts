import { defineField, defineType } from 'sanity';

export const socialLinks = defineType({
  name: 'socialLinks',
  title: 'Social Links',
  type: 'document',
  fields: [
    defineField({
      name: 'platform',
      title: 'Platform',
      type: 'string',
      description: 'Social media platform name (e.g., GitHub, LinkedIn, Resume)',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'url',
      title: 'URL',
      type: 'url',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'icon',
      title: 'Icon Identifier',
      type: 'string',
      description: 'Ant Design icon identifier (e.g., GithubOutlined, LinkedinOutlined, FilePdfOutlined, CodeOutlined, MailOutlined)',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Order in which link appears (lower numbers first)',
      validation: (Rule) => Rule.required().min(0),
    }),
  ],
  orderings: [
    {
      title: 'Display Order',
      name: 'orderAsc',
      by: [{ field: 'order', direction: 'asc' }],
    },
  ],
  preview: {
    select: {
      title: 'platform',
      subtitle: 'url',
      order: 'order',
    },
    prepare(selection) {
      const { title, subtitle, order } = selection;
      return {
        title: title,
        subtitle: `${subtitle} (Order: ${order})`,
      };
    },
  },
});
