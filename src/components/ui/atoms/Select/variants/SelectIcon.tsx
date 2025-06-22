import React from "react";
import { SelectProps } from "../Select.types";

/**
 * SelectIcon – Dropdown có icon trong từng option (chỉ label hiển thị icon, native select không render icon)
 */
const SelectIcon: React.FC<SelectProps> = (props) => (
  <select {...props} className={["pl-9", props.className].join(" ")}>
    {props.options.map(opt => (
      <option key={opt.value} value={opt.value}>
        {opt.icon ? <> {opt.icon} {opt.label}</> : opt.label}
      </option>
    ))}
  </select>
);

export default SelectIcon;
