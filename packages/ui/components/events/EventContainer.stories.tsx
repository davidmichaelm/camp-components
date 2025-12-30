import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { EventContainer } from "./EventContainer";
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
            { name: "Spring Women's Retreat", startDate: "2024-03-15T12:00:00.000Z", endDate: "2024-03-17T16:00:00.000Z" },
            { name: "Fall Men's Retreat", startDate: "2024-09-20T12:00:00.000Z", endDate: "2024-09-22T16:00:00.000Z" },
            { name: "Fall Women's Retreat", startDate: "2024-10-18T12:00:00.000Z", endDate: "2024-10-20T16:00:00.000Z" },
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
            { name: "Spring Women's Retreat", startDate: "2024-03-15T12:00:00.000Z", endDate: "2024-03-17T16:00:00.000Z" },
            { name: "Fall Men's Retreat", startDate: "2024-09-20T12:00:00.000Z", endDate: "2024-09-22T16:00:00.000Z" },
            { name: "Fall Women's Retreat", startDate: "2024-10-18T12:00:00.000Z", endDate: "2024-10-20T16:00:00.000Z" },
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
            startDate: "2024-06-15T12:00:00.000Z",
            endDate: "2024-06-17T16:00:00.000Z",
        })],
        loading: false
    },
};

export const WithSummerCampEvents: Story = {
    args: {
        events: createMockEvents([
            { name: "Spring Women's Retreat", startDate: "2024-03-15T12:00:00.000Z", endDate: "2024-03-17T16:00:00.000Z" },
            { name: "Summer Camp Session 1", isSummerCampEvent: true, startDate: "2024-06-10T12:00:00.000Z", endDate: "2024-06-15T16:00:00.000Z" },
            { name: "Summer Camp Session 2", isSummerCampEvent: true, startDate: "2024-06-17T12:00:00.000Z", endDate: "2024-06-22T16:00:00.000Z" },
            { name: "Summer Camp Session 3", isSummerCampEvent: true, startDate: "2024-06-24T12:00:00.000Z", endDate: "2024-06-29T16:00:00.000Z" },
            { name: "Fall Men's Retreat", startDate: "2024-09-20T12:00:00.000Z", endDate: "2024-09-22T16:00:00.000Z" },
            { name: "Fall Women's Retreat", startDate: "2024-10-18T12:00:00.000Z", endDate: "2024-10-20T16:00:00.000Z" },
        ]),
        loading: false,
        groupSummerCampEvents: true
    },
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);

        // Verify summer camp group exists and has the correct title
        const summerCampTitle = await canvas.findByText("🏕️ Summer Camp");
        expect(summerCampTitle).toBeInTheDocument();

        // Find all event headings
        const allHeadings = await canvas.findAllByRole("heading");
        const eventNames = allHeadings.map(h => h.textContent).filter(name => name !== "What's going on at Camp?" && name !== "🏕️ Summer Camp");

        // Assert chronological order: Spring -> Summer Camp (grouped) -> Fall Men's -> Fall Women's
        // The three summer camp events should appear together after Spring and before Fall
        expect(eventNames).toEqual([
            "Spring Women's Retreat",
            "Summer Camp Session 1",
            "Summer Camp Session 2",
            "Summer Camp Session 3",
            "Fall Men's Retreat",
            "Fall Women's Retreat",
        ]);

        // Verify all summer camp events are within the summer camp group
        const summerCampGroup = summerCampTitle.closest('div');
        expect(summerCampGroup).toBeInTheDocument();

        const summerEventsInGroup = within(summerCampGroup!).getAllByRole("heading").filter(h => h.textContent?.includes("Summer Camp Session"));
        expect(summerEventsInGroup).toHaveLength(3);
    },
};

export const ScatteredSummerCampEvents: Story = {
    args: {
        events: createMockEvents([
            { name: "Spring Women's Retreat", startDate: "2024-03-15T12:00:00.000Z", endDate: "2024-03-17T16:00:00.000Z" },
            { name: "Summer Camp Session 1", isSummerCampEvent: true, startDate: "2024-06-10T12:00:00.000Z", endDate: "2024-06-15T16:00:00.000Z" },
            { name: "Family Camp Weekend", startDate: "2024-07-04T12:00:00.000Z", endDate: "2024-07-07T16:00:00.000Z" },
            { name: "Summer Camp Session 2", isSummerCampEvent: true, startDate: "2024-07-15T12:00:00.000Z", endDate: "2024-07-20T16:00:00.000Z" },
            { name: "Summer Camp Session 3", isSummerCampEvent: true, startDate: "2024-07-22T12:00:00.000Z", endDate: "2024-07-27T16:00:00.000Z" },
            { name: "Fall Men's Retreat", startDate: "2024-09-20T12:00:00.000Z", endDate: "2024-09-22T16:00:00.000Z" },
            { name: "Teen Adventure Camp", isSummerCampEvent: true, startDate: "2024-08-05T12:00:00.000Z", endDate: "2024-08-10T16:00:00.000Z" },
            { name: "Fall Women's Retreat", startDate: "2024-10-18T12:00:00.000Z", endDate: "2024-10-20T16:00:00.000Z" },
        ]),
        loading: false,
        groupSummerCampEvents: true
    },
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);

        // Verify summer camp group exists
        const summerCampTitle = await canvas.findByText("🏕️ Summer Camp");
        expect(summerCampTitle).toBeInTheDocument();

        // Find all event headings
        const allHeadings = await canvas.findAllByRole("heading");
        const eventNames = allHeadings.map(h => h.textContent).filter(name => name !== "What's going on at Camp?" && name !== "🏕️ Summer Camp");

        // Assert order: Spring -> All Summer Camp grouped at first summer camp position -> Family Camp -> Fall Men's -> Fall Women's
        // All 4 summer camp events should be grouped together at the position of the first summer camp event
        expect(eventNames).toEqual([
            "Spring Women's Retreat",
            "Summer Camp Session 1",
            "Summer Camp Session 2",
            "Summer Camp Session 3",
            "Teen Adventure Camp",
            "Family Camp Weekend",
            "Fall Men's Retreat",
            "Fall Women's Retreat",
        ]);

        // Verify all 4 summer camp events are within the summer camp group
        const summerCampGroup = summerCampTitle.closest('div');
        const summerEventsInGroup = within(summerCampGroup!).getAllByRole("heading").filter(h =>
            h.textContent?.includes("Summer Camp Session") || h.textContent?.includes("Teen Adventure Camp")
        );
        expect(summerEventsInGroup).toHaveLength(4);
    },
};

export const AllSummerCampEvents: Story = {
    args: {
        events: createMockEvents([
            { name: "Summer Camp Session 1", isSummerCampEvent: true, startDate: "2024-06-10T12:00:00.000Z", endDate: "2024-06-15T16:00:00.000Z" },
            { name: "Summer Camp Session 2", isSummerCampEvent: true, startDate: "2024-06-17T12:00:00.000Z", endDate: "2024-06-22T16:00:00.000Z" },
            { name: "Summer Camp Session 3", isSummerCampEvent: true, startDate: "2024-06-24T12:00:00.000Z", endDate: "2024-06-29T16:00:00.000Z" },
            { name: "Summer Camp Session 4", isSummerCampEvent: true, startDate: "2024-07-08T12:00:00.000Z", endDate: "2024-07-13T16:00:00.000Z" },
        ]),
        loading: false,
        groupSummerCampEvents: true
    },
    play: async ({ canvasElement }) => {
        const canvas = within(canvasElement);

        // Verify summer camp group exists
        const summerCampTitle = await canvas.findByText("🏕️ Summer Camp");
        expect(summerCampTitle).toBeInTheDocument();

        // Verify all 4 events are present
        const allHeadings = await canvas.findAllByRole("heading");
        const eventNames = allHeadings.map(h => h.textContent).filter(name => name !== "What's going on at Camp?" && name !== "🏕️ Summer Camp");

        expect(eventNames).toHaveLength(4);
        expect(eventNames).toEqual([
            "Summer Camp Session 1",
            "Summer Camp Session 2",
            "Summer Camp Session 3",
            "Summer Camp Session 4",
        ]);
    },
};
