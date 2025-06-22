import React from "react";
import { Divider, DividerProps } from "../Divider";

/**
 * DividerDashed – Divider đứt nét
 */
const DividerDashed: React.FC<Omit<DividerProps, "dashed">> = (props) => (
  <Divider dashed {...props} />
);

export default DividerDashed;
