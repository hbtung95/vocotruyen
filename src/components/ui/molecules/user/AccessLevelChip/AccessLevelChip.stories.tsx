import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import AccessLevelChip from "./AccessLevelChip";

const meta: Meta<typeof AccessLevelChip> = {
  title: "Molecules/User/AccessLevelChip",
  component: AccessLevelChip,
  tags: ["autodocs"],
  args: {
    level: "owner",
  },
};
export default meta;

type Story = StoryObj<typeof AccessLevelChip>;

export const Owner: Story = { args: { level: "owner" } };
export const Admin: Story = { args: { level: "admin" } };
export const Editor: Story = { args: { level: "editor" } };
export const Viewer: Story = { args: { level: "viewer" } };
export const Guest: Story = { args: { level: "guest" } };
export const Readonly: Story = { args: { level: "readonly" } };
export const Limited: Story = { args: { level: "limited" } };
export const Custom: Story = { args: { level: "custom" } };
