import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import TableStatsWidget from "./TableStatsWidget";

const meta: Meta<typeof TableStatsWidget> = {
  title: "Molecules/List/TableStatsWidget",
  component: TableStatsWidget,
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof TableStatsWidget>;

const stats = [
  { key: "total", label: "Tổng số dòng", value: 127, icon: <span>📋</span> },
  { key: "avg", label: "Điểm TB", value: 8.14, icon: <span>⭐</span>, color: "#ffaa33" },
  { key: "pass", label: "% Đạt", value: "87%", icon: <span>✅</span>, color: "#31ba63" },
];

export const Default: Story = {
  args: {
    stats,
  },
};

export const Loading: Story = {
  args: {
    stats,
    loading: true,
  },
};
