import type { Meta, StoryObj } from "@storybook/react";
import PaginationButton from "./PaginationButton";

const meta: Meta<typeof PaginationButton> = {
  title: "Atoms/PaginationButton",
  component: PaginationButton,
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof PaginationButton>;

export const Default: Story = {
  args: { children: "5" }
};
export const Active: Story = {
  args: { children: "4", active: true }
};
export const Disabled: Story = {
  args: { children: "9", disabled: true }
};
export const PrevNext: Story = {
  render: () => (
    <div className="flex gap-1">
      <PaginationButton variant="first" />
      <PaginationButton variant="prev" />
      <PaginationButton variant="page">1</PaginationButton>
      <PaginationButton variant="ellipsis" />
      <PaginationButton variant="page" active>5</PaginationButton>
      <PaginationButton variant="next" />
      <PaginationButton variant="last" />
    </div>
  )
};
