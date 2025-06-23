import React from "react";
import { PresenceIndicatorProps } from "./PresenceIndicator.types";

const statusColorMap: Record<string, string> = {
  online: "bg-green-500",
  offline: "bg-gray-400",
  busy: "bg-yellow-400",
  away: "bg-orange-400",
};

const statusLabelMap: Record<string, string> = {
  online: "Đang online",
  offline: "Ngoại tuyến",
  busy: "Bận",
  away: "Đang đi vắng",
};

const PresenceIndicator: React.FC<PresenceIndicatorProps> = ({
  status,
  size = 12,
  className = "",
  style,
  tooltip,
}) => (
  <span
    className={`
      inline-block rounded-full border-2 border-white 
      ${statusColorMap[status] || "bg-gray-300"} 
      ${className}
    `}
    style={{ width: size, height: size, ...style }}
    title={tooltip || statusLabelMap[status] || status}
    aria-label={status}
    data-testid="presence-indicator"
  />
);

export default PresenceIndicator;
