import { useCallback, useState } from "react";
import { TableColumn } from "./TableColumnSettings.types";

// Hook quản lý trạng thái local columns cho drag/drop
export function useColumnSettings(
  columns: TableColumn[],
  onChange: (cols: TableColumn[]) => void
) {
  const [localCols, setLocalCols] = useState(columns);

  // Khi reorder cột
  const handleReorder = useCallback((from: number, to: number) => {
    const next = [...localCols];
    const item = next.splice(from, 1)[0];
    next.splice(to, 0, item);
    setLocalCols(next);
    onChange(next);
  }, [localCols, onChange]);

  // Khi toggle visible
  const handleToggle = useCallback((idx: number) => {
    const next = [...localCols];
    next[idx].visible = !next[idx].visible;
    setLocalCols(next);
    onChange(next);
  }, [localCols, onChange]);

  return { localCols, setLocalCols, handleReorder, handleToggle };
}
