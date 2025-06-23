import React, { useState } from "react";
import { Meta, StoryObj } from "@storybook/react";
import SavedViewMenu from "./SavedViewMenu";

const meta: Meta<typeof SavedViewMenu> = {
  title: "Molecules/List/SavedViewMenu",
  component: SavedViewMenu,
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof SavedViewMenu>;

const viewIcons = [
  <span role="img" aria-label="All">📋</span>,
  <span role="img" aria-label="Final">🏆</span>,
  <span role="img" aria-label="Draft">📝</span>,
];

const views = [
  { id: "all", name: "Tất cả", icon: viewIcons[0] },
  { id: "final", name: "Chung kết", isDefault: true, icon: viewIcons[1] },
  { id: "draft", name: "Bản nháp", icon: viewIcons[2] },
];

export const Default: Story = {
  render: () => {
    const [currentId, setCurrentId] = useState("all");
    return (
      <SavedViewMenu
        views={views}
        currentId={currentId}
        onSelect={setCurrentId}
        onAdd={() => alert("Tạo view mới!")}
        onRename={id => alert("Rename " + id)}
        onDelete={id => alert("Delete " + id)}
        onDuplicate={id => alert("Duplicate " + id)}
        onSetDefault={id => alert("Set default " + id)}
      />
    );
  },
};
