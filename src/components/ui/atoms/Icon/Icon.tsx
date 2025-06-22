import React from "react";
import { ICONS } from "./icons";
import type { IconProps } from "./Icon.types";
import styles from "./themes/IconLight.module.css";

/**
 * Icon atom – render SVG theo tên, hỗ trợ theme, size, color, a11y
 */
export const Icon: React.FC<IconProps> = ({
  name,
  size = "md",
  color = "currentColor",
  className,
  "aria-label": ariaLabel,
  ...rest
}) => {
  const IconSvg = ICONS[name as keyof typeof ICONS];
  if (!IconSvg) return null;

  // Xử lý size chuẩn
  const pixel =
    size === "sm" ? 16 : size === "md" ? 20 : size === "lg" ? 24 : size || 20;

  return (
    <span
      className={className}
      aria-label={ariaLabel}
      aria-hidden={ariaLabel ? undefined : true}
      role={ariaLabel ? "img" : undefined}
    >
      <IconSvg size={pixel} color={color} {...rest} />
    </span>
  );
};

export default Icon;
