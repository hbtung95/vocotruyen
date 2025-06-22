import React from "react";
import { Divider, DividerProps } from "../Divider";

/**
 * DividerVertical – Divider dọc
 */
const DividerVertical: React.FC<Omit<DividerProps, "orientation">> = (props) => (
  <Divider orientation="vertical" {...props} />
);

export default DividerVertical;
