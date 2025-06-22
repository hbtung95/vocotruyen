import type { Meta, StoryObj } from "@storybook/react";
import { Textarea } from "./Textarea";
import TextareaAutoResize from "./variants/TextareaAutoResize";

const meta: Meta<typeof Textarea> = {
  title: "Atoms/Textarea",
  component: Textarea,
  tags: ["autodocs"],
  args: {
    label: "Mô tả",
    placeholder: "Nhập nội dung...",
  },
};
export default meta;

type Story = StoryObj<typeof Textarea>;

export const Default: Story = { args: {} };

export const Error: Story = {
  args: { error: "Trường này bắt buộc" },
};

export const Disabled: Story = {
  args: { disabled: true },
};

export const AutoResize = () => (
  <TextareaAutoResize placeholder="Auto resize khi gõ..." />
);
