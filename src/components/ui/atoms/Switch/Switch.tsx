import React from "react";
import clsx from "clsx";
import type { SwitchProps } from "./Switch.types";
import styles from "./themes/SwitchLight.module.css";

/**
 * Switch – Atom chuyển trạng thái on/off, a11y, theme, variant.
 */
export const Switch: React.FC<SwitchProps> = ({
  label,
  checked = false,
  disabled = false,
  onChange,
  className,
  ...rest
}) => (
  <label
    className={clsx(
      "inline-flex items-center gap-2 cursor-pointer select-none",
      disabled && "opacity-60 cursor-not-allowed",
      className
    )}
  >
    <input
      type="checkbox"
      role="switch"
      checked={checked}
      disabled={disabled}
      onChange={onChange}
      className="sr-only"
      {...rest}
    />
    <span
      className={clsx(
        "w-10 h-6 flex items-center rounded-full transition-colors",
        checked ? "bg-accent" : "bg-gray-300 dark:bg-gray-700",
        styles.switchTrack
      )}
      aria-checked={checked}
      aria-disabled={disabled}
    >
      <span
        className={clsx(
          "block w-5 h-5 rounded-full bg-white shadow transition-transform",
          checked ? "translate-x-4" : "translate-x-1",
          styles.switchThumb
        )}
      />
    </span>
    {label && <span className="text-sm">{label}</span>}
  </label>
);

export default Switch;
