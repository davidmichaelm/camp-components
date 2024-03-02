import { defineField, defineType } from "sanity";

export const city = defineType({
  title: "City",
  name: "city",
  type: "document",
  fields: [
    defineField({
      title: "City",
      name: "city",
      type: "string",
    }),
  ],
});

export const member = defineType({
  title: "Congregational Members",
  name: "member",
  type: "document",
  fields: [
    defineField({
      title: "City",
      name: "city",
      type: "reference",
      to: [{ type: "city" }],
    }),
    defineField({
      title: "Church Name",
      name: "churchName",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
  ],
});
