import type { Meta, StoryObj } from "@storybook/react";
import { Select } from "./Select";
import SelectSearch from "./variants/SelectSearch";
import SelectIcon from "./variants/SelectIcon";
import { Icon } from "../../Icon";

const meta: Meta<typeof Select> = {
  title: "Atoms/Select",
  component: Select,
  tags: ["autodocs"],
  args: {
    options: [
      { label: "Lựa chọn A", value: "a" },
      { label: "Lựa chọn B", value: "b" },
    ],
    placeholder: "Chọn một tuỳ chọn...",
  },
};
export default meta;

type Story = StoryObj<typeof Select>;

export const Default: Story = {
  args: {},
};

export const WithLabel: Story = {
  args: { label: "Danh sách", options: [{ label: "A", value: "a" }, { label: "B", value: "b" }] },
};

export const Error: Story = {
  args: { error: "Chưa chọn!", options: [{ label: "A", value: "a" }, { label: "B", value: "b" }] },
};

export const WithIcon = () => (
  <SelectIcon
    options={[
      { label: "Admin", value: "admin", icon: <Icon name="user" /> },
      { label: "Khách", value: "guest", icon: <Icon name="userGroup" /> },
    ]}
  />
);

export const Search = () => (
  <SelectSearch
    options={[
      { label: "Apple", value: "apple" },
      { label: "Banana", value: "banana" },
      { label: "Orange", value: "orange" },
    ]}
  />
);
