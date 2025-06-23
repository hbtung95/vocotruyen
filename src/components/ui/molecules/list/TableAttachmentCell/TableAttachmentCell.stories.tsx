import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import TableAttachmentCell from "./TableAttachmentCell";

const meta: Meta<typeof TableAttachmentCell> = {
  title: "Molecules/List/TableAttachmentCell",
  component: TableAttachmentCell,
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof TableAttachmentCell>;

const attachments = [
  {
    key: "pdf",
    name: "Hợp đồng.pdf",
    url: "#",
    type: "pdf",
    size: 204800,
    onDownload: () => alert("Download PDF!"),
    tooltip: "Xem hợp đồng",
  },
  {
    key: "img",
    name: "Ảnh sản phẩm.jpg",
    url: "#",
    type: "jpg",
    size: 80233,
    onPreview: () => alert("Xem ảnh!"),
  },
  {
    key: "zip",
    name: "Toàn bộ tài liệu.zip",
    url: "#",
    type: "zip",
    size: 12010455,
    error: true,
  },
];

export const Default: Story = {
  args: {
    attachments,
    max: 2,
    showSize: true,
    highlight: true,
  },
};

export const WithPreview: Story = {
  args: {
    attachments,
    max: 3,
    showIcon: true,
    showSize: false,
  },
};

export const Disabled: Story = {
  args: {
    attachments: [{ key: "pdf", name: "Hợp đồng.pdf", url: "#", type: "pdf", size: 20000, disabled: true }],
    disabled: true,
  },
};
