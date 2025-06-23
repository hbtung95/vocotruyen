import type { Meta, StoryObj } from "@storybook/react";
import Alert from "./Alert";

const meta: Meta<typeof Alert> = {
  title: "Atoms/Alert",
  component: Alert,
  tags: ["autodocs"],
  args: {
    children: "Đây là thông báo mẫu",
  },
};
export default meta;

type Story = StoryObj<typeof Alert>;

export const Info: Story = {
  args: { type: "info", title: "Thông tin" },
};
export const Success: Story = {
  args: { type: "success", title: "Thành công" },
};
export const Warning: Story = {
  args: { type: "warning", title: "Cảnh báo" },
};
export const Error: Story = {
  args: { type: "error", title: "Lỗi" },
};
export const Closable: Story = {
  args: { closable: true, title: "Có thể đóng" },
};
