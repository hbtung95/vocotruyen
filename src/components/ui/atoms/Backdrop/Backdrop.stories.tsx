import type { Meta, StoryObj } from "@storybook/react";
import Backdrop from "./Backdrop";

const meta: Meta<typeof Backdrop> = {
  title: "Atoms/Backdrop",
  component: Backdrop,
  tags: ["autodocs"],
  args: { open: true }
};
export default meta;

export const Default = {
  render: () => (
    <div>
      <Backdrop open />
      <div className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-[60] bg-white/90 px-8 py-5 rounded-xl shadow-xl">
        Nội dung nổi trên backdrop
      </div>
    </div>
  ),
};

export const NoGlass = {
  render: () => <Backdrop open glass={false} color="rgba(0,0,0,0.32)" />,
};

export const CustomColor = {
  render: () => <Backdrop open color="rgba(30,160,240,0.20)" />,
};
