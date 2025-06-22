import React from "react";
import { Badge, BadgeProps } from "../Badge";

/**
 * BadgeError – Badge đỏ báo lỗi
 */
const BadgeError: React.FC<Omit<BadgeProps, "variant">> = (props) => (
  <Badge variant="error" {...props} />
);

export default BadgeError;
