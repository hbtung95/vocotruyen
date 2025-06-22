import React from "react";
import clsx from "clsx";
import type { RadioProps } from "./Radio.types";
import styles from "./themes/RadioLight.module.css";

/**
 * Radio – Atom radio button chuẩn a11y, theme, variant.
 */
export const Radio: React.FC<RadioProps> = ({
  label,
  value,
  checked = false,
  disabled = false,
  onChange,
  className,
  ...rest
}) => (
  <label
    className={clsx(
      "inline-flex items-center gap-2 cursor-pointer select-none",
      disabled && "opacity-50 cursor-not-allowed",
      className
    )}
  >
    <input
      type="radio"
      value={value}
      checked={checked}
      disabled={disabled}
      onChange={onChange}
      className={clsx(
        "w-5 h-5 rounded-full border border-gray-400 focus:ring-2 focus:ring-accent",
        styles.radio
      )}
      {...rest}
    />
    <span className="text-sm">{label}</span>
  </label>
);

export default Radio;
