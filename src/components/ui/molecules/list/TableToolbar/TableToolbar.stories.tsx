import React, { useState } from "react";
import { Meta, StoryObj } from "@storybook/react";
import TableToolbar from "./TableToolbar";

const meta: Meta<typeof TableToolbar> = {
  title: "Molecules/List/TableToolbar",
  component: TableToolbar,
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof TableToolbar>;

export const Default: Story = {
  args: {
    title: "Danh sách VĐV",
    onAdd: () => alert("Thêm mới!"),
    onRefresh: () => alert("Refresh!"),
    onSearch: (kw: string) => alert("Search: " + kw),
  },
};

export const WithBulkActions: Story = {
  args: {
    title: "Bảng chấm điểm",
    selectedCount: 3,
    bulkActions: <button className="bg-yellow-500 text-white px-2 py-1 rounded text-xs">Xóa</button>,
    onBulkAction: () => alert("Bulk action!"),
  },
};

export const WithFilter: Story = {
  args: {
    filterComponent: (
      <select className="ml-2 border rounded px-2 py-1 text-sm">
        <option>Tất cả</option>
        <option>Đã chấm</option>
        <option>Chưa chấm</option>
      </select>
    ),
  },
};

export const ExtraActions: Story = {
  args: {
    extraActions: <button className="ml-2 text-xs underline">Export Excel</button>,
  },
};
