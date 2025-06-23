import React, { useState } from "react";
import { Meta, StoryObj } from "@storybook/react";
import TableColumnSettings from "./TableColumnSettings";

const meta: Meta<typeof TableColumnSettings> = {
  title: "Molecules/List/TableColumnSettings",
  component: TableColumnSettings,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof TableColumnSettings>;

const defaultCols = [
  { key: "name", label: "Họ tên", visible: true, resizable: true, width: "120" },
  { key: "score", label: "Điểm", visible: true, resizable: true, width: "80" },
  { key: "note", label: "Ghi chú", visible: false, resizable: false },
];

export const Default: Story = {
  render: () => {
    const [columns, setColumns] = useState(defaultCols);
    return (
      <TableColumnSettings columns={columns} onChange={setColumns} />
    );
  },
};
