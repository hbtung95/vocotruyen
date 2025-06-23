// src/components/ui/molecules/user/UserCard/UserCard.tsx
import React from "react";
import { Card } from "@/components/ui/atoms/Card";
import { Avatar } from "@/components/ui/atoms/Avatar";
import { UserCardProps } from "./UserCard.types";

const statusColorMap = {
  online: "bg-green-400",
  offline: "bg-gray-400",
  busy: "bg-yellow-400",
  away: "bg-orange-400",
};

const UserCard: React.FC<UserCardProps> = ({
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
    className={`flex items-center gap-4 p-4 ${className}`}
    aria-label={`User card for ${name}`}
  >
    <div className="relative">
      <Avatar src={avatar} alt={name} size="lg" bordered />
      {status && (
        <span
          className={`absolute right-0 bottom-0 w-3 h-3 rounded-full ring-2 ring-white ${statusColorMap[status]}`}
          aria-label={status}
        />
      )}
    </div>
    <div className="flex-1 min-w-0">
      <div className="font-medium text-lg truncate">{name}</div>
      {subtitle && (
        <div className="text-sm text-gray-500 dark:text-gray-400 truncate">{subtitle}</div>
      )}
    </div>
    {actions && <div className="ml-2 flex-shrink-0">{actions}</div>}
  </Card>
);

export default UserCard;
