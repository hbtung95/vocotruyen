import React from "react";
import type { SkeletonProps } from "./Skeleton.types";
import styles from "./themes/SkeletonLight.module.css";
import clsx from "clsx";

/**
 * Skeleton – Atom placeholder loading, hỗ trợ nhiều variant, shimmer
 */
export const Skeleton: React.FC<SkeletonProps> = ({
  variant = "rect",
  width,
  height,
  radius,
  animate = true,
  className,
  style,
  ...rest
}) => {
  const vStyles: Record<string, React.CSSProperties> = {
    text: {
      height: height ?? 16,
      width: width ?? "100%",
      borderRadius: radius ?? 4,
    },
    rect: {
      height: height ?? 24,
      width: width ?? "100%",
      borderRadius: radius ?? 8,
    },
    circle: {
      width: width ?? 32,
      height: height ?? width ?? 32,
      borderRadius: "50%",
    },
    avatar: {
      width: width ?? 40,
      height: height ?? 40,
      borderRadius: "50%",
    },
  };

  return (
    <div
      className={clsx(
        styles.skeleton,
        styles[variant],
        animate && styles.animate,
        className
      )}
      style={{ ...vStyles[variant], ...style }}
      aria-busy="true"
      aria-label="loading"
      {...rest}
    />
  );
};

export default Skeleton;
