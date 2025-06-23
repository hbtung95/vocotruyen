import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import ReorderHandle from "./ReorderHandle";

const meta: Meta<typeof ReorderHandle> = {
  title: "Molecules/List/ReorderHandle",
  component: ReorderHandle,
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof ReorderHandle>;

export const Default: Story = {};

export const CustomIcon: Story = {
  args: {
    icon: <span style={{ fontSize: "1.4em" }}>⋮⋮</span>,
    label: "Kéo di chuyển dòng",
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};
