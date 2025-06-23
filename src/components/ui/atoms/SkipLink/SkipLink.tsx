import React from "react";
import type { SkipLinkProps } from "./SkipLink.types";
import styles from "./themes/SkipLinkLight.module.css";

/**
 * SkipLink – Atom accessibility, nhảy nhanh tới main content bằng phím Tab.
 */
export const SkipLink: React.FC<SkipLinkProps> = ({
  href,
  children = "Bỏ qua đến nội dung chính",
  className,
  ...rest
}) => (
  <a
    href={href}
    className={[styles.skipLink, className].filter(Boolean).join(" ")}
    tabIndex={0}
    {...rest}
  >
    {children}
  </a>
);

export default SkipLink;
