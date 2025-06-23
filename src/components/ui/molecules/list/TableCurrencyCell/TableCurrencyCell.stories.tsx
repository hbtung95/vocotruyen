import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import TableCurrencyCell from "./TableCurrencyCell";

const meta: Meta<typeof TableCurrencyCell> = {
  title: "Molecules/List/TableCurrencyCell",
  component: TableCurrencyCell,
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof TableCurrencyCell>;

export const VND: Story = {
  args: {
    value: 1250000,
    currency: "VND",
    showSymbol: true,
    highlight: true,
    tooltip: "Số tiền VNĐ",
  },
};

export const USD: Story = {
  args: {
    value: 100.5,
    currency: "USD",
    locale: "en-US",
    showSymbol: true,
    bold: true,
    tooltip: "Số tiền USD",
  },
};

export const Negative: Story = {
  args: {
    value: -378,
    currency: "USD",
    showColor: true,
    tooltip: "Chi phí âm",
  },
};

export const Copyable: Story = {
  args: {
    value: 999999,
    currency: "VND",
    copyable: true,
    tooltip: "Click để copy",
  },
};

export const Error: Story = {
  args: {
    value: 33333,
    error: true,
    tooltip: "Lỗi giá trị",
  },
};
