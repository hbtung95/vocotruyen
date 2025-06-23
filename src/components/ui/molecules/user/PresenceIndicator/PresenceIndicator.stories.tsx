import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import PresenceIndicator from "./PresenceIndicator";

const meta: Meta<typeof PresenceIndicator> = {
  title: "Molecules/User/PresenceIndicator",
  component: PresenceIndicator,
  args: {
    status: "online",
    size: 14,
  },
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof PresenceIndicator>;

export const Online: Story = { args: { status: "online" } };
export const Offline: Story = { args: { status: "offline" } };
export const Busy: Story = { args: { status: "busy" } };
export const Away: Story = { args: { status: "away" } };
export const Large: Story = { args: { status: "online", size: 24 } };

export const WithCustomTooltip: Story = {
  args: {
    status: "busy",
    tooltip: "Đang bận (custom tooltip)",
  },
};
