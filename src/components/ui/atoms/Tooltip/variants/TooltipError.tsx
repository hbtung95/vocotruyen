import React from "react";
import { Tooltip, TooltipProps } from "../Tooltip";
import { Icon } from "../../Icon";

/**
 * TooltipError – Tooltip với icon cảnh báo, màu đỏ
 */
const TooltipError: React.FC<Omit<TooltipProps, "content" | "children"> & { text: string }> = ({
  text,
  ...props
}) => (
  <Tooltip content={<span className="flex items-center gap-1 text-red-400"><Icon name="error" size={14} />{text}</span>} {...props}>
    <span className="inline-flex items-center text-red-400 cursor-pointer">
      <Icon name="error" size={16} />
    </span>
  </Tooltip>
);

export default TooltipError;
