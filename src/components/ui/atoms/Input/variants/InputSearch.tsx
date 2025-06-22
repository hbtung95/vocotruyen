import React from "react";
import { Input, InputProps } from "../Input";
import { Icon } from "../../Icon";

/**
 * InputSearch – Input với icon search
 */
const InputSearch: React.FC<Omit<InputProps, "leftIcon" | "type">> = (props) => (
  <Input
    {...props}
    type="search"
    leftIcon={<Icon name="search" />}
    placeholder={props.placeholder || "Tìm kiếm..."}
  />
);

export default InputSearch;
