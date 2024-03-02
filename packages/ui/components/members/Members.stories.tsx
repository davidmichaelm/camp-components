import { Meta, StoryObj } from "@storybook/react";
import { MemberContainer, MemberContainerProps } from "./MemberContainer";

const mockMembers = [
  {
    city: "Helenville",
    churchName: "St Peters",
  },
  {
    city: "La Crosse",
    churchName: "First",
  },
  {
    city: "Appleton",
    churchName: "Eternal Love",
  },
  {
    city: "Appleton",
    churchName: "Bethany",
  },
  {
    city: "Appleton",
    churchName: "Mt Olive",
  },
  {
    city: "Hartford",
    churchName: "Peace",
  },
];

const meta = {
  title: "Components/Members/MemberContainer",
  component: MemberContainer,
} satisfies Meta<typeof MemberContainer>;

export default meta;
type Story = StoryObj<MemberContainerProps>;

export const Default: Story = {
  args: {
    members: mockMembers,
  },
};
