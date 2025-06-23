import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import TableCollapseCell from "./TableCollapseCell";

const meta: Meta<typeof TableCollapseCell> = {
  title: "Molecules/List/TableCollapseCell",
  component: TableCollapseCell,
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof TableCollapseCell>;

export const Default: Story = {
  args: {
    expanded: false,
    tooltip: "Mở rộng",
    highlight: true,
    onToggle: () => alert("Expand/collapse!"),
    content: <div>Chi tiết dòng mở rộng...</div>,
  },
};

export const Expanded: Story = {
  args: {
    expanded: true,
    icon: <span>📑</span>,
    content: <div>Thông tin bổ sung cho dòng này.</div>,
    actions: [<button key="edit">Sửa</button>],
  },
};

export const Nested: Story = {
  args: {
    expanded: true,
    level: 2,
    content: <div>Dữ liệu lồng nhau cấp 2</div>,
  },
};
