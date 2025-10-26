import { defineField, defineType } from 'sanity';

export const experience = defineType({
  name: 'experience',
  title: 'Experience',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Company Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'logo',
      title: 'Company Logo',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'orgLink',
      title: 'Company Website',
      type: 'url',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'duration',
      title: 'Duration',
      type: 'string',
      description: 'e.g., "Feb 2023 - Present" or "Sep 2021 - Oct 2021"',
      validation: (Rule) => Rule.required(),
    }),
    {
      name: 'descList',
      title: 'Description List',
      type: 'array',
      of: [{ type: 'text' }],
      description: 'List of responsibilities and achievements',
      validation: (Rule: any) => Rule.required().min(1),
    },
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Order in which experience appears (lower numbers first)',
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
      title: 'title',
      subtitle: 'duration',
      media: 'logo',
      order: 'order',
    },
    prepare(selection) {
      const { title, subtitle, media, order } = selection;
      return {
        title: title,
        subtitle: `${subtitle} (Order: ${order})`,
        media: media,
      };
    },
  },
});
