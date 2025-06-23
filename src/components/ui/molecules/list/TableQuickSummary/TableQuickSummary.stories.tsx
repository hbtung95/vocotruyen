import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import TableQuickSummary from "./TableQuickSummary";

const meta: Meta<typeof TableQuickSummary> = {
  title: "Molecules/List/TableQuickSummary",
  component: TableQuickSummary,
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof TableQuickSummary>;

const fields = [
  { key: "total", label: "Tổng số dòng", value: 50, align: "left" },
  { key: "sum", label: "Tổng điểm", value: 401 },
  { key: "avg", label: "TB", value: 8.02 },
  { key: "max", label: "Max", value: 10, align: "center" },
];

export const Default: Story = {
  args: {
    fields,
  },
};

export const Loading: Story = {
  args: {
    fields,
    loading: true,
  },
};
