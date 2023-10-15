import React from "react";

const ColorIcon = () => <span style={{ fontWeight: "bold" }}>C</span>;

const Color = (props: any) => {
    return <span style={{ color: props.hex }}>{props.children}</span>;
};

// TODO: Use defineType here. Blocked because there is no type def for blocks
export default {
    title: "Banner",
    name: "banner",
    type: "document",
    fields: [
        {
            title: "Name",
            name: "name",
            type: "string",
            validation: (Rule: any) => Rule.required(),
        },
        {
            title: "Image",
            name: "image",
            type: "image",
            validation: (Rule: any) => Rule.required(),
            description: "Suggested size: 1440x375px",
        },
        {
            title: "URL",
            name: "url",
            type: "string",
        },
        {
            title: "Text",
            name: "text",
            type: "array",
            of: [
                {
                    type: "block",
                    marks: {
                        annotations: [
                            {
                                name: "color",
                                title: "Color",
                                value: "color",
                                type: "color",
                                icon: ColorIcon,
                                component: Color,
                            },
                            {
                                name: "link",
                                type: "object",
                                title: "External link",
                                fields: [
                                    {
                                        name: "href",
                                        type: "url",
                                        title: "URL",
                                    },
                                ],
                            },
                        ],
                    },
                },
            ],
        },
    ],
};
