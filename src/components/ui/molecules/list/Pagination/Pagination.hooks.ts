import { useCallback } from "react";

export function useGoToPage(onPageChange: (page: number) => void, pageCount: number) {
  return useCallback((page: number) => {
    if (page >= 1 && page <= pageCount) onPageChange(page);
  }, [onPageChange, pageCount]);
}
