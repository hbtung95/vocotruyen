import React, { useState } from "react";
import { Meta, StoryObj } from "@storybook/react";
import TableImportMenu from "./TableImportMenu";

const meta: Meta<typeof TableImportMenu> = {
  title: "Molecules/List/TableImportMenu",
  component: TableImportMenu,
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof TableImportMenu>;

export const Default: Story = {
  args: {
    onImport: (file, fmt) => alert(`Import: ${file.name} (${fmt})`),
  },
};

export const WithDemo: Story = {
  args: {
    onImport: (file, fmt) => alert(`Import: ${file.name} (${fmt})`),
    onDownloadDemo: fmt => alert("Tải file mẫu: " + fmt),
    instructions: "Chỉ chấp nhận file Excel hoặc CSV, tối đa 500 dòng.",
  },
};

export const Loading: Story = {
  args: {
    onImport: () => {},
    loading: true,
  },
};

export const Error: Story = {
  args: {
    onImport: () => {},
    error: "File không đúng định dạng hoặc quá lớn.",
  },
};
