import type { Meta, StoryObj } from "@storybook/react";
import Legend from "./Legend";

const meta: Meta<typeof Legend> = {
  title: "Atoms/Legend",
  component: Legend,
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof Legend>;

export const Default: Story = {
  args: { children: "Nhóm thông tin" }
};
export const Sizes: Story = {
  render: () => (
    <fieldset className="border p-4 rounded">
      <Legend size="sm">Nhỏ</Legend>
      <Legend size="md">Vừa</Legend>
      <Legend size="lg">Lớn</Legend>
      <input className="mt-2 border p-2 w-full" placeholder="..." />
    </fieldset>
  )
};
