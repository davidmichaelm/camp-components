import type { Meta, StoryObj } from '@storybook/react-vite';
import { within, expect } from 'storybook/test';
import { BoardEvents } from "./BoardEvents";
import { createMockEvent } from './mockEvents';

const meta = {
    title: "Components/Events/BoardEvents",
    component: BoardEvents,
} satisfies Meta<typeof BoardEvents>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        events: [createMockEvent()],
        loading: false,
    },
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);

        await expect(canvas.getByText('Upcoming Board Events')).toBeInTheDocument();
    },
};
