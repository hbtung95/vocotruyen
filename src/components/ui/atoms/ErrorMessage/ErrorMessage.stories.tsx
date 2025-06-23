import type { Meta, StoryObj } from "@storybook/react";
import ErrorMessage from "./ErrorMessage";

const meta: Meta<typeof ErrorMessage> = {
  title: "Atoms/ErrorMessage",
  component: ErrorMessage,
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof ErrorMessage>;

export const Default: Story = {
  args: { children: "Vui lòng nhập đúng email!" }
};
export const HideIcon: Story = {
  args: { children: "Không có icon cảnh báo!", hideIcon: true }
};
export const WithId: Story = {
  render: () => (
    <div>
      <input aria-describedby="err01" className="border p-2" />
      <ErrorMessage id="err01">Đây là lỗi liên kết với input</ErrorMessage>
    </div>
  )
};
