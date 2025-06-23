import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import TableLinkCell from "./TableLinkCell";

const meta: Meta<typeof TableLinkCell> = {
  title: "Molecules/List/TableLinkCell",
  component: TableLinkCell,
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof TableLinkCell>;

export const Default: Story = {
  args: {
    value: "https://openai.com",
    highlight: true,
    tooltip: "Truy cập website OpenAI",
  },
};

export const Email: Story = {
  args: {
    value: "support@email.com",
    type: "email",
    tooltip: "Liên hệ hỗ trợ",
  },
};

export const Phone: Story = {
  args: {
    value: "+84912345678",
    type: "phone",
    label: "Gọi ngay",
    tooltip: "Hotline",
  },
};

export const Copyable: Story = {
  args: {
    value: "https://openai.com",
    copyable: true,
  },
};

export const Invalid: Story = {
  args: {
    value: "bad-link",
    invalid: true,
    tooltip: "Link không hợp lệ",
  },
};
