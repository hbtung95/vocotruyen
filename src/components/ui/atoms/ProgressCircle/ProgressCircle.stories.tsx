import type { Meta, StoryObj } from "@storybook/react";
import ProgressCircle from "./ProgressCircle";

const meta: Meta<typeof ProgressCircle> = {
  title: "Atoms/ProgressCircle",
  component: ProgressCircle,
  tags: ["autodocs"],
};
export default meta;

export const Default = {
  args: { value: 56 }
};
export const WithLabel = {
  args: { value: 82, showLabel: true }
};
export const CustomColor = {
  args: { value: 32, color: "#e53935", showLabel: true }
};
export const CustomSize = {
  args: { value: 94, size: 60, showLabel: true }
};
