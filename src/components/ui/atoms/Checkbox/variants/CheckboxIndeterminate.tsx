import React from "react";
import { Checkbox, CheckboxProps } from "../Checkbox.types";

/**
 * CheckboxIndeterminate – Checkbox ở trạng thái trung gian (gạch ngang)
 */
const CheckboxIndeterminate: React.FC<CheckboxProps> = (props) => (
  <Checkbox {...props} indeterminate checked={false} />
);

export default CheckboxIndeterminate;
