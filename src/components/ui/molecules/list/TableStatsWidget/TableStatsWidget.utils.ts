import { StatItem } from "./TableStatsWidget.types";

// Tính toán tổng các giá trị số
export function getStatTotal(stats: StatItem[]): number {
  return stats
    .map(s => typeof s.value === "number" ? s.value : 0)
    .reduce((a, b) => a + b, 0);
}
