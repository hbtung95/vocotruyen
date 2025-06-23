import React, { useState } from "react";
import { Meta, StoryObj } from "@storybook/react";
import TableExportMenu from "./TableExportMenu";

const meta: Meta<typeof TableExportMenu> = {
  title: "Molecules/List/TableExportMenu",
  component: TableExportMenu,
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof TableExportMenu>;

export const Default: Story = {
  args: {
    onExport: (fmt, opt) => alert(`Export: ${fmt} ${opt && opt.selected ? "chỉ dòng đã chọn" : "toàn bộ"}`),
  },
};

export const WithSelection: Story = {
  args: {
    onExport: (fmt, opt) => alert(`Export: ${fmt} ${opt && opt.selected ? "chỉ dòng đã chọn" : "toàn bộ"}`),
    withSelection: true,
  },
};

export const Disabled: Story = {
  args: {
    onExport: () => {},
    disabled: true,
  },
};
