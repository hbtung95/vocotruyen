import type { Meta, StoryObj } from "@storybook/react";
import MenuButton from "./MenuButton";

const meta: Meta<typeof MenuButton> = {
  title: "Atoms/MenuButton",
  component: MenuButton,
  tags: ["autodocs"],
};
export default meta;

export const Variants = {
  render: () => (
    <div className="flex gap-3 items-center">
      <MenuButton>Menu</MenuButton>
      <MenuButton variant="outline">Menu</MenuButton>
      <MenuButton variant="ghost">Menu</MenuButton>
      <MenuButton open>Menu (Open)</MenuButton>
    </div>
  ),
};
export const Sizes = {
  render: () => (
    <div className="flex gap-2">
      <MenuButton size="sm">Nhỏ</MenuButton>
      <MenuButton size="md">Vừa</MenuButton>
      <MenuButton size="lg">Lớn</MenuButton>
    </div>
  ),
};
