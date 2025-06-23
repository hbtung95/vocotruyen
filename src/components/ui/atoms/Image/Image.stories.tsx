import type { Meta, StoryObj } from "@storybook/react";
import Image from "./Image";

const meta: Meta<typeof Image> = {
  title: "Atoms/Image",
  component: Image,
  tags: ["autodocs"],
};
export default meta;

export const Default = {
  render: () => (
    <div className="w-24 h-24">
      <Image src="https://randomuser.me/api/portraits/men/1.jpg" alt="Demo" />
    </div>
  ),
};

export const WithGlass = {
  render: () => (
    <div className="w-24 h-24">
      <Image src="https://randomuser.me/api/portraits/women/23.jpg" alt="Glass" glass />
    </div>
  ),
};

export const WithPlaceholderFallback = {
  render: () => (
    <div className="w-24 h-24">
      <Image
        src="broken-url"
        alt="Plh"
        placeholder={<span className="block w-full h-full bg-gray-200 animate-pulse rounded"></span>}
        fallback={<span className="block w-full h-full text-red-400 flex items-center justify-center">Ảnh lỗi</span>}
      />
    </div>
  ),
};
