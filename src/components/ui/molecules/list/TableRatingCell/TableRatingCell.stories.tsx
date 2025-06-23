import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import TableRatingCell from "./TableRatingCell";

const meta: Meta<typeof TableRatingCell> = {
  title: "Molecules/List/TableRatingCell",
  component: TableRatingCell,
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof TableRatingCell>;

export const Default: Story = {
  args: {
    value: 4,
    max: 5,
    showValue: true,
    tooltip: "Đánh giá người dùng",
  },
};

export const CustomMax: Story = {
  args: {
    value: 8,
    max: 10,
    showValue: true,
    highlight: true,
  },
};

export const Disabled: Story = {
  args: {
    value: 3,
    disabled: true,
    showValue: true,
    tooltip: "Đã khoá đánh giá",
  },
};

export const Bold: Story = {
  args: {
    value: 5,
    bold: true,
    tooltip: "Điểm tuyệt đối",
  },
};
