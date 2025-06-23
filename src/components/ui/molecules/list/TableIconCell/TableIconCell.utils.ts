import { IconCellItem } from "./TableIconCell.types";

// Chuẩn hóa sang IconCellItem[]
export function toIconCellItems(arr: ReactNode[] | IconCellItem[]): IconCellItem[] {
  if (!arr) return [];
  if (typeof arr[0] === "object" && "icon" in (arr[0] as any)) {
    return arr as IconCellItem[];
  }
  return (arr as ReactNode[]).map(icon => ({ icon }));
}
