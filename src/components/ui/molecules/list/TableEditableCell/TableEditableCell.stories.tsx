import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import TableEditableCell from "./TableEditableCell";

const meta: Meta<typeof TableEditableCell> = {
  title: "Molecules/List/TableEditableCell",
  component: TableEditableCell,
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof TableEditableCell>;

export const Default: Story = {
  args: {
    value: "Click để sửa",
    editable: true,
    highlight: true,
    tooltip: "Nhấn để chỉnh sửa",
  },
};

export const Number: Story = {
  args: {
    value: 42,
    type: "number",
    editable: true,
    tooltip: "Sửa số",
  },
};

export const Select: Story = {
  args: {
    value: "b",
    type: "select",
    options: [
      { value: "a", label: "Chọn A" },
      { value: "b", label: "Chọn B" },
      { value: "c", label: "Chọn C" },
    ],
    editable: true,
    tooltip: "Chọn giá trị",
  },
};

export const MultiLine: Story = {
  args: {
    value: "Dòng 1\nDòng 2",
    type: "textarea",
    editable: true,
    multiLine: true,
    tooltip: "Sửa nhiều dòng",
  },
};

export const Loading: Story = {
  args: {
    value: "Đang lưu",
    editable: true,
    loading: true,
    tooltip: "Đang lưu giá trị",
  },
};
