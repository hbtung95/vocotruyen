import type { Meta, StoryObj } from "@storybook/react";
import Fieldset from "./Fieldset";

const meta: Meta<typeof Fieldset> = {
  title: "Atoms/Fieldset",
  component: Fieldset,
  tags: ["autodocs"],
};
export default meta;

export const Default = {
  render: () => (
    <Fieldset legend="Đăng ký tài khoản">
      <div className="mb-3">
        <label htmlFor="email">Email</label>
        <input id="email" className="block border px-2 py-1 rounded w-full" />
      </div>
      <div>
        <label htmlFor="pw">Mật khẩu</label>
        <input id="pw" className="block border px-2 py-1 rounded w-full" type="password" />
      </div>
    </Fieldset>
  ),
};

export const Disabled = {
  render: () => (
    <Fieldset legend="Chỉ đọc" disabled>
      <input className="block border px-2 py-1 rounded w-full" value="Read only" readOnly />
    </Fieldset>
  ),
};
