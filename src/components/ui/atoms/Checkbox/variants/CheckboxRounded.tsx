import React from "react";
import { Checkbox, CheckboxProps } from "../Checkbox.types";

/**
 * CheckboxRounded – Checkbox bo tròn full (kiểu radio shape)
 */
const CheckboxRounded: React.FC<CheckboxProps> = (props) => (
  <Checkbox
    {...props}
    className={["rounded-full", props.className].join(" ")}
  />
);

export default CheckboxRounded;
