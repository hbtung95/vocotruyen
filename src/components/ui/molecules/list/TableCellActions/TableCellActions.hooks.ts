import { useCallback } from "react";
import { CellAction } from "./TableCellActions.types";

// Hook giúp wrap onClick với confirm (nếu là hành động nguy hiểm)
export function useActionConfirm() {
  return useCallback((action: CellAction) => {
    if (action.danger) {
      // Bạn có thể thay alert = custom modal confirm riêng
      if (window.confirm(`Bạn chắc chắn muốn thực hiện: ${action.label}?`)) {
        action.onClick();
      }
    } else {
      action.onClick();
    }
  }, []);
}
