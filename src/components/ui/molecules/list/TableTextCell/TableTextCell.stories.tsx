import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import TableTextCell from "./TableTextCell";

const meta: Meta<typeof TableTextCell> = {
  title: "Molecules/List/TableTextCell",
  component: TableTextCell,
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof TableTextCell>;

export const Default: Story = {
  args: {
    value: "Mô tả sản phẩm ngắn gọn...",
    tooltip: "Thông tin đầy đủ",
    highlight: true,
  },
};

export const Ellipsis: Story = {
  args: {
    value: "Đây là một đoạn văn bản rất dài và sẽ được rút gọn nếu vượt quá số ký tự tối đa quy định.",
    maxLength: 32,
    ellipsis: true,
  },
};

export const MultiLine: Story = {
  args: {
    value: "Dòng 1\nDòng 2\nDòng 3\nDòng 4",
    multiLine: true,
    rows: 2,
    bold: true,
  },
};

export const Copyable: Story = {
  args: {
    value: "Sao chép đoạn text này",
    copyable: true,
    tooltip: "Click để copy",
  },
};

export const Error: Story = {
  args: {
    value: "Giá trị lỗi",
    error: true,
    tooltip: "Có lỗi dữ liệu",
  },
};
