import { useMemo } from "react";
import { IconCellItem } from "./TableIconCell.types";
import { toIconCellItems } from "./TableIconCell.utils";

export function useIconItems(arr: ReactNode[] | IconCellItem[], max?: number) {
  return useMemo(() => {
    const a = toIconCellItems(arr);
    return max ? a.slice(0, max) : a;
  }, [arr, max]);
}
