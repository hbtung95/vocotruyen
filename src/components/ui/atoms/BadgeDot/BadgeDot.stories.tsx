import type { Meta, StoryObj } from "@storybook/react";
import BadgeDot from "./BadgeDot";

const meta: Meta<typeof BadgeDot> = {
  title: "Atoms/BadgeDot",
  component: BadgeDot,
  tags: ["autodocs"],
};
export default meta;

export const Dot = { args: {} };
export const DotAccent = { args: { status: "accent" } };
export const DotSuccess = { args: { status: "success" } };
export const DotWarning = { args: { status: "warning" } };
export const DotInfo = { args: { status: "info" } };
export const DotNeutral = { args: { status: "neutral" } };
export const WithCount = { args: { count: 3 } };
export const LargeCount = { args: { count: 99 } };
export const OverMax = { args: { count: 120, max: 99 } };
