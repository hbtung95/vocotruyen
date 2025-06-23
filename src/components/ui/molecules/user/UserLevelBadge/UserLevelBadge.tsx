import React from "react";
import { UserLevelBadgeProps } from "./UserLevelBadge.types";
import { Star, ShieldCheck, Award, Crown } from "lucide-react";

const levelStyleMap: Record<string, string> = {
  newbie: "bg-gray-100 text-gray-500 border-gray-300",
  member: "bg-blue-100 text-blue-700 border-blue-300",
  pro: "bg-green-100 text-green-700 border-green-400",
  vip: "bg-purple-100 text-purple-700 border-purple-400",
  coach: "bg-yellow-100 text-yellow-700 border-yellow-400",
  admin: "bg-red-100 text-red-700 border-red-400",
  elite: "bg-indigo-100 text-indigo-700 border-indigo-400",
};

const levelLabelMap: Record<string, string> = {
  newbie: "Mới",
  member: "Thành viên",
  pro: "Chuyên gia",
  vip: "VIP",
  coach: "HLV",
  admin: "Admin",
  elite: "Elite",
};

const levelIconMap: Record<string, React.ReactNode> = {
  newbie: <Star size={14} />,
  member: <Award size={14} />,
  pro: <ShieldCheck size={14} />,
  vip: <Crown size={14} />,
  coach: <ShieldCheck size={14} />,
  admin: <ShieldCheck size={14} />,
  elite: <Crown size={14} />,
};

function getSize(size?: "sm" | "md" | "lg" | number) {
  if (typeof size === "number") return size;
  switch (size) {
    case "sm":
      return 18;
    case "lg":
      return 28;
    default:
      return 22;
  }
}

const UserLevelBadge: React.FC<UserLevelBadgeProps> = ({
  level,
  label,
  icon,
  className = "",
  tooltip,
  size = "md",
}) => (
  <span
    className={`
      inline-flex items-center px-2.5 py-0.5 border rounded-full text-xs font-bold uppercase tracking-tight
      ${levelStyleMap[level] || "bg-gray-50 text-gray-400 border-gray-200"}
      ${className}
    `}
    style={{
      minHeight: getSize(size),
      fontSize: getSize(size) > 20 ? "1rem" : "0.75rem",
    }}
    title={tooltip || label || levelLabelMap[level] || level}
    aria-label={label || levelLabelMap[level] || level}
    data-testid="user-level-badge"
  >
    {icon !== undefined ? icon : levelIconMap[level]}
    <span className="ml-1">{label || levelLabelMap[level] || level}</span>
  </span>
);

export default UserLevelBadge;
