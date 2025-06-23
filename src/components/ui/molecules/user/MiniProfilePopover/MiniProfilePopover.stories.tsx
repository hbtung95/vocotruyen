import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import MiniProfilePopover from "./MiniProfilePopover";

const meta: Meta<typeof MiniProfilePopover> = {
  title: "Molecules/User/MiniProfilePopover",
  component: MiniProfilePopover,
  tags: ["autodocs"],
  args: {
    avatar: "/avatars/kate.png",
    name: "Kate Lee",
    subtitle: "Moderator",
    email: "kate.lee@email.com",
  },
};
export default meta;

type Story = StoryObj<typeof MiniProfilePopover>;

export const Default: Story = {};

export const WithStatus: Story = {
  args: {
    status: "online",
  },
};

export const WithActions: Story = {
  args: {
    actions: (
      <button className="text-primary-600 text-xs px-3 py-1 rounded hover:bg-primary-50 transition">
        Xem hồ sơ
      </button>
    ),
  },
};

export const DarkMode: Story = {
  parameters: { backgrounds: { default: "dark" } },
  args: {
    status: "away",
    actions: (
      <button className="text-primary-400 text-xs">Nhắn tin</button>
    ),
  },
};
