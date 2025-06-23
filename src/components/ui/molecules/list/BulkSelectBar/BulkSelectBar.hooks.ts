import { useCallback } from "react";
import { BulkAction } from "./BulkSelectBar.types";

// Hook xử lý xác nhận nếu là action nguy hiểm
export function useBulkActionConfirm() {
  return useCallback((action: BulkAction) => {
    if (action.danger) {
      if (window.confirm(`Bạn chắc chắn muốn thực hiện: ${action.label}?`)) {
        action.onClick();
      }
    } else {
      action.onClick();
    }
  }, []);
}
