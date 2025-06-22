import type { Meta, StoryObj } from "@storybook/react";
import { Slider } from "./Slider";
import SliderRange from "./variants/SliderRange";
import SliderVertical from "./variants/SliderVertical";

const meta: Meta<typeof Slider> = {
  title: "Atoms/Slider",
  component: Slider,
  tags: ["autodocs"],
  args: {
    value: 30,
    min: 0,
    max: 100,
    step: 1,
    label: "Âm lượng",
  },
};
export default meta;

type Story = StoryObj<typeof Slider>;

export const Default: Story = { args: {} };

export const ShowValue: Story = {
  args: { showValue: true },
};

export const Disabled: Story = {
  args: { disabled: true },
};

export const WithRange = () => <SliderRange value={50} min={0} max={100} label="Giá trị" />;
export const Vertical = () => <SliderVertical value={50} min={0} max={100} label="Vertical" />;
