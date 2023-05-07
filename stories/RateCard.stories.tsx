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
        ...Default.args,
        rateTable: [{ type: "rateGroup", title: "Family Cabins", rates: [] }],
    },
};
