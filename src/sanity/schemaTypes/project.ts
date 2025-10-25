import { defineField, defineType } from 'sanity';
import { IconPicker } from '../components/IconPicker';

export const project = defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'topImage',
      title: 'Top Image (Logo)',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'bottomImage',
      title: 'Bottom Image (Screenshot)',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'backgroundColor',
      title: 'Background Color',
      type: 'string',
      description: 'Hex color code or CSS gradient (e.g., #3AC9F7 or linear-gradient(#6e80ef, #61dfc7))',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'externalLink',
      title: 'External Link',
      type: 'url',
      description: 'Link to the live project',
    }),
    {
      name: 'technologies',
      title: 'Technologies Used',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'name',
              title: 'Technology Name',
              type: 'string',
              validation: (Rule: any) => Rule.required(),
            },
            {
              name: 'icon',
              title: 'Icon',
              type: 'string',
              description: 'Select a React Icon from the picker below',
              components: {
                input: IconPicker,
              },
              validation: (Rule: any) => Rule.required(),
            },
          ],
        },
      ],
    },
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Order in which project appears (lower numbers first)',
      validation: (Rule) => Rule.required().min(0),
    }),
    defineField({
      name: 'featured',
      title: 'Featured',
      type: 'boolean',
      description: 'Display on homepage',
      initialValue: true,
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
      media: 'bottomImage',
      order: 'order',
    },
    prepare(selection) {
      const { title, media, order } = selection;
      return {
        title: title,
        subtitle: `Order: ${order}`,
        media: media,
      };
    },
  },
});
