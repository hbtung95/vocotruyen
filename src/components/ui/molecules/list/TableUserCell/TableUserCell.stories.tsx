import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import TableUserCell from "./TableUserCell";

const meta: Meta<typeof TableUserCell> = {
  title: "Molecules/List/TableUserCell",
  component: TableUserCell,
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof TableUserCell>;

const users = [
  { id: "a", name: "Nguyễn Văn A", avatar: "https://randomuser.me/api/portraits/men/47.jpg", email: "a@email.com", role: "Admin", status: "active" },
  { id: "b", name: "Lê Thị B", avatar: "https://randomuser.me/api/portraits/women/53.jpg", email: "b@email.com", role: "User", status: "offline" },
  { id: "c", name: "Trần Văn C", avatar: "", email: "c@email.com", role: "Editor", status: "inactive" },
];

export const Default: Story = {
  args: {
    users,
    showEmail: true,
    showRole: true,
    multi: true,
    max: 2,
  },
};

export const StatusOnly: Story = {
  args: {
    users,
    showEmail: false,
    showRole: false,
    showStatus: true,
    max: 3,
  },
};

export const NoUsers: Story = {
  args: {
    users: [],
  },
};
