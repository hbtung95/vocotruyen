import React from "react";
import type { OverlayProps } from "./Overlay.types";
import styles from "./themes/OverlayLight.module.css";
import clsx from "clsx";

/**
 * Overlay – Atom hiển thị lớp phủ + children nổi phía trên (dùng cho modal, loading, drawer, popover...)
 */
export const Overlay: React.FC<OverlayProps> = ({
  open = true,
  color = "rgba(30,32,37,0.40)",
  opacity = 0.5,
  glass = true,
  className,
  zIndex = 50,
  style,
  children,
  center = false,
  onClick,
  ...rest
}) => {
  if (!open) return null;
  return (
    <div
      className={clsx(
        "fixed inset-0 left-0 top-0 w-full h-full flex",
        glass && styles.overlayGlass,
        styles.overlay,
        center ? "items-center justify-center" : "",
        className
      )}
      style={{
        background: color,
        opacity,
        zIndex,
        ...style,
      }}
      aria-modal="true"
      role="presentation"
      onClick={onClick}
      {...rest}
    >
      {children}
    </div>
  );
};

export default Overlay;
