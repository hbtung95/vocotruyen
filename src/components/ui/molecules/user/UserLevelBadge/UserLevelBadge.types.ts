import { ReactNode } from "react";

export interface UserLevelBadgeProps {
  level:
    | "newbie"
    | "member"
    | "pro"
    | "vip"
    | "coach"
    | "admin"
    | "elite"
    | string; // mở rộng thêm cấp độ đặc biệt
  label?: string;        // Custom label
  icon?: ReactNode;      // Custom icon
  className?: string;
  tooltip?: string;
  size?: "sm" | "md" | "lg" | number; // kích thước, tùy chỉnh px hoặc preset
}
