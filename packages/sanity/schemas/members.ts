import { Template, defineField, defineType } from "sanity";

export const city = defineType({
    title: "City",
    name: "city",
    type: "document",
    fields: [
        defineField({
            title: "City",
            name: "cityName",
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
            // @ts-ignore
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

export const memberByCityTemplate: Template<any, any> = {
    id: "member-by-city",
    title: "Congregational Member",
    schemaType: "member",
    //@ts-ignore
    parameters: [{ city: "cityId", type: "string" }],
    //@ts-ignore
    value: (params) => ({
        city: { _type: "reference", _ref: params.cityId },
    }),
};
