import type { Meta, StoryObj } from '@storybook/react-vite';

import { EventCard } from "./EventCard";

const meta = {
    title: "Components/EventCard",
    component: EventCard,
} satisfies Meta<typeof EventCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
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
  }
}
