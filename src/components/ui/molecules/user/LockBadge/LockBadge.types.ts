import { ReactNode } from "react";

export interface LockBadgeProps {
  lockedBy?: string;          // Tên user đang khoá (nếu có)
  reason?: string;            // Lý do khóa (nếu cần)
  icon?: ReactNode;           // Icon tuỳ chỉnh, mặc định là biểu tượng khoá
  size?: number;              // Kích thước badge (px), mặc định 20
  tooltip?: string;           // Tooltip tuỳ chỉnh
  className?: string;
}
