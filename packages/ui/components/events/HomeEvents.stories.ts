import type { Meta, StoryObj } from '@storybook/react-vite';
import { within, expect } from 'storybook/test';
import { HomeEvents } from "./HomeEvents";
import { createMockEvents } from './mockEvents';

const meta = {
    title: "Components/Events/HomeEvents",
    component: HomeEvents,
} satisfies Meta<typeof HomeEvents>;

export default meta;
type Story = StoryObj<typeof meta>;



export const Default: Story = {
    args: {
        events: createMockEvents([
            { name: "Fall Women's Retreat" },
            { name: "Fall Men's Retreat" },
            { name: "Spring Women's Retreat" },
            { name: "Youth Summer Camp" },
            { name: "Family Fun Day" },
        ]),
    },
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);

        await canvas.findByRole("heading", { name: "What's going on at Camp?" });
        await canvas.findByRole("link", { name: /check out our calendar/i });
        await canvas.findByText("Fall Women's Retreat");
        await canvas.findByText("Fall Men's Retreat");
    },
};

export const Loading: Story = {
    args: {
        events: null,
        loading: true,
    },
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);

        await canvas.findByRole("heading", { name: "What's going on at Camp?" });
        await canvas.findByRole("link", { name: /check out our calendar/i });
        await expect(canvas.queryByText("Fall Women's Retreat")).not.toBeInTheDocument();
        await expect(canvas.queryByText("Fall Men's Retreat")).not.toBeInTheDocument();
    },
};

export const NoEvents: Story = {
    args: {
        events: [],
        loading: false,
    },
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);

        await canvas.findByRole("heading", { name: "What's going on at Camp?" });
        await canvas.findByRole("link", { name: /check out our calendar/i });
    },
};
