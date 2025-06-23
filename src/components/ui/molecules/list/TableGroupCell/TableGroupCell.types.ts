import { ReactNode } from "react";

export interface TableGroupCellProps {
  label: string;
  count?: number;
  icon?: ReactNode;
  expanded?: boolean;
  level?: number;                  // Bậc lồng nhau, padding trái
  tooltip?: string;
  highlight?: boolean;
  bold?: boolean;
  onToggle?: () => void;           // Click để mở rộng/collapse
  actions?: ReactNode[];           // Nút thao tác nhanh
  className?: string;
}
