import { defineField, defineType } from "sanity";

export const postType = defineType({
  name: "post",
  title: "Post",
  type: "document",
  fields: [
    defineField({
      name: "title",
      type: "string",
      validation: (rule) =>
        rule.required().error("Required to generate a page on the website"),
    }),
    defineField({
      name: "slug",
      type: "slug",
      options: { source: "title" },
    }),
    defineField({
      name: "author",
      type: "string",
    }),
    defineField({
      name: "pubdate",
      type: "datetime",
    }),
    defineField({
      name: "main_image",
      type: "image",
    }),
    defineField({
      name: "details",
      type: "array",
      of: [{ type: "block" }],
    }),
  ],
});
