import type { Meta, StoryObj } from "@storybook/react";
import Chip from "./Chip";

const meta: Meta<typeof Chip> = {
  title: "Atoms/Chip",
  component: Chip,
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof Chip>;

export const Default: Story = {
  args: { children: "Chip mẫu" }
};
export const Closable: Story = {
  args: { children: "Có thể xoá", closable: true }
};
export const WithIcon: Story = {
  args: { children: "Tìm kiếm", iconLeft: "🔍", iconRight: "➡️" }
};
export const ColorSize: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Chip color="accent">Accent</Chip>
      <Chip color="success" size="sm">Thành công nhỏ</Chip>
      <Chip color="error" size="lg">Lỗi lớn</Chip>
      <Chip color="info">Thông tin</Chip>
      <Chip color="warning">Cảnh báo</Chip>
      <Chip color="neutral">Trung lập</Chip>
    </div>
  )
};
