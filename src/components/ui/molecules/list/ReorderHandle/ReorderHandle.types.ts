import { ReactNode } from "react";

export interface ReorderHandleProps {
  label?: string;                // aria-label, tooltip
  icon?: ReactNode;              // Icon mặc định nếu không có
  onMouseDown?: (e: React.MouseEvent) => void;
  onTouchStart?: (e: React.TouchEvent) => void;
  className?: string;
  tabIndex?: number;
  disabled?: boolean;
}
