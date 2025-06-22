import React from "react";
import clsx from "clsx";
import type { AvatarProps } from "./Avatar.types";
import styles from "./themes/AvatarLight.module.css";

/**
 * Avatar – Hiển thị ảnh đại diện với Liquid Glass style.
 */
export const Avatar: React.FC<AvatarProps> = ({
  src,
  alt = "Avatar",
  size = "md",
  bordered = false,
  showPlaceholder = true,
  className,
  ...rest
}) => {
  // Xác định size class theo props
  const sizeClass = typeof size === "number"
    ? { width: size, height: size }
    : {
        sm: "w-8 h-8",
        md: "w-12 h-12",
        lg: "w-20 h-20",
      }[size] || "w-12 h-12";

  // Placeholder là ký tự đầu tên nếu không có ảnh
  const renderPlaceholder = () => (
    <span
      className={clsx(
        styles.placeholder,
        "flex items-center justify-center bg-gray-200 dark:bg-gray-600 text-gray-500 dark:text-gray-300 rounded-full font-semibold select-none"
      )}
      style={typeof size === "number" ? { width: size, height: size } : undefined}
      aria-label={alt || "Avatar"}
      role="img"
    >
      {/* Lấy chữ cái đầu từ alt hoặc icon user */}
      {alt ? alt.charAt(0).toUpperCase() : <svg width="20" height="20" fill="none"><circle cx="10" cy="10" r="10" fill="#eee"/><path d="M10 10a4 4 0 100-8 4 4 0 000 8z" fill="#bbb"/><path d="M10 12c-3 0-5 1.5-5 3v1h10v-1c0-1.5-2-3-5-3z" fill="#bbb"/></svg>}
    </span>
  );

  return (
    <span
      className={clsx(
        "inline-block rounded-full overflow-hidden bg-white/50 backdrop-blur",
        bordered && styles.bordered,
        className
      )}
      style={typeof size === "number" ? { width: size, height: size } : undefined}
      aria-label={alt || "Avatar"}
      role="img"
    >
      {src ? (
        <img
          src={src}
          alt={alt}
          className={clsx(
            "object-cover w-full h-full block",
            bordered && "ring-2 ring-accent/60"
          )}
          {...rest}
          onError={e => {
            if (showPlaceholder) (e.target as HTMLImageElement).style.display = "none";
          }}
        />
      ) : (
        showPlaceholder && renderPlaceholder()
      )}
    </span>
  );
};

export default Avatar;
