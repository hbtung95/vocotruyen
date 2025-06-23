import type { Meta, StoryObj } from "@storybook/react";
import { Tag } from "./Tag";
import TagClosable from "./variants/TagClosable";
import TagStatus from "./variants/TagStatus";
import { Icon } from "../../Icon";

const meta: Meta<typeof Tag> = {
  title: "Atoms/Tag",
  component: Tag,
  tags: ["autodocs"],
  args: {
    children: "Đang hoạt động",
  },
};
export default meta;

type Story = StoryObj<typeof Tag>;

export const Default: Story = { args: {} };

export const Closable = () => <TagClosable>Chưa xác nhận</TagClosable>;

export const Success = () => <TagStatus status="success">Đã xác nhận</TagStatus>;
export const Error = () => <TagStatus status="error">Lỗi</TagStatus>;
export const Warning = () => <TagStatus status="warning">Cảnh báo</TagStatus>;
export const Info = () => <TagStatus status="info">Thông tin</TagStatus>;

export const WithIcon = () => (
  <Tag leftIcon={<Icon name="info" size={14} />} rightIcon={<Icon name="check" size={14} />}>
    Thông báo
  </Tag>
);

