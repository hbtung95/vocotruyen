import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import TableIconCell from "./TableIconCell";

const meta: Meta<typeof TableIconCell> = {
  title: "Molecules/List/TableIconCell",
  component: TableIconCell,
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof TableIconCell>;

export const Default: Story = {
  args: {
    icons: [
      { icon: <span>🟢</span>, tooltip: "Thành công", color: "#31ba63" },
      { icon: <span>⚠️</span>, tooltip: "Cảnh báo", color: "#ffaa33" },
      { icon: <span>❌</span>, tooltip: "Lỗi", color: "#e94f44" },
    ],
    highlight: true,
  },
};

export const Single: Story = {
  args: {
    icons: [{ icon: <span>🏆</span>, tooltip: "Giải nhất", color: "#ffaa33" }],
  },
};

export const Disabled: Story = {
  args: {
    icons: [{ icon: <span>❌</span>, tooltip: "Bị khoá", color: "#e94f44", disabled: true }],
    disabled: true,
  },
};
