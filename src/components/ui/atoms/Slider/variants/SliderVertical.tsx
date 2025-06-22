import React from "react";
import { SliderProps } from "../Slider.types";

/**
 * SliderVertical – Slider dựng dọc
 */
const SliderVertical: React.FC<SliderProps> = (props) => (
  <div className="flex flex-col items-center w-auto">
    <input
      type="range"
      value={props.value}
      min={props.min ?? 0}
      max={props.max ?? 100}
      step={props.step ?? 1}
      disabled={props.disabled}
      className="w-2 h-32 appearance-none rounded-lg bg-gray-200 dark:bg-gray-700 outline-none transition-all rotate-[-90deg]"
      aria-valuenow={props.value}
      aria-valuemin={props.min ?? 0}
      aria-valuemax={props.max ?? 100}
      {...props}
    />
    {props.label && <span className="text-sm mt-2">{props.label}</span>}
  </div>
);

export default SliderVertical;
