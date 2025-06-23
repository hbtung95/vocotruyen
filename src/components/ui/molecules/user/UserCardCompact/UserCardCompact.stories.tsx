import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import UserCardCompact from "./UserCardCompact";

const meta: Meta<typeof UserCardCompact> = {
  title: "Molecules/User/UserCardCompact",
  component: UserCardCompact,
  tags: ["autodocs"],
  args: {
    avatar: "/avatars/anna.png",
    name: "Anna Nguyen",
    subtitle: "Member",
  },
};
export default meta;

type Story = StoryObj<typeof UserCardCompact>;

export const Default: Story = {};

export const WithStatus: Story = {
  args: {
    status: "away",
  },
};

export const WithActions: Story = {
  args: {
    actions: <button className="text-primary-600 text-xs">Chi tiết</button>,
  },
};

export const DarkMode: Story = {
  parameters: { backgrounds: { default: "dark" } },
  args: {
    status: "offline",
    actions: <button className="text-primary-400 text-xs">Edit</button>,
  },
};
