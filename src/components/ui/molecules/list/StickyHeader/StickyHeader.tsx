import React from "react";
import { StickyHeaderProps } from "./StickyHeader.types";
import styles from "./themes/StickyHeader.module.css";
import { getZIndex } from "./StickyHeader.utils";
import { useStickyShadow } from "./StickyHeader.hooks";

const StickyHeader: React.FC<StickyHeaderProps> = ({
  children,
  top = 0,
  zIndex = 120,
  className = "",
  style = {},
  shadowOnScroll = true,
}) => {
  const [ref, isStuck] = useStickyShadow(top);

  return (
    <div
      ref={ref}
      className={`
        ${styles.stickyHeader}
        ${shadowOnScroll && isStuck ? styles.stuckShadow : ""}
        ${className}
      `}
      style={{
        top,
        zIndex: getZIndex(zIndex),
        ...style,
      }}
      data-testid="sticky-header"
    >
      {children}
    </div>
  );
};

export default StickyHeader;
