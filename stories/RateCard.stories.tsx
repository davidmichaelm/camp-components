import { Meta, StoryObj } from "@storybook/react";
import {
    RateCard,
    RateCardProps,
} from "../packages/Rates/components/RateCard/RateCard";

const meta = {
    title: "RateCard",
    component: RateCard,
}; // satisfies Meta<typeof RateCard>;

export default meta;
type Story = StoryObj<RateCardProps>;

export const Default: Story = {
    args: {
        heading: "Campsites",
        rates: [
            { type: "rate", name: "A sites", value: "$22.00/family/night" },
            { type: "rate", name: "B sites", value: "$22.00/family/night" },
            { type: "rate", name: "C sites", value: "$22.00/family/night" },
        ],
    },
};

export const RateGroups: Story = {
    args: {
        heading: "Cabins",
        rates: [
            {
                type: "rateGroup",
                title: "Family Cabins",
                rates: [
                    {
                        type: "rate",
                        name: "May - September",
                        value: "$45.00/night",
                    },
                    {
                        type: "rate",
                        name: "October - April",
                        value: "$50.00/night",
                    },
                ],
            },
            {
                type: "rate",
                name: "Quad Units",
                value: "$60.00/night + \n $15/additional person over 4 people",
            },
            {
                type: "rate",
                name: "Group prices",
                value: "$15/person/night",
            },
        ],
    },
};

export const RateDescriptions: Story = {
    args: {
        heading: "Educational Field Trips (Schools)",
        rates: [
            {
                type: "rateDescription",
                title: "Overnight Trip",
                text: "Included with this fee are 3 meals, 1 night lodging, and all programming.",
            },
            {
                type: "rate",
                name: "Weekday (Mon-Thurs) trip",
                value: "$735 for up to 15 guests\n$49/additional guest",
            },
            {
                type: "rate",
                name: "High Ropes",
                value: "$8/participant",
            },
            {
                type: "rateDescription",
                title: "Food Service",
                text: "We prepare meals for 15 people at minimum.",
            },
            {
                type: "rate",
                name: "Breakfast",
                value: "$8/participant",
            },
            {
                type: "rate",
                name: "Lunch",
                value: "$8/participant",
            },
            {
                type: "rate",
                name: "Dinner",
                value: "$8/participant",
            },
        ],
    },
};
