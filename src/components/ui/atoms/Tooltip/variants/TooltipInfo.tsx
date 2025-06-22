import React from "react";
import { Tooltip, TooltipProps } from "../Tooltip";
import { Icon } from "../../Icon";

/**
 * TooltipInfo – Tooltip với icon info, màu xanh, dùng cho giải thích/help
 */
const TooltipInfo: React.FC<Omit<TooltipProps, "content" | "children"> & { text: string }> = ({
  text,
  ...props
}) => (
  <Tooltip content={<span className="flex items-center gap-1"><Icon name="info" size={14} />{text}</span>} {...props}>
    <span className="inline-flex items-center text-blue-500 cursor-pointer">
      <Icon name="info" size={16} />
    </span>
  </Tooltip>
);

export default TooltipInfo;
