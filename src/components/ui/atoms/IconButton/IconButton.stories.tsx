import type { Meta, StoryObj } from "@storybook/react";
import IconButton from "./IconButton";

const meta: Meta<typeof IconButton> = {
  title: "Atoms/IconButton",
  component: IconButton,
  tags: ["autodocs"],
};
export default meta;

export const AllVariants = {
  render: () => (
    <div className="flex gap-4 items-center">
      <IconButton icon="✏️" aria-label="Sửa" />
      <IconButton icon="❌" variant="danger" aria-label="Xoá" />
      <IconButton icon="🔍" variant="outline" aria-label="Tìm" />
      <IconButton icon="⚡" variant="ghost" aria-label="Hành động" />
      <IconButton icon="⏳" loading aria-label="Đang tải" />
    </div>
  ),
};
export const Sizes = {
  render: () => (
    <div className="flex gap-2">
      <IconButton icon="🔍" size="sm" aria-label="Nhỏ" />
      <IconButton icon="🔍" size="md" aria-label="Vừa" />
      <IconButton icon="🔍" size="lg" aria-label="Lớn" />
    </div>
  ),
};
