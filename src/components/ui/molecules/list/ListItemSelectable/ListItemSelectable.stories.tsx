import React, { useState } from "react";
import { Meta, StoryObj } from "@storybook/react";
import ListItemSelectable from "./ListItemSelectable";
import { Icon } from "@/components/ui/atoms/Icon";

const meta: Meta<typeof ListItemSelectable> = {
  title: "Molecules/List/ListItemSelectable",
  component: ListItemSelectable,
  tags: ["autodocs"],
  args: {
    label: "Chọn VĐV",
    icon: <Icon name="user" size={18} />,
  },
};
export default meta;

type Story = StoryObj<typeof ListItemSelectable>;

export const Default: Story = {
  args: { checked: false },
};

export const Checked: Story = {
  args: { checked: true },
};

export const WithDescription: Story = {
  args: { description: "VĐV xuất sắc năm 2025" },
};

export const Disabled: Story = {
  args: { disabled: true },
};

export const Interactive: Story = {
  render: (args) => {
    const [checked, setChecked] = useState(false);
    return (
      <ListItemSelectable {...args} checked={checked} onChange={setChecked} />
    );
  },
};
