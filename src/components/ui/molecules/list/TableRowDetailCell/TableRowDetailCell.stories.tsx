import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import TableRowDetailCell from "./TableRowDetailCell";

const meta: Meta<typeof TableRowDetailCell> = {
  title: "Molecules/List/TableRowDetailCell",
  component: TableRowDetailCell,
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof TableRowDetailCell>;

export const Default: Story = {
  args: {
    open: true,
    children: <div>Chi tiết mở rộng của hàng dữ liệu này.</div>,
    highlight: true,
    actions: [<button key="a">Lưu</button>, <button key="b">Xuất</button>],
  },
};

export const Loading: Story = {
  args: {
    open: true,
    loading: true,
  },
};

export const Error: Story = {
  args: {
    open: true,
    error: true,
    actions: [<button key="a">Thử lại</button>],
  },
};

export const WithClose: Story = {
  args: {
    open: true,
    children: <div>Panel này có nút đóng.</div>,
    onClose: () => alert("Đóng chi tiết!"),
  },
};
