import type { Meta, StoryObj } from "@storybook/react";
import { Divider } from "./Divider";
import DividerVertical from "./variants/DividerVertical";
import DividerDashed from "./variants/DividerDashed";

const meta: Meta<typeof Divider> = {
  title: "Atoms/Divider",
  component: Divider,
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof Divider>;

export const Default: Story = {
  args: {},
};

export const Dashed = () => <DividerDashed />;
export const Vertical = () => (
  <div className="flex h-10 items-center space-x-2">
    <span>A</span>
    <DividerVertical thickness={2} />
    <span>B</span>
  </div>
);
export const CustomThickness: Story = {
  args: { thickness: 3 },
};
