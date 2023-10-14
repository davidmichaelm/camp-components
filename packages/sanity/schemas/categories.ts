import { orderRankField } from "@sanity/orderable-document-list";
import { defineType } from "sanity";

export default defineType({
    title: "Category",
    name: "category",
    type: "document",
    fields: [
        {
            title: "Title",
            name: "title",
            type: "string",
            validation: (Rule) => Rule.required(),
        },
        {
            title: "Subtitle",
            name: "subtitle",
            type: "string",
            validation: (Rule) => Rule.required(),
        },
        {
            title: "Image",
            name: "image",
            type: "image",
            validation: (Rule) => Rule.required(),
        },
        {
            title: "URL",
            name: "url",
            type: "string",
            validation: (Rule) => Rule.required(),
        },
        orderRankField({ type: "rateCategory" }),
    ],
});
