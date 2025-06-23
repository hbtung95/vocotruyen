import { ReactNode } from "react";

export type QuickChartType = "bar" | "line" | "column" | "donut" | "spark";

export interface QuickChartDataPoint {
  label: string;
  value: number;
  color?: string;
}

export interface TableQuickChartProps {
  type: QuickChartType;
  data: QuickChartDataPoint[];
  height?: number;
  width?: number;
  title?: ReactNode;
  showLegend?: boolean;
  className?: string;
}
