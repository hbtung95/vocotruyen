import React, { useState } from "react";
import { Meta, StoryObj } from "@storybook/react";
import BulkEditDialog from "./BulkEditDialog";

const meta: Meta<typeof BulkEditDialog> = {
  title: "Molecules/List/BulkEditDialog",
  component: BulkEditDialog,
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof BulkEditDialog>;

const fields = [
  { key: "status", label: "Trạng thái", type: "select", options: [
    { value: "ok", label: "OK" },
    { value: "ko", label: "Không đạt" },
  ]},
  { key: "note", label: "Ghi chú", type: "text" },
];

export const Default: Story = {
  render: () => {
    const [open, setOpen] = useState(true);
    const handleSubmit = (data: any) => {
      alert(JSON.stringify(data, null, 2));
      setOpen(false);
    };
    return (
      <BulkEditDialog
        open={open}
        onClose={() => setOpen(false)}
        fields={fields}
        onSubmit={handleSubmit}
      />
    );
  },
};
