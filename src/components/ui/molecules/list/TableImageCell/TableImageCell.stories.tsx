import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import TableImageCell from "./TableImageCell";

const meta: Meta<typeof TableImageCell> = {
  title: "Molecules/List/TableImageCell",
  component: TableImageCell,
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof TableImageCell>;

const imgUrls = [
  "https://randomuser.me/api/portraits/men/45.jpg",
  "https://randomuser.me/api/portraits/women/52.jpg",
  "https://randomuser.me/api/portraits/men/64.jpg",
  "https://randomuser.me/api/portraits/women/55.jpg",
];

export const Default: Story = {
  args: {
    images: imgUrls,
    multi: true,
    max: 3,
    shape: "circle",
  },
};

export const Square: Story = {
  args: {
    images: imgUrls,
    shape: "square",
    max: 2,
  },
};

export const Rounded: Story = {
  args: {
    images: imgUrls,
    shape: "rounded",
    max: 2,
  },
};

export const NoImages: Story = {
  args: {
    images: [],
  },
};
