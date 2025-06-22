import React, { useState, useRef } from "react";
import clsx from "clsx";
import type { TooltipProps } from "./Tooltip.types";
import styles from "./themes/TooltipLight.module.css";

/**
 * Tooltip – Atom hiển thị thông tin khi hover/focus, hỗ trợ position, delay, theme, a11y.
 */
export const Tooltip: React.FC<TooltipProps> = ({
  content,
  children,
  position = "top",
  delay = 0,
  disabled = false,
  className,
}) => {
  const [show, setShow] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleMouseEnter = () => {
    if (disabled) return;
    timerRef.current = setTimeout(() => setShow(true), delay);
  };

  const handleMouseLeave = () => {
    if (timerRef.current) clearTimeout(timerRef.current);
    setShow(false);
  };

  return (
    <span
      className="relative inline-block"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onFocus={handleMouseEnter}
      onBlur={handleMouseLeave}
      tabIndex={0}
      aria-describedby="tooltip"
    >
      {children}
      {show && (
        <span
          role="tooltip"
          id="tooltip"
          className={clsx(
            "absolute z-40 min-w-max px-3 py-1 rounded-lg bg-gray-900 text-white text-xs shadow-xl pointer-events-none animate-fade-in",
            position === "top" && "bottom-full left-1/2 -translate-x-1/2 mb-2",
            position === "right" && "left-full top-1/2 -translate-y-1/2 ml-2",
            position === "bottom" && "top-full left-1/2 -translate-x-1/2 mt-2",
            position === "left" && "right-full top-1/2 -translate-y-1/2 mr-2",
            styles.tooltip,
            className
          )}
        >
          {content}
        </span>
      )}
    </span>
  );
};

export default Tooltip;
