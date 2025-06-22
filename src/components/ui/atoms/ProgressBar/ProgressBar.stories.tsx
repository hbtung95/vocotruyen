import type { Meta, StoryObj } from "@storybook/react";
import { ProgressBar } from "./ProgressBar";
import ProgressBarCircle from "./variants/ProgressBarCircle";
import ProgressBarIndeterminate from "./variants/ProgressBarIndeterminate";

const meta: Meta<typeof ProgressBar> = {
  title: "Atoms/ProgressBar",
  component: ProgressBar,
  tags: ["autodocs"],
  args: {
    value: 50,
    showLabel: true,
  },
};
export default meta;

type Story = StoryObj<typeof ProgressBar>;

export const Default: Story = {
  args: {},
};

export const Success: Story = {
  args: { value: 80, color: "success" },
};
export const Error: Story = {
  args: { value: 30, color: "error" },
};
export const Indeterminate = () => <ProgressBarIndeterminate />;
export const Circle = () => <ProgressBarCircle value={75} showLabel color="accent" />;
