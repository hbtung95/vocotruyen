import type { Meta, StoryObj } from "@storybook/react";
import { Icon } from "./Icon";
import IconButton from "./variants/IconButton";

const meta: Meta<typeof Icon> = {
  title: "Atoms/Icon",
  component: Icon,
  tags: ["autodocs"],
  args: {
    name: "search",
    size: "md",
  },
};
export default meta;

type Story = StoryObj<typeof Icon>;

export const Search: Story = { args: { name: "search" } };
export const User: Story = { args: { name: "user" } };
export const Large: Story = { args: { name: "check", size: 40 } };
export const Color: Story = { args: { name: "x", color: "#e53e3e" } };
export const AsButton = () => (
  <IconButton name="x" aria-label="Đóng" color="#e53e3e" onClick={() => alert("Clicked!")} />
);
