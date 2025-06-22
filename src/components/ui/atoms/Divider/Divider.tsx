import React from "react";
import clsx from "clsx";
import type { DividerProps } from "./Divider.types";
import styles from "./themes/DividerLight.module.css";

/**
 * Divider – Atom phân cách nội dung, hỗ trợ horizontal/vertical, dashed, theme.
 */
export const Divider: React.FC<DividerProps> = ({
  orientation = "horizontal",
  dashed = false,
  thickness = 1,
  className,
  ...rest
}) => {
  if (orientation === "vertical") {
    return (
      <span
        role="separator"
        aria-orientation="vertical"
        className={clsx(
          "inline-block h-full align-middle",
          styles.vertical,
          dashed ? styles.dashed : styles.solid,
          className
        )}
        style={{
          borderLeftWidth: thickness,
        }}
        {...rest}
      />
    );
  }
  // Horizontal
  return (
    <hr
      role="separator"
      aria-orientation="horizontal"
      className={clsx(
        "my-2 w-full",
        styles.horizontal,
        dashed ? styles.dashed : styles.solid,
        className
      )}
      style={{
        borderTopWidth: thickness,
      }}
      {...rest}
    />
  );
};

export default Divider;
