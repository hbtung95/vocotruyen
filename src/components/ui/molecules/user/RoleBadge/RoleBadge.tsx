import React from "react";
import { RoleBadgeProps, UserRole } from "./RoleBadge.types";
import styles from "./themes/RoleBadge.module.css";
import { Icon } from "@/components/ui/atoms/Icon";

const ROLE_LABELS: Record<UserRole, string> = {
  admin: "Admin",
  manager: "Quản lý",
  referee: "Trọng tài",
  coach: "HLV",
  athlete: "VĐV",
  guest: "Khách",
  viewer: "Xem",
};

const ROLE_COLORS: Record<UserRole, string> = {
  admin: "bg-red-500 text-white",
  manager: "bg-blue-500 text-white",
  referee: "bg-yellow-500 text-gray-900",
  coach: "bg-green-500 text-white",
  athlete: "bg-purple-500 text-white",
  guest: "bg-gray-400 text-white",
  viewer: "bg-gray-200 text-gray-800",
};

const ROLE_ICONS: Record<UserRole, React.ReactNode> = {
  admin: <Icon name="shield" size={16} />,
  manager: <Icon name="briefcase" size={16} />,
  referee: <Icon name="whistle" size={16} />,
  coach: <Icon name="award" size={16} />,
  athlete: <Icon name="user" size={16} />,
  guest: <Icon name="user" size={16} />,
  viewer: <Icon name="eye" size={16} />,
};

const RoleBadge: React.FC<RoleBadgeProps> = ({ role, className = "" }) => (
  <span
    className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-semibold shadow-sm
      ${ROLE_COLORS[role]} ${styles.roleBadge || ""} ${className}`}
    aria-label={ROLE_LABELS[role]}
  >
    {ROLE_ICONS[role]}
    <span>{ROLE_LABELS[role]}</span>
  </span>
);

export default RoleBadge;
