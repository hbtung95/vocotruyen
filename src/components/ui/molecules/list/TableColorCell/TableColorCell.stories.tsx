import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import TableColorCell from "./TableColorCell";

const meta: Meta<typeof TableColorCell> = {
  title: "Molecules/List/TableColorCell",
  component: TableColorCell,
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof TableColorCell>;

export const Default: Story = {
  args: {
    value: "#2dc872",
    label: "Xanh lá",
    highlight: true,
    tooltip: "Màu trạng thái",
  },
};

export const NoLabel: Story = {
  args: {
    value: "#eb5d34",
    tooltip: "Màu custom",
  },
};

export const Copyable: Story = {
  args: {
    value: "#ffa82b",
    copyable: true,
    tooltip: "Copy mã màu",
  },
};

export const Bold: Story = {
  args: {
    value: "#86b7fa",
    label: "Xanh dương nhạt",
    bold: true,
  },
};
