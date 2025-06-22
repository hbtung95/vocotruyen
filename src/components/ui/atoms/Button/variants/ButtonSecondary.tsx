import React from "react";
import clsx from "clsx";
import styles from "../themes/ButtonLight.module.css";

export interface ButtonSecondaryProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean;
}

/**
 * ButtonSecondary – Nút phụ, kiểu secondary
 */
export const ButtonSecondary: React.FC<ButtonSecondaryProps> = ({
  children,
  loading = false,
  disabled = false,
  className,
  ...rest
}) => (
  <button
    type="button"
    className={clsx(
      styles.secondary,
      "px-4 py-2 rounded-xl font-medium focus:outline-none transition-all select-none shadow",
      {
        "opacity-50 pointer-events-none": disabled || loading,
      },
      className
    )}
    disabled={disabled || loading}
    aria-disabled={disabled || loading}
    {...rest}
  >
    {loading && (
      <span className="mr-2">
        <svg className="animate-spin h-4 w-4 text-blue-500" viewBox="0 0 24 24" fill="none">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"/>
        </svg>
      </span>
    )}
    {children}
  </button>
);

export default ButtonSecondary;
