import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import ListItemSkeleton from "./ListItemSkeleton";

const meta: Meta<typeof ListItemSkeleton> = {
  title: "Molecules/List/ListItemSkeleton",
  component: ListItemSkeleton,
  tags: ["autodocs"],
  args: {},
};
export default meta;

type Story = StoryObj<typeof ListItemSkeleton>;

export const Default: Story = {};

export const WithMultipleLines: Story = {
  args: { lines: 3 },
};

export const WithIconAndActions: Story = {
  args: { withIcon: true, actionsCount: 2, lines: 2 },
};

export const OnlyLabel: Story = {
  args: { withIcon: false, actionsCount: 0, lines: 1 },
};
