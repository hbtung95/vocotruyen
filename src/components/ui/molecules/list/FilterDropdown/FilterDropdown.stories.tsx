import React, { useState } from "react";
import { Meta, StoryObj } from "@storybook/react";
import FilterDropdown from "./FilterDropdown";

const meta: Meta<typeof FilterDropdown> = {
  title: "Molecules/List/FilterDropdown",
  component: FilterDropdown,
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof FilterDropdown>;

const options = [
  { value: "ok", label: "Đạt" },
  { value: "fail", label: "Không đạt" },
  { value: "all", label: "Tất cả" },
];

export const Default: Story = {
  render: () => {
    const [val, setVal] = useState("");
    return (
      <FilterDropdown
        label="Trạng thái"
        options={options}
        value={val}
        onChange={setVal}
      />
    );
  },
};

export const MultiSelect: Story = {
  render: () => {
    const [val, setVal] = useState<any[]>([]);
    return (
      <FilterDropdown
        label="Chọn nhiều"
        options={options}
        value={val}
        onChange={setVal}
        multi
      />
    );
  },
};

export const RightAlign: Story = {
  render: () => {
    const [val, setVal] = useState("");
    return (
      <div style={{ width: 240 }}>
        <FilterDropdown
          label="Right"
          options={options}
          value={val}
          onChange={setVal}
          dropdownAlign="right"
        />
      </div>
    );
  },
};
