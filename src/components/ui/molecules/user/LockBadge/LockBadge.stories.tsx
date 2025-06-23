import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import LockBadge from "./LockBadge";
import { Lock, UserX } from "lucide-react";

const meta: Meta<typeof LockBadge> = {
  title: "Molecules/User/LockBadge",
  component: LockBadge,
  tags: ["autodocs"],
  args: { },
};
export default meta;

type Story = StoryObj<typeof LockBadge>;

export const Default: Story = {};

export const LockedBy: Story = {
  args: { lockedBy: "Nguyễn Văn A" },
};

export const WithReason: Story = {
  args: { reason: "Đang bị chỉnh sửa bởi người khác" },
};

export const CustomIcon: Story = {
  args: { icon: <UserX size={16} />, tooltip: "Khoá do quyền hạn" },
};

export const Large: Story = {
  args: { size: 32, reason: "Khóa admin" },
};
