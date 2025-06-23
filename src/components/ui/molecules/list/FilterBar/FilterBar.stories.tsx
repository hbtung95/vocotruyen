import React, { useState } from "react";
import { Meta, StoryObj } from "@storybook/react";
import FilterBar from "./FilterBar";

const meta: Meta<typeof FilterBar> = {
  title: "Molecules/List/FilterBar",
  component: FilterBar,
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof FilterBar>;

const fields = [
  { key: "name", label: "Tên", type: "text" },
  { key: "status", label: "Trạng thái", type: "select", options: [
    { value: "active", label: "Đang hoạt động" },
    { value: "inactive", label: "Ngưng" },
  ]},
  { key: "tags", label: "Tag", type: "multi-select", options: [
    { value: "A", label: "A" },
    { value: "B", label: "B" },
  ]},
];

export const Default: Story = {
  render: () => {
    const [value, setValue] = useState({});
    return (
      <FilterBar
        fields={fields}
        value={value}
        onChange={setValue}
        onReset={() => setValue({})}
        onSubmit={() => alert("Lọc!")}
      />
    );
  },
};
