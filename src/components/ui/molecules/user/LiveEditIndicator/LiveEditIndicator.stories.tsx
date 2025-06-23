import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import LiveEditIndicator from "./LiveEditIndicator";

const users = [
  { id: 1, name: "Alice", avatar: "/avatars/alice.png", color: "#F87171" },
  { id: 2, name: "Bob", avatar: "/avatars/bob.png", color: "#60A5FA" },
  { id: 3, name: "Cindy", avatar: "/avatars/cindy.png", color: "#FBBF24" },
  { id: 4, name: "David", avatar: "/avatars/david.png", color: "#10B981" },
];

const meta: Meta<typeof LiveEditIndicator> = {
  title: "Molecules/User/LiveEditIndicator",
  component: LiveEditIndicator,
  args: { users },
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof LiveEditIndicator>;

export const Default: Story = {};

export const ManyUsers: Story = {
  args: { users, maxVisible: 2 },
};

export const NoUsers: Story = {
  args: { users: [] },
};

export const CustomTooltip: Story = {
  args: {
    tooltip: "Hiện có 4 người đang cùng chỉnh sửa",
  },
};
