import React from "react";
import { Switch, SwitchProps } from "../Switch";
import { Icon } from "../../Icon";

/**
 * SwitchIcon – Switch có icon trạng thái on/off
 */
const SwitchIcon: React.FC<SwitchProps> = ({ checked, ...props }) => (
  <Switch
    {...props}
    checked={checked}
    label={
      <>
        <Icon name={checked ? "sun" : "moon"} size={18} className="mr-1" />
        {props.label}
      </>
    }
  />
);

export default SwitchIcon;
