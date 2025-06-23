import { useMemo } from "react";

export function useRating(value: number | null | undefined, max: number) {
  return useMemo(() => {
    const v = typeof value === "number" ? Math.round(value) : 0;
    return Math.max(0, Math.min(v, max));
  }, [value, max]);
}
