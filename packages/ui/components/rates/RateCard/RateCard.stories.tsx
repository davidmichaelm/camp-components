import type { Meta, StoryObj } from '@storybook/react-vite';
import { RateCard, RateCardProps } from "..";

const meta = {
    title: "Components/RateCard",
    component: RateCard,
} satisfies Meta<typeof RateCard>;

export default meta;
type Story = StoryObj<RateCardProps>;

export const Default: Story = {
    args: {
        heading: "Campsites",
        rates: [
            { _type: "rate", name: "A sites", cost: "$22.00/family/night" },
            { _type: "rate", name: "B sites", cost: "$22.00/family/night" },
            { _type: "rate", name: "C sites", cost: "$22.00/family/night" },
        ],
    },
};

export const RateGroups: Story = {
    args: {
        heading: "Cabins",
        rates: [
            {
                _type: "rateGroup",
                name: "Family Cabins",
                childRates: [
                    {
                        _type: "rate",
                        name: "May - September",
                        cost: "$45.00/night",
                    },
                    {
                        _type: "rate",
                        name: "October - April",
                        cost: "$50.00/night",
                    },
                ],
            },
            {
                _type: "rate",
                name: "Quad Units",
                cost: "$60.00/night + \n $15/additional person over 4 people",
            },
            {
                _type: "rate",
                name: "Group prices",
                cost: "$15/person/night",
            },
        ],
    },
};

export const RateDescriptions: Story = {
    args: {
        heading: "Educational Field Trips (Schools)",
        rates: [
            {
                _type: "rateDescription",
                title: "Overnight Trip",
                text: "Included with this fee are 3 meals, 1 night lodging, and all programming.",
            },
            {
                _type: "rate",
                name: "Weekday (Mon-Thurs) trip",
                cost: "$735 for up to 15 guests\n$49/additional guest",
            },
            {
                _type: "rate",
                name: "High Ropes",
                cost: "$8/participant",
            },
            {
                _type: "rateDescription",
                title: "Food Service",
                text: "We prepare meals for 15 people at minimum.",
            },
            {
                _type: "rate",
                name: "Breakfast",
                cost: "$8/participant",
            },
            {
                _type: "rate",
                name: "Lunch",
                cost: "$8/participant",
            },
            {
                _type: "rate",
                name: "Dinner",
                cost: "$8/participant",
            },
        ],
    },
};
