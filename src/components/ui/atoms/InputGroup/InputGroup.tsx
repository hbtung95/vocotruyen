import React from "react";
import type { InputGroupProps } from "./InputGroup.types";
import styles from "./themes/InputGroupLight.module.css";
import clsx from "clsx";

/**
 * InputGroup – Atom group input + icon/button/label... (giống Bootstrap input-group)
 */
export const InputGroup: React.FC<InputGroupProps> = ({
  children,
  prepend,
  append,
  fullWidth = true,
  className,
  ...rest
}) => (
  <div
    className={clsx(
      "flex items-stretch rounded-xl border border-gray-300 bg-white shadow-sm focus-within:ring-2 focus-within:ring-accent",
      styles.group,
      fullWidth && "w-full",
      className
    )}
    {...rest}
  >
    {prepend && (
      <span
        className={clsx(
          "flex items-center px-3 bg-gray-100 border-r border-gray-300 text-gray-500",
          styles.prepend
        )}
      >
        {prepend}
      </span>
    )}
    <div className={clsx("flex-1 flex items-center", styles.input)}>
      {children}
    </div>
    {append && (
      <span
        className={clsx(
          "flex items-center px-3 bg-gray-100 border-l border-gray-300 text-gray-500",
          styles.append
        )}
      >
        {append}
      </span>
    )}
  </div>
);

export default InputGroup;
