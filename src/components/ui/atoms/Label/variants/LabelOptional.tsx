import React from "react";
import { Label, LabelProps } from "../Label";

/**
 * LabelOptional – Label có dấu tuỳ chọn
 */
const LabelOptional: React.FC<LabelProps> = (props) => (
  <Label {...props} optional>
    {props.children}
  </Label>
);

export default LabelOptional;
