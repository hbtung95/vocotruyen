import type { Meta, StoryObj } from "@storybook/react";
import { Breadcrumb } from "./Breadcrumb";

const meta: Meta<typeof Breadcrumb> = {
  title: "Atoms/Breadcrumb",
  component: Breadcrumb,
  tags: ["autodocs"],
};
export default meta;

export const Default = {
  args: {
    items: [
      { label: "Trang chủ", href: "/" },
      { label: "Dự án", href: "/du-an" },
      { label: "Chi tiết" },
    ],
  },
};
