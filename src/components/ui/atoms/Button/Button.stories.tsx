import type { Meta, StoryObj } from "@storybook/react";
import Button from "./Button";
import ButtonOutline from "./variants/ButtonOutline";
import ButtonGhost from "./variants/ButtonGhost";
import ButtonLink from "./variants/ButtonLink";
import IconButton from "./variants/IconButton";

const meta: Meta<typeof Button> = {
  title: "Atoms/Button",
  component: Button,
  tags: ["autodocs"],
  args: {
    children: "Button",
  },
};
export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    variant: "primary",
    children: "Primary",
  },
};
export const Secondary: Story = {
  args: {
    variant: "secondary",
    children: "Secondary",
  },
};
export const Outline = () => <ButtonOutline>Outline</ButtonOutline>;
export const Ghost = () => <ButtonGhost>Ghost</ButtonGhost>;
export const Link = () => <ButtonLink>Button Link</ButtonLink>;

export const WithLeftIcon = () => (
  <Button iconLeft={<span>🔍</span>}>Search</Button>
);

export const WithRightIcon = () => (
  <Button iconRight={<span>➡️</span>}>Next</Button>
);

export const Loading = () => (
  <Button loading>Đang tải...</Button>
);

export const FullWidth = () => (
  <Button fullWidth>Full width</Button>
);

export const PillShape = () => (
  <Button shape="pill">Pill shape</Button>
);

export const OnlyIcon = () => (
  <IconButton aria-label="Search">
    <svg width={20} height={20} fill="none" stroke="currentColor" strokeWidth={2}>
      <circle cx={10} cy={10} r={8} />
      <path d="M18 18l-4-4" />
    </svg>
  </IconButton>
);
