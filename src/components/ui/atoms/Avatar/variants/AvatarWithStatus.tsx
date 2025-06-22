import React from "react";
import { Avatar, AvatarProps } from "../Avatar.types";

interface AvatarWithStatusProps extends AvatarProps {
  status?: "online" | "offline" | "busy" | "away";
}

/**
 * AvatarWithStatus – Avatar có icon trạng thái ở góc phải dưới (online/offline…)
 */
export const AvatarWithStatus: React.FC<AvatarWithStatusProps> = ({
  status = "online",
  ...props
}) => (
  <div className="relative inline-block">
    <Avatar {...props} />
    <span
      className={`
        absolute bottom-0 right-0 block rounded-full ring-2 ring-white
        ${status === "online" ? "bg-green-500" : ""}
        ${status === "offline" ? "bg-gray-400" : ""}
        ${status === "busy" ? "bg-red-500" : ""}
        ${status === "away" ? "bg-yellow-400" : ""}
      `}
      style={{ width: 12, height: 12, borderWidth: 2 }}
      aria-label={status}
    />
  </div>
);

export default AvatarWithStatus;
