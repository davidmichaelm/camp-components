import { defineType } from "sanity";

export default defineType({
    title: "Event",
    name: "event",
    type: "document",
    fields: [
        {
            title: "Name",
            name: "name",
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
            title: "Start Date",
            name: "startDate",
            type: "datetime",
            validation: (Rule) => Rule.required(),
        },
        {
            title: "End Date",
            name: "endDate",
            type: "datetime",
            validation: (Rule) =>
                Rule.required().min(Rule.valueOfField("startDate")),
        },
        {
            title: "Short Description",
            name: "shortDescription",
            type: "array",
            of: [{ type: "block" }],
            validation: (Rule) => Rule.required(),
        },
        {
            title: "Buttons",
            name: "buttons",
            type: "array",
            of: [{ type: "button" }],
            validation: (Rule) => Rule.min(1).max(2),
        },
    ],
});
