import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import RoleBadge from "./RoleBadge";

const meta: Meta<typeof RoleBadge> = {
  title: "Molecules/User/RoleBadge",
  component: RoleBadge,
  tags: ["autodocs"],
  args: {
    role: "admin",
  },
};
export default meta;

type Story = StoryObj<typeof RoleBadge>;

export const Admin: Story = { args: { role: "admin" } };
export const Manager: Story = { args: { role: "manager" } };
export const Referee: Story = { args: { role: "referee" } };
export const Coach: Story = { args: { role: "coach" } };
export const Athlete: Story = { args: { role: "athlete" } };
export const Guest: Story = { args: { role: "guest" } };
export const Viewer: Story = { args: { role: "viewer" } };
