import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import ListItem from "./ListItem";
import { Icon } from "@/components/ui/atoms/Icon";

const meta: Meta<typeof ListItem> = {
  title: "Molecules/List/ListItem",
  component: ListItem,
  tags: ["autodocs"],
  args: {
    label: "Thành viên Ban tổ chức",
    icon: <Icon name="user" size={18} />,
  },
};
export default meta;

type Story = StoryObj<typeof ListItem>;

export const Default: Story = {};

export const Selected: Story = {
  args: { selected: true },
};

export const WithDescription: Story = {
  args: { description: "Quản lý các vận động viên, chấm điểm..." },
};

export const Disabled: Story = {
  args: { disabled: true },
};

export const WithActions: Story = {
  args: {
    actions: <button className="text-xs text-blue-600">Chi tiết</button>,
  },
};
