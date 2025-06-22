import React from "react";
import { Icon, IconProps } from "../Icon";

/**
 * IconButton – Chỉ dùng icon làm nút bấm (kèm ripple hoặc hiệu ứng focus)
 */
const IconButton: React.FC<
  Omit<IconProps, "aria-label"> & { "aria-label": string; onClick?: () => void }
> = ({ "aria-label": ariaLabel, ...props }) => (
  <button
    type="button"
    className="p-2 rounded-full bg-transparent hover:bg-accent/10 focus:outline-none focus:ring-2 focus:ring-accent transition"
    aria-label={ariaLabel}
  >
    <Icon {...props} />
  </button>
);

export default IconButton;
