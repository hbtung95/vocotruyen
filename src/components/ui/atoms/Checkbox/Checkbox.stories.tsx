import type { Meta, StoryObj } from "@storybook/react";
import { Checkbox } from "./Checkbox";
import CheckboxRounded from "./variants/CheckboxRounded";
import CheckboxIndeterminate from "./variants/CheckboxIndeterminate";

const meta: Meta<typeof Checkbox> = {
  title: "Atoms/Checkbox",
  component: Checkbox,
  tags: ["autodocs"],
  args: {
    label: "Tôi đồng ý",
    checked: false,
  },
};
export default meta;

type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
  args: { label: "Mặc định", checked: false },
};

export const Checked: Story = {
  args: { label: "Đã chọn", checked: true },
};

export const Indeterminate = () => <CheckboxIndeterminate label="Trung gian" />;
export const Rounded = () => <CheckboxRounded label="Bo tròn" />;
export const Disabled: Story = {
  args: { label: "Vô hiệu hóa", disabled: true },
};

