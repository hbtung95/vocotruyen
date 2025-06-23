import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import StatusBadge from "./StatusBadge";
import { CheckCircle, XCircle, Hourglass, AlertTriangle } from "lucide-react";

const meta: Meta<typeof StatusBadge> = {
  title: "Molecules/User/StatusBadge",
  component: StatusBadge,
  tags: ["autodocs"],
  args: { status: "active" },
};
export default meta;

type Story = StoryObj<typeof StatusBadge>;

export const Active: Story = {};
export const Inactive: Story = { args: { status: "inactive" } };
export const Pending: Story = { args: { status: "pending", icon: <Hourglass size={14} /> } };
export const Approved: Story = { args: { status: "approved", icon: <CheckCircle size={14} /> } };
export const Error: Story = { args: { status: "error", icon: <XCircle size={14} /> } };
export const Warning: Story = { args: { status: "warning", icon: <AlertTriangle size={14} /> } };
export const CustomLabel: Story = { args: { status: "draft", label: "Tạm lưu" } };
export const CustomTooltip: Story = { args: { status: "processing", tooltip: "Chờ xử lý hệ thống" } };
