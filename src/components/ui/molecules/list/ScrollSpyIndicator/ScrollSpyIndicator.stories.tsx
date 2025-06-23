import React, { useState } from "react";
import { Meta, StoryObj } from "@storybook/react";
import ScrollSpyIndicator from "./ScrollSpyIndicator";

const meta: Meta<typeof ScrollSpyIndicator> = {
  title: "Molecules/List/ScrollSpyIndicator",
  component: ScrollSpyIndicator,
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof ScrollSpyIndicator>;

const sections = [
  { id: "info", label: "Thông tin" },
  { id: "schedule", label: "Lịch" },
  { id: "athletes", label: "VĐV" },
  { id: "scores", label: "Điểm số" },
];

export const Default: Story = {
  render: () => {
    const [current, setCurrent] = useState(sections[0].id);
    return (
      <ScrollSpyIndicator
        sections={sections}
        currentId={current}
        onSectionClick={setCurrent}
      />
    );
  },
};

export const Vertical: Story = {
  render: () => {
    const [current, setCurrent] = useState(sections[0].id);
    return (
      <ScrollSpyIndicator
        sections={sections}
        currentId={current}
        onSectionClick={setCurrent}
        vertical
      />
    );
  },
};

export const CustomColor: Story = {
  render: () => {
    const [current, setCurrent] = useState(sections[0].id);
    return (
      <ScrollSpyIndicator
        sections={sections}
        currentId={current}
        onSectionClick={setCurrent}
        indicatorColor="#e94f44"
      />
    );
  },
};
