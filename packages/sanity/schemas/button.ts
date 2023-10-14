import { defineType } from "sanity";

export default defineType({
    title: "Button",
    name: "button",
    type: "object",
    fields: [
        {
            title: "Text",
            name: "text",
            type: "string",
        },
        {
            title: "URL",
            name: "url",
            type: "string",
        },
    ],
});
