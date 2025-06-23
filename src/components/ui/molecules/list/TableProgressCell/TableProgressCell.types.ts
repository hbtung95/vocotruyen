import { ReactNode } from "react";

export interface TableProgressCellProps {
  value: number | null | undefined;     // 0-100 (%)
  showLabel?: boolean;
  showIcon?: boolean;
  barType?: "line" | "circle";
  color?: string;
  successColor?: string;
  errorColor?: string;
  error?: boolean;
  tooltip?: string;
  highlight?: boolean;
  icon?: ReactNode;
  className?: string;
}
