import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import TableTagColumn from "./TableTagColumn";

const meta: Meta<typeof TableTagColumn> = {
  title: "Molecules/List/TableTagColumn",
  component: TableTagColumn,
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof TableTagColumn>;

const options = [
  { value: "a", label: "Vàng", color: "#ffa82b", icon: <span>🥇</span> },
  { value: "b", label: "Bạc", color: "#c3c6c7", icon: <span>🥈</span> },
  { value: "c", label: "Đồng", color: "#cc8b61", icon: <span>🥉</span> },
  { value: "d", label: "Tham dự", color: "#87a8ff", icon: <span>🎖️</span> },
];

export const Default: Story = {
  args: {
    tags: ["a", "b", "c"],
    options,
  },
};

export const MultiTag: Story = {
  args: {
    tags: ["a", "b", "d", "c"],
    options,
    max: 3,
  },
};

export const NoTags: Story = {
  args: {
    tags: [],
  },
};
