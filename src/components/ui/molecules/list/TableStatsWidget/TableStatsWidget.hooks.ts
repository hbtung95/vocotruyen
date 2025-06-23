import { useMemo } from "react";
import { StatItem } from "./TableStatsWidget.types";

// Memo hóa để tối ưu render nếu stats lớn
export function useStatsDisplay(stats: StatItem[], loading?: boolean) {
  return useMemo(() => stats, [stats, loading]);
}
