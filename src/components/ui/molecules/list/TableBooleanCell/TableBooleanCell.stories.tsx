import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import TableBooleanCell from "./TableBooleanCell";

const meta: Meta<typeof TableBooleanCell> = {
  title: "Molecules/List/TableBooleanCell",
  component: TableBooleanCell,
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof TableBooleanCell>;

export const Default: Story = {
  args: {
    value: true,
    tooltip: "Kết quả đánh giá",
  },
};

export const FalseValue: Story = {
  args: {
    value: false,
    tooltip: "Kết quả đánh giá",
  },
};

export const Toggleable: Story = {
  render: () => {
    const [val, setVal] = React.useState(true);
    return (
      <TableBooleanCell
        value={val}
        toggleable
        onToggle={setVal}
        trueLabel="Đạt"
        falseLabel="Chưa đạt"
        tooltip="Click để đổi trạng thái"
      />
    );
  },
};

export const Highlight: Story = {
  args: {
    value: true,
    highlight: true,
    tooltip: "Trạng thái nổi bật",
  },
};
