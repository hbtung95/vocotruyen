import React from "react";
import { Radio, RadioProps } from "../Radio";

/**
 * RadioButton – Radio có style nổi bật như button
 */
const RadioButton: React.FC<RadioProps> = (props) => (
  <Radio
    {...props}
    className={[
      "px-3 py-1 rounded-xl border-2 transition",
      props.checked
        ? "border-accent bg-accent/10 text-accent"
        : "border-gray-300 bg-transparent text-gray-700",
      props.className,
    ].join(" ")}
  />
);

export default RadioButton;
