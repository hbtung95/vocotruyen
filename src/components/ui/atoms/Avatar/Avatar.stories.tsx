import type { Meta, StoryObj } from "@storybook/react";
import { Avatar } from "./Avatar";
import AvatarWithStatus from "./variants/AvatarWithStatus";
import AvatarRounded from "./variants/AvatarRounded";

const meta: Meta<typeof Avatar> = {
  title: "Atoms/Avatar",
  component: Avatar,
  tags: ["autodocs"],
  args: {
    alt: "Tony",
    size: "md",
  },
};
export default meta;

type Story = StoryObj<typeof Avatar>;

export const Default: Story = {
  args: { src: "https://randomuser.me/api/portraits/men/11.jpg", alt: "Tony" },
};

export const Placeholder: Story = {
  args: { src: "", alt: "T" },
};

export const Small: Story = {
  args: { size: "sm", src: "https://randomuser.me/api/portraits/women/11.jpg" },
};

export const Large: Story = {
  args: { size: "lg", src: "https://randomuser.me/api/portraits/men/12.jpg" },
};

export const WithStatus = () => (
  <AvatarWithStatus src="https://randomuser.me/api/portraits/men/10.jpg" alt="Tony" status="online" />
);

export const Rounded = () => (
  <AvatarRounded src="https://randomuser.me/api/portraits/men/13.jpg" alt="Admin" />
);

