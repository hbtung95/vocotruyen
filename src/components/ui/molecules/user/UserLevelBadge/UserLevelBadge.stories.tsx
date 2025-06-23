import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import UserLevelBadge from "./UserLevelBadge";
import { Rocket } from "lucide-react";

const meta: Meta<typeof UserLevelBadge> = {
  title: "Molecules/User/UserLevelBadge",
  component: UserLevelBadge,
  tags: ["autodocs"],
  args: { level: "member" },
};
export default meta;

type Story = StoryObj<typeof UserLevelBadge>;

export const Member: Story = {};
export const Pro: Story = { args: { level: "pro" } };
export const VIP: Story = { args: { level: "vip" } };
export const Admin: Story = { args: { level: "admin" } };
export const Elite: Story = { args: { level: "elite" } };
export const CustomLabel: Story = { args: { level: "coach", label: "Huấn luyện viên" } };
export const CustomIcon: Story = { args: { level: "elite", icon: <Rocket size={14} />, label: "Rocket" } };
export const LargeSize: Story = { args: { level: "vip", size: "lg" } };
export const CustomTooltip: Story = { args: { level: "pro", tooltip: "Đạt 1000 điểm" } };
