import { useCallback } from "react";

// Hook xử lý inline editing từng cell (tuỳ ý mở rộng)
export function useCellEdit(onEdit?: (value: any) => void) {
  return useCallback(
    (value: any) => {
      if (onEdit) onEdit(value);
    },
    [onEdit]
  );
}
