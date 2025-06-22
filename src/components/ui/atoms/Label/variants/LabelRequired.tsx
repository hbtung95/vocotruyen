import React from "react";
import { Label, LabelProps } from "../Label";

/**
 * LabelRequired – Label có dấu * đỏ
 */
const LabelRequired: React.FC<LabelProps> = (props) => (
  <Label {...props} required>
    {props.children}
  </Label>
);

export default LabelRequired;
