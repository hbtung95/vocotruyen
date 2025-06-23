import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import AvatarGroup from "./AvatarGroup";

const avatars = [
  { src: "/avatars/a1.png", alt: "Alice" },
  { src: "/avatars/a2.png", alt: "Bob" },
  { src: "/avatars/a3.png", alt: "Carol" },
  { src: "/avatars/a4.png", alt: "David" },
  { src: "/avatars/a5.png", alt: "Eve" },
  { src: "/avatars/a6.png", alt: "Frank" },
];

const meta: Meta<typeof AvatarGroup> = {
  title: "Molecules/User/AvatarGroup",
  component: AvatarGroup,
  args: { avatars },
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof AvatarGroup>;

export const Default: Story = {};

export const WithMaxVisible: Story = {
  args: { maxVisible: 3 },
};

export const CustomShowMoreLabel: Story = {
  args: {
    maxVisible: 3,
    showMoreLabel: (count: number) => <span className="text-primary-600">+{count} người</span>,
  },
};

export const LargeSize: Story = {
  args: { size: "lg", maxVisible: 4 },
};
