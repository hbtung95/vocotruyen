import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import TableQuickChart from "./TableQuickChart";

const meta: Meta<typeof TableQuickChart> = {
  title: "Molecules/List/TableQuickChart",
  component: TableQuickChart,
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof TableQuickChart>;

const data = [
  { label: "Nam", value: 23 },
  { label: "Nữ", value: 27 },
  { label: "Khác", value: 2 },
];

const trend = [
  { label: "T1", value: 4 },
  { label: "T2", value: 8 },
  { label: "T3", value: 11 },
  { label: "T4", value: 17 },
  { label: "T5", value: 14 },
  { label: "T6", value: 21 },
];

export const Bar: Story = {
  args: {
    type: "bar",
    data,
    title: "Tổng số theo giới",
    showLegend: true,
  },
};
export const Column: Story = {
  args: {
    type: "column",
    data,
    title: "Tổng số theo giới",
    showLegend: true,
  },
};
export const Line: Story = {
  args: {
    type: "line",
    data: trend,
    title: "Xu hướng tháng",
  },
};
export const Donut: Story = {
  args: {
    type: "donut",
    data,
    title: "Tỷ lệ giới tính",
    showLegend: true,
  },
};
export const Spark: Story = {
  args: {
    type: "spark",
    data: trend,
  },
};
