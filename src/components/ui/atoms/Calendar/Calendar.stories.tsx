import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Calendar } from "./Calendar";

const meta: Meta<typeof Calendar> = {
  title: "Atoms/Calendar",
  component: Calendar,
  tags: ["autodocs"],
};
export default meta;

export const Default = () => {
  const [selected, setSelected] = useState<Date | undefined>();
  return <Calendar selected={selected} onSelect={setSelected} />;
};
