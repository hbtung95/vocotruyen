import type { Meta, StoryObj } from "@storybook/react";
import InputGroup from "./InputGroup";

const meta: Meta<typeof InputGroup> = {
  title: "Atoms/InputGroup",
  component: InputGroup,
  tags: ["autodocs"],
};
export default meta;

export const Default = {
  render: () => (
    <InputGroup>
      <input className="flex-1 px-3 py-2 border-none outline-none bg-transparent" placeholder="Nhập tên..." />
    </InputGroup>
  ),
};
export const WithPrependAppend = {
  render: () => (
    <InputGroup prepend={<span>+84</span>} append={<button>Gửi</button>}>
      <input className="flex-1 px-3 py-2 border-none outline-none bg-transparent" placeholder="Số điện thoại" />
    </InputGroup>
  ),
};
