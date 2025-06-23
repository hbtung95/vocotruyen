import React, { useState } from "react";
import { Meta, StoryObj } from "@storybook/react";
import Pagination from "./Pagination";

const meta: Meta<typeof Pagination> = {
  title: "Molecules/List/Pagination",
  component: Pagination,
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof Pagination>;

export const Default: Story = {
  render: () => {
    const [page, setPage] = useState(1);
    return (
      <Pagination
        page={page}
        pageSize={10}
        total={100}
        onPageChange={setPage}
      />
    );
  },
};

export const WithPageSize: Story = {
  render: () => {
    const [page, setPage] = useState(1);
    const [size, setSize] = useState(10);
    return (
      <Pagination
        page={page}
        pageSize={size}
        total={87}
        onPageChange={setPage}
        showPageSize
        onPageSizeChange={setSize}
      />
    );
  },
};

export const Disabled: Story = {
  render: () => (
    <Pagination
      page={1}
      pageSize={10}
      total={100}
      onPageChange={() => {}}
      disabled
    />
  ),
};
