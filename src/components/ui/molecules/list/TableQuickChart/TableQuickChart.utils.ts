import { QuickChartDataPoint } from "./TableQuickChart.types";

// Tính tổng value (dùng cho donut hoặc tổng cộng)
export function getTotalValue(data: QuickChartDataPoint[]) {
  return data.reduce((acc, d) => acc + d.value, 0);
}
