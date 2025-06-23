import React, { useState } from "react";
import { Meta, StoryObj } from "@storybook/react";
import SmartFilterChips from "./SmartFilterChips";

const meta: Meta<typeof SmartFilterChips> = {
  title: "Molecules/List/SmartFilterChips",
  component: SmartFilterChips,
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof SmartFilterChips>;

const defaultChips = [
  { key: "status", label: "Trạng thái", valueLabel: "Đang hoạt động" },
  { key: "score", label: "Điểm", valueLabel: "≥ 8.0" },
];

export const Default: Story = {
  render: () => {
    const [chips, setChips] = useState(defaultChips);
    const handleRemove = (key: string) => setChips(chips => chips.filter(c => c.key !== key));
    return (
      <SmartFilterChips
        chips={chips}
        onRemove={handleRemove}
        onClearAll={() => setChips([])}
      />
    );
  },
};
