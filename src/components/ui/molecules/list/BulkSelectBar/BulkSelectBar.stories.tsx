import React, { useState } from "react";
import { Meta, StoryObj } from "@storybook/react";
import BulkSelectBar from "./BulkSelectBar";

const meta: Meta<typeof BulkSelectBar> = {
  title: "Molecules/List/BulkSelectBar",
  component: BulkSelectBar,
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof BulkSelectBar>;

export const Default: Story = {
  args: {
    selectedCount: 3,
    totalCount: 10,
    onClearSelection: () => alert("Bỏ chọn!"),
    actions: [
      {
        key: "delete",
        label: "Xóa",
        onClick: () => alert("Xóa!"),
        danger: true,
      },
      {
        key: "export",
        label: "Export",
        onClick: () => alert("Export!"),
      },
    ],
  },
};

export const WithDisabledAction: Story = {
  args: {
    selectedCount: 2,
    totalCount: 10,
    onClearSelection: () => alert("Bỏ chọn!"),
    actions: [
      {
        key: "delete",
        label: "Xóa",
        onClick: () => alert("Xóa!"),
        danger: true,
      },
      {
        key: "approve",
        label: "Duyệt",
        onClick: () => alert("Duyệt!"),
        disabled: true,
      },
    ],
  },
};
