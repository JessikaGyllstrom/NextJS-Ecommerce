import { ImageIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const heroType = defineType({
  name: "hero",
  title: "Hero",
  type: "document",
  icon: ImageIcon,
  fields: [
    defineField({
      name: "name",
      title: "Hero Name",
      type: "string",
      validation: (Rule) => Rule.required().min(0),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "blockContent",
      validation: (Rule) => Rule.required().min(0),
    }),
    defineField({
      name: "image",
      title: "Hero Image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "heroIcon",
      title: "Hero Icon",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
  ],
  preview: {
    select: {
      title: "name",
      description: "description",
      media: "image",
    },
    prepare(select) {
      return {
        title: select.title,
        subtitle: select.description,
        media: select.media,
      };
    },
  },
});
