import React from "react";
import clsx from "clsx";
import type { SliderProps } from "./Slider.types";
import styles from "./themes/SliderLight.module.css";

/**
 * Slider – Atom slider cơ bản, a11y, theme, hiển thị value.
 */
export const Slider: React.FC<SliderProps> = ({
  value,
  label,
  min = 0,
  max = 100,
  step = 1,
  showValue = false,
  disabled = false,
  className,
  ...rest
}) => (
  <div className="flex flex-col gap-1 w-full">
    {label && (
      <label className="font-medium text-gray-700 dark:text-gray-200 mb-0.5">
        {label}
        {showValue && (
          <span className="ml-2 text-accent text-sm">{value}</span>
        )}
      </label>
    )}
    <input
      type="range"
      value={value}
      min={min}
      max={max}
      step={step}
      disabled={disabled}
      className={clsx(
        "w-full h-2 rounded-lg appearance-none bg-gray-200 dark:bg-gray-700 outline-none transition-all",
        styles.slider,
        disabled && "opacity-60 pointer-events-none",
        className
      )}
      aria-valuenow={value}
      aria-valuemin={min}
      aria-valuemax={max}
      {...rest}
    />
  </div>
);

export default Slider;
