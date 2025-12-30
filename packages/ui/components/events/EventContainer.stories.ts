import type { Meta, StoryObj } from '@storybook/react-vite';
import { EventContainer } from "./EventContainer";
import type { Event } from "@campphillip/api";
import { expect, within } from 'storybook/test';
import { createMockEvent, createMockEvents } from './mockEvents';

const meta = {
    title: "Components/Events/EventContainer",
    component: EventContainer,
} satisfies Meta<typeof EventContainer>;

export default meta;
type Story = StoryObj<typeof meta>;



export const Default: Story = {
    args: {
        events: createMockEvents([
            { name: "Spring Women's Retreat" },
            { name: "Fall Men's Retreat" },
            { name: "Fall Women's Retreat" },
        ]),
        loading: false,
    },
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);

        await canvas.findByRole("heading", { name: "Spring Women's Retreat" });
        await canvas.findByRole("heading", { name: "Fall Men's Retreat" });
        await canvas.findByRole("heading", { name: "Fall Women's Retreat" });
        expect(await canvas.findAllByRole("link", { name: "Register" })).toHaveLength(3);

    },
};

export const Loading: Story = {
    args: {
        events: createMockEvents([
            { name: "Spring Women's Retreat" },
            { name: "Fall Men's Retreat" },
            { name: "Fall Women's Retreat" },
        ]),
        loading: true,
    },
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);

        expect(canvas.queryByRole("heading", { name: "Spring Women's Retreat" })).toBeNull();
        expect(canvas.queryByRole("heading", { name: "Fall Men's Retreat" })).toBeNull();
        expect(canvas.queryByRole("heading", { name: "Fall Women's Retreat" })).toBeNull();
        expect(canvas.queryByRole("link", { name: "Register" })).toBeNull();
    },
};

export const Empty: Story = {
    args: {
        events: [],
        loading: false,
    },
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);
        await canvas.findByText("No upcoming events. Check back later!");
    },
};

export const SingleEvent: Story = {
    args: {
        events: [createMockEvent({
            name: "Custom Single Event",
        })],
        loading: false
    },
};
