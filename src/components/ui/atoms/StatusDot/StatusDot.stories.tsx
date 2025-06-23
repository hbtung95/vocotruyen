import type { Meta, StoryObj } from "@storybook/react";
import StatusDot from "./StatusDot";

const meta: Meta<typeof StatusDot> = {
  title: "Atoms/StatusDot",
  component: StatusDot,
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof StatusDot>;

export const AllStatus = {
  render: () => (
    <div className="flex gap-4 items-center">
      <div><StatusDot status="success" /> Online</div>
      <div><StatusDot status="info" /> Info</div>
      <div><StatusDot status="warning" /> Cảnh báo</div>
      <div><StatusDot status="error" /> Lỗi</div>
      <div><StatusDot status="offline" /> Offline</div>
      <div><StatusDot status="neutral" /> Trung lập</div>
    </div>
  ),
};

export const CustomSize = {
  args: { status: "success", size: 28, label: "Online (to)" },
};
