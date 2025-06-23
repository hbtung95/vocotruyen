import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import ListItemAction from "./ListItemAction";
import { Icon } from "@/components/ui/atoms/Icon";

const meta: Meta<typeof ListItemAction> = {
  title: "Molecules/List/ListItemAction",
  component: ListItemAction,
  tags: ["autodocs"],
  args: {
    label: "Chấm điểm VĐV",
    icon: <Icon name="award" size={18} />,
    actions: <button className="text-xs px-2 py-1 bg-primary-600 text-white rounded">Chấm điểm</button>,
  },
};
export default meta;

type Story = StoryObj<typeof ListItemAction>;

export const Default: Story = {};

export const WithDescription: Story = {
  args: { description: "Dùng cho các trận chung kết" },
};

export const Disabled: Story = {
  args: { disabled: true },
};

export const Selected: Story = {
  args: { selected: true },
};

export const WithMenuAction: Story = {
  args: {
    actions: (
      <select className="text-xs border rounded px-1 py-0.5">
        <option>Chi tiết</option>
        <option>Chấm điểm</option>
        <option>Xóa</option>
      </select>
    ),
  },
};
