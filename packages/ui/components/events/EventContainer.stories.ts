import React from "react";
import type { Meta, StoryObj } from '@storybook/react-vite';
import { EventContainer } from "./EventContainer";
import type { Event } from "@campphillip/api";

const meta = {
  title: "Components/Events/EventContainer",
  component: EventContainer,
} satisfies Meta<typeof EventContainer>;

export default meta;
type Story = StoryObj<typeof EventContainer>;

const sampleEvents: Event[] = [
    {
      buttons: [
          {
              _key: "0b9c57f616df",
              _type: "button",
              text: "Register",
              url: "https://campphillip.campintouch.com/ui/forms/application/person/App",
          },
      ],
      endDate: "2021-10-03T16:00:00.000Z",
      image: {
          _type: "image",
          asset: {
              _ref: "image-10f3f7d41ce4548ba73006fb6f5edc5ed7dd84c1-5184x3456-jpg",
              _type: "reference",
          },
      },
      name: "Fall Women's Retreat",
      shortDescription: [
          {
              _key: "d405e1b547b6",
              _type: "block",
              children: [
                  {
                      _key: "eca17ccbef70",
                      _type: "span",
                      marks: [],
                      text: "Ladies! It’s that time of year again: our Fall Women’s Retreat is coming up from October 1-3! Tell your friends. Tell your friends’ friends. Invite them to come for a weekend full of Bible study, relaxation in creation, laughs, friendships, and so much more! Click the link below to register before it’s too late!",
                  },
              ],
              markDefs: [],
              style: "normal",
          },
      ],
      startDate: "2021-10-01T12:00:00.000Z",
    } satisfies Event
];

export const Default: Story = {
    args: {
        events: sampleEvents,
    },
};

export const Empty: Story = {
    args: {
        events: [],
    },
};

export const Loading: Story = {
    args: {
        loading: true,
        // keep events so layout is visible while loading
        // events: sampleEvents,
    },
};

export const NoCalendar: Story = {
    args: {
        showCalendar: false,
        events: sampleEvents,
    },
};

export const CustomTitle: Story = {
    args: {
        title: "Upcoming Events — Summer 2025",
    },
};
