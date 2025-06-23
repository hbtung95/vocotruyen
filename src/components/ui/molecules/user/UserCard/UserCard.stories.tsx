// src/components/ui/molecules/user/UserCard/UserCard.stories.tsx
import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import UserCard from "./UserCard";

const meta: Meta<typeof UserCard> = {
  title: "Molecules/User/UserCard",
  component: UserCard,
  tags: ["autodocs"],
  args: {
    avatar: "/avatars/john.png",
    name: "John Doe",
    subtitle: "Admin hệ thống",
  },
};
export default meta;

type Story = StoryObj<typeof UserCard>;

export const Default: Story = { };

export const WithStatus: Story = {
  args: {
    status: "online",
  },
};

export const WithActions: Story = {
  args: {
    actions: <button className="text-primary-600 font-medium">Chi tiết</button>,
  },
};

export const DarkMode: Story = {
  parameters: { backgrounds: { default: "dark" } },
  args: {
    status: "busy",
    actions: <button className="text-primary-400">Edit</button>,
  },
};
