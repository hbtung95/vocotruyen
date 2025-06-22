import React from "react";
import { SliderProps } from "../Slider.types";

/**
 * SliderRange – Dạng hiển thị min/max bên dưới (không phải multi-range, chỉ label)
 */
const SliderRange: React.FC<SliderProps> = (props) => (
  <div className="flex flex-col gap-1 w-full">
    <Slider {...props} />
    <div className="flex justify-between text-xs text-gray-400 mt-1">
      <span>{props.min ?? 0}</span>
      <span>{props.max ?? 100}</span>
    </div>
  </div>
);

export default SliderRange;

// import Slider ở đầu file
import Slider from "../Slider";
