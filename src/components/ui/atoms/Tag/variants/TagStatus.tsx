import React from "react";
import { Tag, TagProps } from "../Tag";

/**
 * TagStatus – Tag trạng thái: success/error/warning/info
 */
const TagStatus: React.FC<TagProps & { status: "success" | "error" | "warning" | "info" }> = ({
  status,
  ...props
}) => <Tag {...props} color={status} />;

export default TagStatus;
