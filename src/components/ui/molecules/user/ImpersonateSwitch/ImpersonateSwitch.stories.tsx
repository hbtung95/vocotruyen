import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import ImpersonateSwitch from "./ImpersonateSwitch";

const meta: Meta<typeof ImpersonateSwitch> = {
  title: "Molecules/User/ImpersonateSwitch",
  component: ImpersonateSwitch,
  tags: ["autodocs"],
  args: {
    impersonatedName: "Nguyễn Văn B",
    adminName: "Admin Dương Tùng",
    showBanner: true,
    onReturnToAdmin: () => alert("Return to admin!"),
  },
};
export default meta;

type Story = StoryObj<typeof ImpersonateSwitch>;

export const Default: Story = {};

export const WithoutBanner: Story = {
  args: { showBanner: false },
};
