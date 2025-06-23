import type { Meta, StoryObj } from "@storybook/react";
import AvatarGroup from "./AvatarGroup";

const sample = [
  { src: "https://randomuser.me/api/portraits/men/32.jpg", alt: "Hùng" },
  { src: "https://randomuser.me/api/portraits/women/44.jpg", alt: "Lan" },
  { src: "https://randomuser.me/api/portraits/men/53.jpg", alt: "Khoa" },
  { src: "https://randomuser.me/api/portraits/men/87.jpg", alt: "Bảo" },
  { src: "https://randomuser.me/api/portraits/women/23.jpg", alt: "An" },
  { src: "https://randomuser.me/api/portraits/women/98.jpg", alt: "Mai" }
];

const meta: Meta<typeof AvatarGroup> = {
  title: "Atoms/AvatarGroup",
  component: AvatarGroup,
  tags: ["autodocs"],
};
export default meta;

export const Default = {
  args: { avatars: sample }
};
export const CustomSize = {
  args: { avatars: sample, size: 48 }
};
export const WithMax = {
  args: { avatars: sample, max: 3 }
};
export const CustomOverlap = {
  args: { avatars: sample, overlap: -24 }
};
