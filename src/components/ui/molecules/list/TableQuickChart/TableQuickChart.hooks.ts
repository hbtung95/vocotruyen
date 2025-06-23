import { useMemo } from "react";
import { QuickChartDataPoint } from "./TableQuickChart.types";

// Memo hóa để tối ưu hiệu năng
export function useChartData(data: QuickChartDataPoint[]) {
  return useMemo(() => data, [data]);
}
