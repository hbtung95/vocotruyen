import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import TableNoteCell from "./TableNoteCell";

const meta: Meta<typeof TableNoteCell> = {
  title: "Molecules/List/TableNoteCell",
  component: TableNoteCell,
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof TableNoteCell>;

export const Default: Story = {
  args: {
    note: "Ghi chú cho dòng dữ liệu này.",
    label: "Lưu ý",
    tooltip: "Ghi chú đầy đủ",
    highlight: true,
  },
};

export const Markdown: Story = {
  args: {
    note: "**Chú ý:** Không được chỉnh sửa tuỳ tiện.",
    markdown: true,
    highlight: true,
  },
};

export const MultiLine: Story = {
  args: {
    note: "Dòng 1\nDòng 2\nDòng 3",
    multiLine: true,
  },
};

export const Copyable: Story = {
  args: {
    note: "Sao chép ghi chú này",
    copyable: true,
    tooltip: "Click để copy",
  },
};

export const Error: Story = {
  args: {
    note: "Ghi chú lỗi",
    error: true,
    tooltip: "Có lỗi dữ liệu",
  },
};
