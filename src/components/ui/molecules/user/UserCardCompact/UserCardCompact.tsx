import React from "react";
import { Card } from "@/components/ui/atoms/Card";
import { Avatar } from "@/components/ui/atoms/Avatar";
import { UserCardCompactProps } from "./UserCardCompact.types";

const statusColorMap = {
  online: "bg-green-400",
  offline: "bg-gray-400",
  busy: "bg-yellow-400",
  away: "bg-orange-400",
};

const UserCardCompact: React.FC<UserCardCompactProps> = ({
  avatar,
  name,
  subtitle,
  status,
  actions,
  className = "",
}) => (
  <Card
    variant="glass"
    shadow
    rounded
    className={`flex items-center gap-3 p-2 ${className}`}
    aria-label={`Compact user card for ${name}`}
  >
    <div className="relative">
      <Avatar src={avatar} alt={name} size="md" bordered />
      {status && (
        <span
          className={`absolute right-0 bottom-0 w-2.5 h-2.5 rounded-full ring-2 ring-white ${statusColorMap[status]}`}
          aria-label={status}
        />
      )}
    </div>
    <div className="flex-1 min-w-0">
      <div className="font-medium text-base truncate">{name}</div>
      {subtitle && (
        <div className="text-xs text-gray-500 dark:text-gray-400 truncate">{subtitle}</div>
      )}
    </div>
    {actions && <div className="ml-1 flex-shrink-0">{actions}</div>}
  </Card>
);

export default UserCardCompact;
