import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import TableEmptyState from "./TableEmptyState";

const meta: Meta<typeof TableEmptyState> = {
  title: "Molecules/List/TableEmptyState",
  component: TableEmptyState,
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof TableEmptyState>;

export const Default: Story = {};

export const WithCustomIcon: Story = {
  args: {
    icon: "🏆",
    title: "Chưa có vận động viên",
    description: "Bắt đầu bằng cách thêm mới vận động viên vào danh sách.",
    action: <button className="bg-primary-600 text-white px-4 py-2 rounded">Thêm VĐV</button>,
  },
};

export const Minimal: Story = {
  args: {
    title: "Danh sách trống",
    icon: "📭",
    description: "",
  },
};
