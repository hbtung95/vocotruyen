import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import TableActionCell from "./TableActionCell";

const meta: Meta<typeof TableActionCell> = {
  title: "Molecules/List/TableActionCell",
  component: TableActionCell,
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof TableActionCell>;

const actions = [
  { key: "edit", label: "Sửa", icon: <span>✏️</span>, tooltip: "Chỉnh sửa", onClick: () => alert("Sửa!") },
  { key: "delete", label: "Xoá", icon: <span>🗑️</span>, color: "#e94f44", confirm: "Bạn chắc chắn xoá?", onClick: () => alert("Đã xoá!") },
  { key: "view", label: "Xem", icon: <span>👁️</span>, onClick: () => alert("Xem chi tiết!") },
];

export const Default: Story = {
  args: {
    actions,
    max: 2,
    highlight: true,
  },
};

export const AllMenu: Story = {
  args: {
    actions,
    max: 0,
  },
};

export const Disabled: Story = {
  args: {
    actions: [
      { key: "edit", label: "Sửa", icon: <span>✏️</span>, disabled: true },
      { key: "delete", label: "Xoá", icon: <span>🗑️</span>, disabled: true },
    ],
    disabled: true,
  },
};
