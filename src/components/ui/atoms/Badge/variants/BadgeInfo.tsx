import React from "react";
import { Badge, BadgeProps } from "../Badge";

/**
 * BadgeInfo – Badge xanh nhạt thông tin
 */
const BadgeInfo: React.FC<Omit<BadgeProps, "variant">> = (props) => (
  <Badge variant="info" {...props} />
);

export default BadgeInfo;
