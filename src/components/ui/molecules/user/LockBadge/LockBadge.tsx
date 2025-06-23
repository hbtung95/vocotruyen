import React from "react";
import { LockBadgeProps } from "./LockBadge.types";
import { Lock } from "lucide-react"; // Bạn có thể thay icon khác nếu dùng icon riêng

const LockBadge: React.FC<LockBadgeProps> = ({
  lockedBy,
  reason,
  icon,
  size = 20,
  tooltip,
  className = "",
}) => (
  <span
    className={`
      inline-flex items-center justify-center rounded-full bg-red-100 border border-red-300 text-red-700
      font-semibold shadow-sm
      ${className}
    `}
    style={{ width: size, height: size }}
    title={tooltip || (reason ? `Khoá: ${reason}` : lockedBy ? `Khoá bởi ${lockedBy}` : "Đang bị khoá")}
    aria-label={reason || lockedBy || "locked"}
    data-testid="lock-badge"
  >
    {icon || <Lock size={size - 6} />}
  </span>
);

export default LockBadge;
