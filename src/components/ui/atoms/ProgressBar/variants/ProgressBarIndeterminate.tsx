import React from "react";
import { ProgressBar, ProgressBarProps } from "../ProgressBar";

/**
 * ProgressBarIndeterminate – Progress không xác định (loading)
 */
const ProgressBarIndeterminate: React.FC<Omit<ProgressBarProps, "indeterminate">> = (props) => (
  <ProgressBar {...props} indeterminate showLabel />
);

export default ProgressBarIndeterminate;
