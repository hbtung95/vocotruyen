import React from "react";
import type { LegendProps } from "./Legend.types";
import styles from "./themes/LegendLight.module.css";
import clsx from "clsx";

/**
 * Legend – Atom tiêu đề cho fieldset, section, hỗ trợ size, a11y, style
 */
export const Legend: React.FC<LegendProps> = ({
  children,
  size = "md",
  className,
  ...rest
}) => {
  const sizeClass = {
    sm: styles.sm,
    md: styles.md,
    lg: styles.lg,
  }[size] || styles.md;

  return (
    <legend
      className={clsx(
        "px-2 font-semibold text-accent",
        styles.legend,
        sizeClass,
        className
      )}
      {...rest}
    >
      {children}
    </legend>
  );
};

export default Legend;
