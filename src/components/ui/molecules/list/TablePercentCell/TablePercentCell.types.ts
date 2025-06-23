import { ReactNode } from "react";

export interface TablePercentCellProps {
  value: number | null | undefined;      // 0–100
  fixed?: number;                        // Số chữ số thập phân
  showBar?: boolean;
  showLabel?: boolean;
  icon?: ReactNode;
  positiveColor?: string;
  negativeColor?: string;
  highlight?: boolean;
  tooltip?: string;
  error?: boolean;
  copyable?: boolean;
  onCopy?: (v: number) => void;
  bold?: boolean;
  className?: string;
}
