import type { Meta, StoryObj } from "@storybook/react";
import { Popover } from "./Popover";

const meta: Meta<typeof Popover> = {
  title: "Atoms/Popover",
  component: Popover,
  tags: ["autodocs"],
  args: {
    content: <span>Đây là popover!</span>,
    children: <button>Hover/click tôi</button>,
  },
};
export default meta;

type Story = StoryObj<typeof Popover>;

export const Default: Story = { args: {} };
export const Hover = () => (
  <Popover openOnHover content={<span>Popover khi hover</span>}>
    <span className="px-4 py-2 rounded bg-accent text-white">Di chuột vào đây</span>
  </Popover>
);
export const Top = () => <Popover position="top" content="Trên">Lên</Popover>;
