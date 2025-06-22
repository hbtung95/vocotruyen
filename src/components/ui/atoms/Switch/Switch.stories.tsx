import type { Meta, StoryObj } from "@storybook/react";
import { Switch } from "./Switch";
import SwitchIcon from "./variants/SwitchIcon";

const meta: Meta<typeof Switch> = {
  title: "Atoms/Switch",
  component: Switch,
  tags: ["autodocs"],
  args: {
    label: "Bật tắt",
    checked: false,
  },
};
export default meta;

type Story = StoryObj<typeof Switch>;

export const Default: Story = {
  args: {},
};

export const Checked: Story = {
  args: { checked: true },
};

export const Disabled: Story = {
  args: { disabled: true },
};

export const WithIcon = () => <SwitchIcon checked={true} label="Dark mode" />;
