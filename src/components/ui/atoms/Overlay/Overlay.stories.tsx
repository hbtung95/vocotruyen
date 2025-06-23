import type { Meta, StoryObj } from "@storybook/react";
import Overlay from "./Overlay";

const meta: Meta<typeof Overlay> = {
  title: "Atoms/Overlay",
  component: Overlay,
  tags: ["autodocs"],
  args: { open: true }
};
export default meta;

export const Default = {
  render: () => (
    <Overlay open>
      <div className="bg-white/90 px-8 py-5 rounded-xl shadow-xl z-[51]">
        Nội dung nổi trên overlay
      </div>
    </Overlay>
  ),
};

export const Centered = {
  render: () => (
    <Overlay open center>
      <div className="bg-white/80 px-8 py-5 rounded-2xl shadow-xl">
        Centered content
      </div>
    </Overlay>
  ),
};

export const WithGlass = {
  render: () => (
    <Overlay open glass>
      <div className="bg-white/90 px-8 py-5 rounded-xl shadow-xl">
        Glass overlay
      </div>
    </Overlay>
  ),
};
