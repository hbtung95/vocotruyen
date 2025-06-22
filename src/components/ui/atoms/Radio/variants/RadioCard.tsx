import React from "react";
import { Radio, RadioProps } from "../Radio";

/**
 * RadioCard – Radio dạng card bo tròn
 */
const RadioCard: React.FC<RadioProps> = (props) => (
  <Radio
    {...props}
    className={[
      "p-4 rounded-2xl border transition flex flex-col items-center shadow-sm",
      props.checked
        ? "border-accent bg-accent/10 text-accent"
        : "border-gray-300 bg-white text-gray-700",
      props.className,
    ].join(" ")}
  />
);

export default RadioCard;
