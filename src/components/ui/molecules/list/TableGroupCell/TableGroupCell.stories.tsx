import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import TableGroupCell from "./TableGroupCell";

const meta: Meta<typeof TableGroupCell> = {
  title: "Molecules/List/TableGroupCell",
  component: TableGroupCell,
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof TableGroupCell>;

export const Default: Story = {
  args: {
    label: "Nhóm khách hàng VIP",
    count: 13,
    expanded: true,
    highlight: true,
    onToggle: () => alert("Expand/collapse!"),
    actions: [<button key="more">More</button>],
  },
};

export const Nested: Story = {
  args: {
    label: "Subgroup",
    level: 2,
    expanded: false,
    count: 3,
  },
};

export const WithIcon: Story = {
  args: {
    label: "Team Marketing",
    icon: <span>👥</span>,
    bold: true,
  },
};
