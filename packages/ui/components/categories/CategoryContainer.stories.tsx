import { Meta, StoryObj } from "@storybook/react";
import { CategoryContainer, CategoryContainerProps } from ".";
import { mockCategories } from "./Categories.mocks";

const meta = {
    title: "Components/Categories/CategoryContainer",
    component: CategoryContainer,
} satisfies Meta<typeof CategoryContainer>;

export default meta;
type Story = StoryObj<CategoryContainerProps>;

export const Default: Story = {
    args: {
        categories: mockCategories,
    },
};
