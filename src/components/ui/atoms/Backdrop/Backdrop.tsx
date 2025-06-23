import React from "react";
import type { BackdropProps } from "./Backdrop.types";
import styles from "./themes/BackdropLight.module.css";
import clsx from "clsx";

/**
 * Backdrop – Atom overlay cho modal, popover, loading... Chuẩn MacOS, glass, theme.
 */
export const Backdrop: React.FC<BackdropProps> = ({
  open = true,
  color = "rgba(30,32,37,0.40)", // mặc định glass MacOS
  opacity = 0.5,
  glass = true,
  className,
  zIndex = 50,
  style,
  ...rest
}) => {
  if (!open) return null;
  return (
    <div
      className={clsx(
        "fixed inset-0 w-full h-full left-0 top-0",
        glass && styles.backdropGlass,
        styles.backdrop,
        className
      )}
      style={{
        background: color,
        opacity,
        zIndex,
        ...style,
      }}
      aria-hidden="true"
      {...rest}
    />
  );
};

export default Backdrop;
