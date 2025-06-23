import React from "react";
import { Avatar } from "@/components/ui/atoms/Avatar";
import { Card } from "@/components/ui/atoms/Card";
import { MiniProfilePopoverProps } from "./MiniProfilePopover.types";

const statusColorMap = {
  online: "bg-green-400",
  offline: "bg-gray-400",
  busy: "bg-yellow-400",
  away: "bg-orange-400",
};

const MiniProfilePopover: React.FC<MiniProfilePopoverProps> = ({
  avatar,
  name,
  subtitle,
  email,
  status,
  actions,
  className = "",
}) => (
  <Card
    variant="glass"
    shadow
    rounded
    className={`w-64 p-4 flex flex-col items-center text-center ${className}`}
    aria-label={`Mini profile popover for ${name}`}
  >
    <div className="relative mb-2">
      <Avatar src={avatar} alt={name} size="md" bordered />
      {status && (
        <span
          className={`absolute right-1 bottom-1 w-2.5 h-2.5 rounded-full ring-2 ring-white ${statusColorMap[status]}`}
          aria-label={status}
        />
      )}
    </div>
    <div className="font-semibold text-base">{name}</div>
    {subtitle && (
      <div className="text-xs text-gray-500 dark:text-gray-400">{subtitle}</div>
    )}
    {email && (
      <div className="text-xs text-gray-400 mt-1 truncate">{email}</div>
    )}
    {actions && <div className="mt-2">{actions}</div>}
  </Card>
);

export default MiniProfilePopover;
