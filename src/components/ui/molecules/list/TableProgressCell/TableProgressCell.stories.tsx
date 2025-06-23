import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import TableProgressCell from "./TableProgressCell";

const meta: Meta<typeof TableProgressCell> = {
  title: "Molecules/List/TableProgressCell",
  component: TableProgressCell,
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof TableProgressCell>;

export const Bar: Story = {
  args: {
    value: 67,
    showLabel: true,
    barType: "line",
    tooltip: "Tiến độ hoàn thành",
  },
};

export const Circle: Story = {
  args: {
    value: 92,
    barType: "circle",
    showLabel: true,
    showIcon: false,
    tooltip: "Hoàn thành 92%",
  },
};

export const Completed: Story = {
  args: {
    value: 100,
    showIcon: true,
    tooltip: "Hoàn thành 100%",
  },
};

export const Error: Story = {
  args: {
    value: 55,
    error: true,
    tooltip: "Có lỗi khi xử lý",
  },
};
