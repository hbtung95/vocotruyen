import React from "react";
import { AccessLevelChipProps, AccessLevel } from "./AccessLevelChip.types";
import styles from "./themes/AccessLevelChip.module.css";
import { Icon } from "@/components/ui/atoms/Icon";

const LEVEL_LABELS: Record<AccessLevel, string> = {
  owner: "Owner",
  admin: "Admin",
  editor: "Editor",
  viewer: "Viewer",
  guest: "Guest",
  readonly: "Read-only",
  limited: "Limited",
  custom: "Custom",
};

const LEVEL_COLORS: Record<AccessLevel, string> = {
  owner: "bg-gradient-to-r from-yellow-400 to-orange-500 text-white",
  admin: "bg-red-500 text-white",
  editor: "bg-blue-500 text-white",
  viewer: "bg-green-400 text-white",
  guest: "bg-gray-400 text-white",
  readonly: "bg-gray-200 text-gray-700",
  limited: "bg-orange-300 text-white",
  custom: "bg-purple-500 text-white",
};

const LEVEL_ICONS: Record<AccessLevel, React.ReactNode> = {
  owner: <Icon name="crown" size={14} />,
  admin: <Icon name="shield" size={14} />,
  editor: <Icon name="edit-3" size={14} />,
  viewer: <Icon name="eye" size={14} />,
  guest: <Icon name="user" size={14} />,
  readonly: <Icon name="lock" size={14} />,
  limited: <Icon name="slash" size={14} />,
  custom: <Icon name="settings" size={14} />,
};

const AccessLevelChip: React.FC<AccessLevelChipProps> = ({ level, className = "" }) => (
  <span
    className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium shadow
      ${LEVEL_COLORS[level]} ${styles.chip || ""} ${className}`}
    aria-label={LEVEL_LABELS[level]}
  >
    {LEVEL_ICONS[level]}
    <span>{LEVEL_LABELS[level]}</span>
  </span>
);

export default AccessLevelChip;
