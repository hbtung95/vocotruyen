import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import TableDateCell from "./TableDateCell";

const meta: Meta<typeof TableDateCell> = {
  title: "Molecules/List/TableDateCell",
  component: TableDateCell,
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof TableDateCell>;

const now = new Date();

export const Default: Story = {
  args: {
    value: now,
    mode: "date",
  },
};

export const Relative: Story = {
  args: {
    value: new Date(Date.now() - 2 * 3600 * 1000),
    mode: "relative",
  },
};

export const Highlight: Story = {
  args: {
    value: now,
    highlight: true,
    tooltip: "Ngày thi đấu",
  },
};

export const Overdue: Story = {
  args: {
    value: new Date(Date.now() - 48 * 3600 * 1000),
    overdue: true,
  },
};
