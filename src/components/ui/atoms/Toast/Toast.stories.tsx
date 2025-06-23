import type { Meta, StoryObj } from "@storybook/react";
import Toast from "./Toast";
import React, { useState } from "react";

const meta: Meta<typeof Toast> = {
  title: "Atoms/Toast",
  component: Toast,
  tags: ["autodocs"],
  args: {
    open: true,
    children: "Đây là toast message",
  },
};
export default meta;

type Story = StoryObj<typeof Toast>;

export const Info: Story = { args: { type: "info" } };
export const Success: Story = { args: { type: "success" } };
export const Warning: Story = { args: { type: "warning" } };
export const Error: Story = { args: { type: "error" } };
export const Closable: Story = { args: { closable: true } };

export const WithDuration = {
  render: () => {
    const [open, setOpen] = useState(true);
    return (
      <Toast open={open} duration={1500} onClose={() => setOpen(false)}>
        Tự động ẩn sau 1.5s
      </Toast>
    );
  }
};
