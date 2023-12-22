import { defineField, defineType } from "sanity";

const eventFields = [
    defineField({
        title: "Name",
        name: "name",
        type: "string",
        validation: (Rule) => Rule.required(),
    }),
    defineField({
        title: "Image",
        name: "image",
        type: "image",
        validation: (Rule) => Rule.required(),
    }),
    defineField({
        title: "Image Type",
        name: "imageType",
        type: "string",
        options: {
            list: [
                { title: "Default", value: "default" },
                { title: "Square", value: "square" },
            ],
            layout: "radio",
        },
    }),
    defineField({
        title: "Start Date",
        name: "startDate",
        type: "datetime",
        validation: (Rule) => Rule.required(),
    }),
    defineField({
        title: "End Date",
        name: "endDate",
        type: "datetime",
        validation: (Rule) =>
            Rule.required().min(Rule.valueOfField("startDate")),
    }),
    defineField({
        title: "Short Description",
        name: "shortDescription",
        type: "array",
        of: [{ type: "block" }],
        validation: (Rule) => Rule.required(),
    }),
    defineField({
        title: "Buttons",
        name: "buttons",
        type: "array",
        of: [{ type: "button" }],
        validation: (Rule) => Rule.min(1).max(2),
    }),
];

export const events = defineType({
    title: "Event",
    name: "event",
    type: "document",
    fields: eventFields,
    initialValue: {
        imageType: "default",
    },
});

export const boardEvents = defineType({
    title: "Board Event",
    name: "board-event",
    type: "document",
    fields: eventFields,
});
