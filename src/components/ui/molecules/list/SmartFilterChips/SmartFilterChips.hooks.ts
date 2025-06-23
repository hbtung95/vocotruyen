import { useMemo } from "react";
import { FilterChip } from "./SmartFilterChips.types";

// Tối ưu hiển thị chip (memo hoá nếu nhiều filter)
export function useDisplayChips(chips: FilterChip[]) {
  return useMemo(() => chips, [chips]);
}
