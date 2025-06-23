import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import TablePercentCell from "./TablePercentCell";

const meta: Meta<typeof TablePercentCell> = {
  title: "Molecules/List/TablePercentCell",
  component: TablePercentCell,
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof TablePercentCell>;

export const Default: Story = {
  args: {
    value: 45.7,
    showLabel: true,
    showBar: false,
    tooltip: "Tỷ lệ hoàn thành",
  },
};

export const WithBar: Story = {
  args: {
    value: 76.8,
    showBar: true,
    highlight: true,
    tooltip: "Tỷ lệ hoàn thành cao",
  },
};

export const Negative: Story = {
  args: {
    value: -13.4,
    showBar: true,
    tooltip: "Suy giảm",
  },
};

export const Copyable: Story = {
  args: {
    value: 99.2,
    copyable: true,
    tooltip: "Click để copy",
  },
};

export const Error: Story = {
  args: {
    value: 17.8,
    error: true,
    tooltip: "Lỗi giá trị",
  },
};
