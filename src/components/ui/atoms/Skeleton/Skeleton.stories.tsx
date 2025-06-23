import type { Meta, StoryObj } from "@storybook/react";
import Skeleton from "./Skeleton";

const meta: Meta<typeof Skeleton> = {
  title: "Atoms/Skeleton",
  component: Skeleton,
  tags: ["autodocs"],
};
export default meta;

export const Variants = {
  render: () => (
    <div className="flex gap-3 items-center">
      <Skeleton variant="text" width={80} />
      <Skeleton variant="rect" width={40} height={20} />
      <Skeleton variant="circle" width={32} />
      <Skeleton variant="avatar" />
    </div>
  ),
};
export const WithCustomSize = {
  render: () => (
    <Skeleton width={160} height={32} radius={12} />
  ),
};
export const NoAnimate = {
  render: () => <Skeleton animate={false} width={80} />,
};
