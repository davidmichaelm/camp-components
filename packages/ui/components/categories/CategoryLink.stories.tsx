import type { Meta, StoryObj } from '@storybook/react-vite';
import { CategoryLink, CategoryLinkProps } from ".";

const meta = {
    title: "Components/Categories/CategoryLink",
    component: CategoryLink,
} satisfies Meta<typeof CategoryLink>;

export default meta;
type Story = StoryObj<CategoryLinkProps>;

export const Default: Story = {
    args: {
        title: "Summer Camp",
        subtitle: "Creative fun, Christian atmosphere",
        url: "https://www.campphillip.com/summer-programs",
        imageUrl:
            "https://d2114hmso7dut1.cloudfront.net/customers/096355b6-1a03-11eb-a9c3-0614187498c1/sites/096f9d4e-1a03-11eb-b2dd-0614187498c1/files/29441de0-f425-11ec-98b6-299307b20cc8/original/file.jpg?t=1656120104",
    },
};
