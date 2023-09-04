import { Meta, StoryObj } from "@storybook/react";
import { CategoryContainer, CategoryLink, CategoryLinkProps } from ".";

const meta = {
    title: "CategoryLink",
    component: CategoryLink,
}; // satisfies Meta<typeof CategoryLink>;

export default meta;
type Story = StoryObj<CategoryLinkProps>;

export const Default: Story = {
    args: {
        title: "test",
        subtitle: "test",
        href: "test",
        imageLink: "test",
    },
};
