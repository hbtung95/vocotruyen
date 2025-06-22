import type { Meta, StoryObj } from "@storybook/react";
import { Badge } from "./Badge";
import BadgeSuccess from "./variants/BadgeSuccess";
import BadgeError from "./variants/BadgeError";
import BadgeInfo from "./variants/BadgeInfo";

const meta: Meta<typeof Badge> = {
  title: "Atoms/Badge",
  component: Badge,
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof Badge>;

export const Default: Story = {
  args: { children: "Default" },
};

export const Success = () => <BadgeSuccess>Thành công</BadgeSuccess>;
export const Error = () => <BadgeError>Báo lỗi</BadgeError>;
export const Info = () => <BadgeInfo>Thông tin</BadgeInfo>;
export const Warning: Story = {
  args: { children: "Cảnh báo", variant: "warning" },
};
export const Pill: Story = {
  args: { children: "Pill", pill: true },
};
