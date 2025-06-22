import type { Meta, StoryObj } from "@storybook/react";
import { Tooltip } from "./Tooltip";
import TooltipInfo from "./variants/TooltipInfo";
import TooltipError from "./variants/TooltipError";

const meta: Meta<typeof Tooltip> = {
  title: "Atoms/Tooltip",
  component: Tooltip,
  tags: ["autodocs"],
  args: {
    content: "Nội dung tooltip",
    children: <span>Di chuột vào đây</span>,
  },
};
export default meta;

type Story = StoryObj<typeof Tooltip>;

export const Default: Story = { args: {} };

export const Top = () => <Tooltip content="Trên" position="top"><span>Trên</span></Tooltip>;
export const Bottom = () => <Tooltip content="Dưới" position="bottom"><span>Dưới</span></Tooltip>;
export const Left = () => <Tooltip content="Trái" position="left"><span>Trái</span></Tooltip>;
export const Right = () => <Tooltip content="Phải" position="right"><span>Phải</span></Tooltip>;

export const WithInfoIcon = () => <TooltipInfo text="Giải thích thêm" />;
export const WithErrorIcon = () => <TooltipError text="Cảnh báo!" />;
