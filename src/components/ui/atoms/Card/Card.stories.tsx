import type { Meta, StoryObj } from "@storybook/react";
import { Card } from "./Card";

const meta: Meta<typeof Card> = {
  title: "Atoms/Card",
  component: Card,
  tags: ["autodocs"],
  args: {
    children: "Nội dung Card mẫu",
  },
};
export default meta;

type Story = StoryObj<typeof Card>;

export const Glass: Story = { args: { variant: "glass" } };
export const Solid: Story = { args: { variant: "solid" } };
export const Bordered: Story = { args: { variant: "bordered" } };
export const NoShadow: Story = { args: { shadow: false } };
export const NoRounded: Story = { args: { rounded: false } };
