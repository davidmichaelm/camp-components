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
        rateTable: [
            { type: "rate", name: "A sites", value: "$22.00/family/night" },
            { type: "rate", name: "B sites", value: "$22.00/family/night" },
            { type: "rate", name: "C sites", value: "$22.00/family/night" },
        ],
    },
};

export const RateGroups: Story = {
    args: {
        heading: "Cabins",
        rateTable: [
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
