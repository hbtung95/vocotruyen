import React, { useState } from "react";
import { Meta, StoryObj } from "@storybook/react";
import ViewSwitcher from "./ViewSwitcher";

const meta: Meta<typeof ViewSwitcher> = {
  title: "Molecules/List/ViewSwitcher",
  component: ViewSwitcher,
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof ViewSwitcher>;

const icons = {
  list: <span style={{ fontSize: 16 }}>📋</span>,
  kanban: <span style={{ fontSize: 16 }}>🗂️</span>,
  calendar: <span style={{ fontSize: 16 }}>📅</span>,
};

const views = [
  { key: "list", label: "Danh sách", icon: icons.list },
  { key: "kanban", label: "Kanban", icon: icons.kanban },
  { key: "calendar", label: "Lịch", icon: icons.calendar },
];

export const Tab: Story = {
  render: () => {
    const [current, setCurrent] = useState("list");
    return (
      <ViewSwitcher
        views={views}
        current={current}
        onSwitch={setCurrent}
        variant="tab"
      />
    );
  },
};

export const Segmented: Story = {
  render: () => {
    const [current, setCurrent] = useState("list");
    return (
      <ViewSwitcher
        views={views}
        current={current}
        onSwitch={setCurrent}
        variant="segmented"
      />
    );
  },
};

export const Large: Story = {
  render: () => {
    const [current, setCurrent] = useState("kanban");
    return (
      <ViewSwitcher
        views={views}
        current={current}
        onSwitch={setCurrent}
        size="lg"
      />
    );
  },
};
