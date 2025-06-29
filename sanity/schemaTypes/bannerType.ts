import { InlineElementIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const bannerType = defineType({
  name: "banner",
  title: "Banner",
  type: "document",
  icon: InlineElementIcon,
  fields: [
    defineField({
      name: "name",
      title: "Banner Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "image",
      title: "Hero Image",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
  ],
  preview: {
    select: {
      title: "name",
      media: "image",
    },
    prepare(select) {
      return {
        title: select.title,
        media: select.media,
      };
    },
  },
});
