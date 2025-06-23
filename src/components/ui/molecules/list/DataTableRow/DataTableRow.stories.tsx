import React, { useState } from "react";
import { Meta, StoryObj } from "@storybook/react";
import DataTableRow from "./DataTableRow";

const meta: Meta<typeof DataTableRow> = {
  title: "Molecules/List/DataTableRow",
  component: DataTableRow,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof DataTableRow>;

const cells = [
  { key: "name", content: "VĐV 1" },
  { key: "score", content: "9.2", align: "right" },
];

export const Default: Story = {
  render: () => (
    <table><tbody><DataTableRow cells={cells} /></tbody></table>
  ),
};

export const WithCheckbox: Story = {
  render: () => {
    const [checked, setChecked] = useState(false);
    return (
      <table>
        <tbody>
          <DataTableRow
            cells={cells}
            checked={checked}
            onCheck={setChecked}
          />
        </tbody>
      </table>
    );
  },
};

export const Selected: Story = {
  render: () => (
    <table><tbody><DataTableRow cells={cells} selected /></tbody></table>
  ),
};

export const WithActions: Story = {
  render: () => (
    <table>
      <tbody>
        <DataTableRow
          cells={cells}
          actions={<button className="text-xs text-primary-600">Chi tiết</button>}
        />
      </tbody>
    </table>
  ),
};
