import type { Meta, StoryObj } from "@storybook/react";
import VisuallyHidden from "./VisuallyHidden";

const meta: Meta<typeof VisuallyHidden> = {
  title: "Atoms/VisuallyHidden",
  component: VisuallyHidden,
  tags: ["autodocs"],
};
export default meta;

export const Default = {
  render: () => (
    <div>
      <button>
        Visible Button
        <VisuallyHidden> (Thông báo chỉ dành cho screen reader)</VisuallyHidden>
      </button>
      <p>
        <VisuallyHidden>This text is invisible visually, but screen readers can access it.</VisuallyHidden>
      </p>
    </div>
  ),
};
