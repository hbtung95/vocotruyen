import { useMemo } from "react";

export function useProgressValue(value: number | null | undefined) {
  return useMemo(() => (value == null ? 0 : Math.max(0, Math.min(100, value))), [value]);
}
