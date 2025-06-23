import { ReactNode } from "react";

export interface StatItem {
  key: string;
  label: string;
  value: ReactNode;
  icon?: ReactNode;
  color?: string; // Màu icon hoặc số
  tooltip?: string;
}

export interface TableStatsWidgetProps {
  stats: StatItem[];
  loading?: boolean;
  className?: string;
}
