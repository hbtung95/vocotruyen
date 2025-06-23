import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import TableCellActions from "./TableCellActions";

const meta: Meta<typeof TableCellActions> = {
  title: "Molecules/List/TableCellActions",
  component: TableCellActions,
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof TableCellActions>;

const sampleActions = [
  {
    key: "edit",
    label: "Sửa",
    icon: <span>✏️</span>,
    onClick: () => alert("Sửa!"),
  },
  {
    key: "delete",
    label: "Xóa",
    icon: <span>🗑</span>,
    danger: true,
    onClick: () => alert("Xóa!"),
    tooltip: "Xóa dòng này",
  },
  {
    key: "log",
    label: "Log",
    icon: <span>📜</span>,
    onClick: () => alert("Xem log!"),
    disabled: true,
  },
];

export const Default: Story = {
  args: {
    actions: sampleActions,
  },
};

export const Compact: Story = {
  args: {
    actions: sampleActions,
    compact: true,
  },
};

export const Vertical: Story = {
  args: {
    actions: sampleActions,
    orientation: "vertical",
  },
};
