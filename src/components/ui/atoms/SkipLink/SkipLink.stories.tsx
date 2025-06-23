import type { Meta, StoryObj } from "@storybook/react";
import SkipLink from "./SkipLink";

const meta: Meta<typeof SkipLink> = {
  title: "Atoms/SkipLink",
  component: SkipLink,
  tags: ["autodocs"],
};
export default meta;

export const Default = {
  render: () => (
    <div>
      <SkipLink href="#main" />
      <div style={{ height: "100vh" }} />
      <main id="main">
        <h1>Nội dung chính</h1>
        <p>Bạn vừa bỏ qua đến main content.</p>
      </main>
    </div>
  ),
};
