import type { Meta, StoryObj } from "@storybook/react";
import { Link } from "./Link";
import LinkExternal from "./variants/LinkExternal";
import LinkButton from "./variants/LinkButton";

const meta: Meta<typeof Link> = {
  title: "Atoms/Link",
  component: Link,
  tags: ["autodocs"],
  args: {
    href: "#",
    children: "Liên kết cơ bản",
  },
};
export default meta;

type Story = StoryObj<typeof Link>;

export const Default: Story = {
  args: { children: "Trang chủ", href: "/" },
};

export const NoUnderline: Story = {
  args: { children: "Không gạch chân", href: "/", underline: false },
};

export const External = () => <LinkExternal href="https://google.com">Google (external)</LinkExternal>;
export const AsButton = () => <LinkButton href="#">Link dạng button</LinkButton>;
export const Disabled: Story = {
  args: { children: "Disabled", href: "/", disabled: true },
};

