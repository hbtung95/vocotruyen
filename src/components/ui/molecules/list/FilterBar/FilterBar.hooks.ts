import { useCallback } from "react";
import { FilterField } from "./FilterBar.types";

// Hook re-use xử lý thay đổi filter
export function useFilterBar(fields: FilterField[], onChange: (v: Record<string, any>) => void) {
  return useCallback((key: string, value: any, current: Record<string, any>) => {
    const next = { ...current, [key]: value };
    onChange(next);
  }, [onChange]);
}
