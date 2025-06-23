import React from "react";
import type { VisuallyHiddenProps } from "./VisuallyHidden.types";
import styles from "./themes/VisuallyHiddenLight.module.css";

/**
 * VisuallyHidden – Atom ẩn nội dung khỏi mắt thường nhưng hiển thị cho screen reader (accessibility)
 */
export const VisuallyHidden: React.FC<VisuallyHiddenProps> = ({
  children,
  className,
  ...rest
}) => (
  <span
    className={[styles.visuallyHidden, className].filter(Boolean).join(" ")}
    {...rest}
  >
    {children}
  </span>
);

export default VisuallyHidden;
