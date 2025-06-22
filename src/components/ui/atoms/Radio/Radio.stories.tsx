import type { Meta, StoryObj } from "@storybook/react";
import { Radio } from "./Radio";
import RadioButton from "./variants/RadioButton";
import RadioCard from "./variants/RadioCard";

const meta: Meta<typeof Radio> = {
  title: "Atoms/Radio",
  component: Radio,
  tags: ["autodocs"],
  args: {
    label: "Tuỳ chọn",
    value: "option",
  },
};
export default meta;

type Story = StoryObj<typeof Radio>;

export const Default: Story = {
  args: { label: "Nam", value: "male" },
};

export const Checked: Story = {
  args: { label: "Nữ", value: "female", checked: true },
};

export const Disabled: Story = {
  args: { label: "Khác", value: "other", disabled: true },
};

export const Button = () => (
  <>
    <RadioButton label="A" value="a" checked />
    <RadioButton label="B" value="b" />
  </>
);

export const Card = () => (
  <>
    <RadioCard label="Card 1" value="c1" checked />
    <RadioCard label="Card 2" value="c2" />
  </>
);
