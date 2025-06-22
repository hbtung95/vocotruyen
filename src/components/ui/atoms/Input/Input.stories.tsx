import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "./Input";
import InputPassword from "./variants/InputPassword";
import InputSearch from "./variants/InputSearch";

const meta: Meta<typeof Input> = {
  title: "Atoms/Input",
  component: Input,
  tags: ["autodocs"],
  args: {
    placeholder: "Nhập nội dung...",
  },
};
export default meta;

type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: { label: "Tên người dùng" },
};

export const Error: Story = {
  args: { label: "Email", error: "Email chưa hợp lệ" },
};

export const Disabled: Story = {
  args: { label: "Không nhập được", disabled: true },
};

export const WithLeftIcon: Story = {
  args: {
    label: "Có icon trái",
    leftIcon: <span>🔥</span>,
  },
};

export const Password = () => <InputPassword label="Mật khẩu" />;
export const Search = () => <InputSearch />;
