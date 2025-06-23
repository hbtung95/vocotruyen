import React, { useState } from "react";
import { Meta, StoryObj } from "@storybook/react";
import TableFieldUsageStats from "./TableFieldUsageStats";

const meta: Meta<typeof TableFieldUsageStats> = {
  title: "Molecules/List/TableFieldUsageStats",
  component: TableFieldUsageStats,
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof TableFieldUsageStats>;

export const Default: Story = {
  args: {
    label: "Điểm tổng",
    totalRows: 120,
    nonEmptyRows: 100,
    sortedCount: 8,
    filteredCount: 2,
    isVisible: true,
  },
};

export const Hidden: Story = {
  args: {
    label: "Ghi chú",
    totalRows: 120,
    nonEmptyRows: 50,
    sortedCount: 0,
    filteredCount: 1,
    isVisible: false,
  },
};

export const WithToggle: Story = {
  render: (args) => {
    const [visible, setVisible] = useState(true);
    return (
      <TableFieldUsageStats
        {...args}
        isVisible={visible}
        onToggleVisible={setVisible}
        label="Phân loại"
        totalRows={80}
        nonEmptyRows={60}
        sortedCount={2}
        filteredCount={3}
      />
    );
  },
};
