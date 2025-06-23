import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import StickyHeader from "./StickyHeader";

const meta: Meta<typeof StickyHeader> = {
  title: "Molecules/List/StickyHeader",
  component: StickyHeader,
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof StickyHeader>;

export const Default: Story = {
  render: () => (
    <div style={{ height: 800, background: "#f4f8fe" }}>
      <StickyHeader>
        <div className="px-6 py-3 font-semibold border-b">Bảng điểm giải đấu</div>
      </StickyHeader>
      <div style={{ height: 1200, paddingTop: 30 }}>Nội dung cuộn dài...</div>
    </div>
  ),
};

export const WithShadow: Story = {
  render: () => (
    <div style={{ height: 800 }}>
      <StickyHeader shadowOnScroll>
        <div className="px-5 py-2 bg-white">Sticky có bóng mờ khi dính lên top</div>
      </StickyHeader>
      <div style={{ height: 1000, paddingTop: 25 }}>...</div>
    </div>
  ),
};
