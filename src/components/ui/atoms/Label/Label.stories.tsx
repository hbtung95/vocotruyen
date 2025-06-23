import type { Meta, StoryObj } from "@storybook/react";
import { Label } from "./Label";
import LabelRequired from "./variants/LabelRequired";
import LabelOptional from "./variants/LabelOptional";

const meta: Meta<typeof Label> = {
  title: "Atoms/Label",
  component: Label,
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof Label>;

export const Default: Story = {
  args: { children: "Tên người dùng" },
};

export const Required = () => <LabelRequired>Họ tên *</LabelRequired>;
export const Optional = () => <LabelOptional>Email (tuỳ chọn)</LabelOptional>;
export const Disabled: Story = {
  args: { children: "Số điện thoại", disabled: true },
};
export const Error: Story = {
  args: { children: "Mật khẩu", error: true },
};

