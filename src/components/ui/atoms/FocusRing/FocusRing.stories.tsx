import type { Meta, StoryObj } from "@storybook/react";
import FocusRing from "./FocusRing";

const meta: Meta<typeof FocusRing> = {
  title: "Atoms/FocusRing",
  component: FocusRing,
  tags: ["autodocs"],
};
export default meta;

export const Default = {
  render: () => (
    <div className="flex gap-4 items-center">
      <FocusRing>
        <button className="px-4 py-2 rounded">Bấm tab vào tôi</button>
      </FocusRing>
      <FocusRing color="#ff9800">
        <input className="px-2 py-1 rounded" placeholder="Input cũng được focus ring" />
      </FocusRing>
    </div>
  ),
};
