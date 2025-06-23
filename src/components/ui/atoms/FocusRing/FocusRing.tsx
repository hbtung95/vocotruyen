import React, { useRef, useState } from "react";
import type { FocusRingProps } from "./FocusRing.types";
import styles from "./themes/FocusRingLight.module.css";
import clsx from "clsx";

/**
 * FocusRing – Atom bọc element, thêm hiệu ứng viền khi focus (accessibility)
 */
export const FocusRing: React.FC<FocusRingProps> = ({
  children,
  color = "#007aff", // MacOS blue
  width = 2,
  className,
  ...rest
}) => {
  const [focused, setFocused] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // Clone child để truyền onFocus/onBlur vào element con
  const child = React.Children.only(children);
  const handleFocus = (e: React.FocusEvent) => {
    setFocused(true);
    // Nếu child có onFocus thì gọi
    if (typeof (child as any).props.onFocus === "function") {
      (child as any).props.onFocus(e);
    }
  };
  const handleBlur = (e: React.FocusEvent) => {
    setFocused(false);
    if (typeof (child as any).props.onBlur === "function") {
      (child as any).props.onBlur(e);
    }
  };

  return (
    <div
      ref={ref}
      className={clsx(styles.focusRing, className)}
      style={
        focused
          ? {
              boxShadow: `0 0 0 ${width}px ${color}`,
              borderRadius: 8,
              transition: "box-shadow 0.15s",
            }
          : undefined
      }
      {...rest}
    >
      {React.cloneElement(child as React.ReactElement, {
        onFocus: handleFocus,
        onBlur: handleBlur,
      })}
    </div>
  );
};

export default FocusRing;
