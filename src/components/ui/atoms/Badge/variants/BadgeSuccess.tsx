import React from "react";
import { Badge, BadgeProps } from "../Badge";

/**
 * BadgeSuccess – Badge xanh thành công
 */
const BadgeSuccess: React.FC<Omit<BadgeProps, "variant">> = (props) => (
  <Badge variant="success" {...props} />
);

export default BadgeSuccess;
