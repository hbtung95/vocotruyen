import React from "react";
import { ReorderHandleProps } from "./ReorderHandle.types";
import styles from "./themes/ReorderHandle.module.css";
import { getHandleLabel } from "./ReorderHandle.utils";
import { useDragActive } from "./ReorderHandle.hooks";

const DefaultIcon = (
  <span className={styles.icon} aria-hidden>
    {/* Unicode “vertical grip” (three bars) */}
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <rect x="4" y="5" width="10" height="2" rx="1" fill="currentColor"/>
      <rect x="4" y="8" width="10" height="2" rx="1" fill="currentColor"/>
      <rect x="4" y="11" width="10" height="2" rx="1" fill="currentColor"/>
    </svg>
  </span>
);

const ReorderHandle: React.FC<ReorderHandleProps> = ({
  label,
  icon,
  onMouseDown,
  onTouchStart,
  className = "",
  tabIndex = 0,
  disabled = false,
}) => {
  const { ref, isDraggable } = useDragActive(disabled);

  return (
    <div
      ref={ref}
      className={`
        ${styles.handleWrap}
        ${disabled ? styles.disabled : ""}
        ${className}
      `}
      tabIndex={tabIndex}
      role="button"
      aria-label={getHandleLabel(label)}
      title={getHandleLabel(label)}
      draggable={!disabled}
      aria-disabled={disabled}
      onMouseDown={disabled ? undefined : onMouseDown}
      onTouchStart={disabled ? undefined : onTouchStart}
      style={{ pointerEvents: disabled ? "none" : "auto" }}
      data-testid="reorder-handle"
    >
      {icon || DefaultIcon}
    </div>
  );
};

export default ReorderHandle;
