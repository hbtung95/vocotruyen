import { useCallback } from "react";

// Hook toggle visible nhanh
export function useToggleVisible(
  isVisible: boolean = true,
  onToggle?: (v: boolean) => void
) {
  return useCallback(() => {
    if (onToggle) onToggle(!isVisible);
  }, [isVisible, onToggle]);
}
