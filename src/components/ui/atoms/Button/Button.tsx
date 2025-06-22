import React from "react";
import clsx from "clsx";
import type { ButtonProps } from "./Button.types";

/**
 * Button component chuẩn Liquid Glass style MacOS 26 Tahoe.
 *
 * @component
 * @param {ButtonProps} props
 */
export const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  disabled = false,
  loading = false,
  onClick,
  className,
  ...rest
}) => {
  // Style chính sử dụng Tailwind + token
  const baseClass = "inline-flex items-center justify-center rounded-xl font-medium focus:outline-none transition-all select-none";
  const variantClass = {
    primary: "bg-accent/80 text-white hover:bg-accent/100 active:bg-accent/60 shadow-lg backdrop-blur-xl",
    secondary: "bg-white/20 text-accent hover:bg-white/40 active:bg-white/30 border border-accent/30",
    ghost: "bg-transparent text-accent hover:bg-accent/10 active:bg-accent/20"
  }[variant];

  // Nếu dùng theme riêng: import CSS module ở đây

  return (
    <button
      type="button"
      className={clsx(baseClass, variantClass, { "opacity-50 pointer-events-none": disabled || loading }, className)}
      disabled={disabled || loading}
      aria-disabled={disabled || loading}
      aria-label={rest['aria-label']}
      onClick={onClick}
      {...rest}
    >
      {loading && (
        <span className="mr-2">
          {/* Spinner: Có thể tạo spinner riêng hoặc dùng 1 atom khác */}
          <svg className="animate-spin h-4 w-4 text-white" viewBox="0 0 24 24" fill="none">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"/>
          </svg>
        </span>
      )}
      {children}
    </button>
  );
};

export default Button;
