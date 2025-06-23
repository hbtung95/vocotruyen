import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import BadgeProgressionTracker from "./BadgeProgressionTracker";
import { AwardIcon, StarIcon } from "@/components/ui/atoms/Icon"; // Giả sử có sẵn

const meta: Meta<typeof BadgeProgressionTracker> = {
  title: "Molecules/User/BadgeProgressionTracker",
  component: BadgeProgressionTracker,
  tags: ["autodocs"],
  args: {
    steps: [
      { label: "Beginner", icon: <StarIcon />, achieved: true, dateAchieved: "2024-01-01" },
      { label: "Skilled", icon: <StarIcon />, achieved: true, dateAchieved: "2024-03-12" },
      { label: "Expert", icon: <AwardIcon />, achieved: false },
      { label: "Master", icon: <AwardIcon />, achieved: false },
    ],
    currentStep: 2,
    progressPercent: 50,
  },
};
export default meta;

type Story = StoryObj<typeof BadgeProgressionTracker>;

export const Default: Story = {};
export const Complete: Story = {
  args: {
    steps: [
      { label: "Beginner", achieved: true },
      { label: "Skilled", achieved: true },
      { label: "Expert", achieved: true },
      { label: "Master", achieved: true },
    ],
    progressPercent: 100,
    currentStep: 4,
  },
};
export const DarkMode: Story = {
  parameters: { backgrounds: { default: "dark" } },
};
