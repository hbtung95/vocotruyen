import React from "react";
import clsx from "clsx";
import type { CardProps } from "./Card.types";
import styles from "./themes/CardLight.module.css";

/**
 * Card – Atom container, bo góc, shadow, theme glass/solid.
 */
export const Card: React.FC<CardProps> = ({
  children,
  rounded = true,
  shadow = true,
  variant = "glass",
  className,
  ...rest
}) => (
  <div
    className={clsx(
      "p-4 w-full transition-all",
      rounded && "rounded-2xl",
      shadow && "shadow-md",
      variant === "glass" && "bg-white/40 dark:bg-gray-900/40 backdrop-blur",
      variant === "solid" && "bg-white dark:bg-gray-800",
      variant === "bordered" && "bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700",
      styles.card,
      className
    )}
    {...rest}
  >
    {children}
  </div>
);

export default Card;
