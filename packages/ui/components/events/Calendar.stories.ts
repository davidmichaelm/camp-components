import type { Meta, StoryObj } from '@storybook/react-vite';
import { Calendar } from "./Calendar";
import { createMockEvent, createMockEvents } from './mockEvents';

const meta = {
    title: "Components/Events/Calendar",
    component: Calendar,
} satisfies Meta<typeof Calendar>;

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
};

export const Loading: Story = {
    args: {
        events: null,
        loading: true,
    },
};

export const NoEvents: Story = {
    args: {
        events: [],
        loading: false,
    },
};

export const SingleEvent: Story = {
    args: {
        events: [createMockEvent({ name: "Featured Event" })],
    },
};
