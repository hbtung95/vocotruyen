import React, { useRef, useState } from "react";
import clsx from "clsx";
import type { PopoverProps } from "./Popover.types";
import styles from "./themes/PopoverLight.module.css";

/**
 * Popover – Atom popup nổi bên cạnh trigger
 */
export const Popover: React.FC<PopoverProps> = ({
  content,
  children,
  position = "bottom",
  openOnHover = false,
  className,
}) => {
  const [open, setOpen] = useState(false);
  const triggerRef = useRef<HTMLDivElement>(null);

  const toggle = () => setOpen(!open);

  return (
    <span
      ref={triggerRef}
      className="relative inline-block"
      onClick={!openOnHover ? toggle : undefined}
      onMouseEnter={openOnHover ? () => setOpen(true) : undefined}
      onMouseLeave={openOnHover ? () => setOpen(false) : undefined}
      tabIndex={0}
    >
      {children}
      {open && (
        <span
          className={clsx(
            "absolute z-50 min-w-max px-4 py-2 rounded-xl bg-white shadow-xl border border-gray-200 dark:bg-gray-900 dark:border-gray-700 text-sm",
            position === "bottom" && "top-full left-1/2 -translate-x-1/2 mt-2",
            position === "top" && "bottom-full left-1/2 -translate-x-1/2 mb-2",
            position === "left" && "right-full top-1/2 -translate-y-1/2 mr-2",
            position === "right" && "left-full top-1/2 -translate-y-1/2 ml-2",
            styles.popover,
            className
          )}
          role="dialog"
        >
          {content}
        </span>
      )}
    </span>
  );
};

export default Popover;
