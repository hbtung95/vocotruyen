import { ReactNode } from "react";

export interface TableCollapseCellProps {
  expanded?: boolean;
  onToggle?: () => void;
  icon?: ReactNode;
  tooltip?: string;
  highlight?: boolean;
  disabled?: boolean;
  content?: ReactNode;          // Nội dung mở rộng (sẽ render bên dưới row)
  padding?: number;             // Padding khi expand
  level?: number;               // Độ lồng nhau
  actions?: ReactNode[];
  className?: string;
}
