import { defineType } from "sanity";
import { BillIcon, StringIcon, TagIcon } from "@sanity/icons";
import { orderRankField } from "@sanity/orderable-document-list";

export const rateCategory = defineType({
    title: "Rates",
    name: "rateCategory",
    type: "document",
    fields: [
        {
            title: "Name",
            name: "name",
            type: "string",
            validation: (Rule) => Rule.required(),
        },
        {
            title: "Rates",
            name: "rates",
            type: "array",
            of: [
                { type: "rate" },
                { type: "rateGroup" },
                { type: "rateDescription" },
            ],
        },
        orderRankField({ type: "rateCategory" }),
    ],
});

export const rateGroup = defineType({
    title: "Rate Group",
    name: "rateGroup",
    type: "object",
    fields: [
        {
            title: "Name",
            name: "name",
            type: "string",
            validation: (Rule) => Rule.required(),
        },
        {
            title: "Child Rates",
            name: "childRates",
            type: "array",
            of: [{ type: "rate" }],
        },
    ],
    preview: {
        select: {
            name: "name",
            childRates: "childRates",
        },
        prepare({ name, childRates }) {
            const subtitle = childRates
                .map((rate: any) => {
                    return `${rate.name}: ${rate.cost}`;
                })
                .join(", ")
                .concat(childRates.length > 2 ? "..." : "");

            return {
                title: name,
                subtitle,
                media: BillIcon,
            };
        },
    },
});

export const rate = defineType({
    title: "Rate",
    name: "rate",
    type: "object",
    fields: [
        {
            title: "Name",
            name: "name",
            type: "string",
            validation: (Rule) => Rule.required(),
        },
        {
            title: "Detail (optional)",
            name: "detail",
            type: "string",
        },
        {
            title: "Cost",
            name: "cost",
            type: "string",
            validation: (Rule) => Rule.required(),
        },
    ],
    preview: {
        select: {
            title: "name",
            detail: "detail",
            subtitle: "cost",
        },
        prepare({ title, detail, subtitle }) {
            return {
                title,
                subtitle: detail ? `${detail} - ${subtitle}` : subtitle,
                media: TagIcon,
            };
        },
    },
});

export const rateDescription = defineType({
    title: "Rate Description",
    name: "rateDescription",
    type: "object",
    fields: [
        {
            title: "Title",
            name: "title",
            type: "string",
        },
        {
            title: "Description",
            name: "text",
            type: "string",
        },
    ],
    preview: {
        select: {
            title: "title",
            subtitle: "text",
        },
        prepare({ title, subtitle }) {
            return {
                title: title || subtitle,
                subtitle: title ? subtitle : null,
                media: StringIcon,
            };
        },
    },
});
