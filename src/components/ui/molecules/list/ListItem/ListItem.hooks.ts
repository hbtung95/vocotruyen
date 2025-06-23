import { useCallback, useRef } from "react";

// Hook: Xử lý debounce click cho item (tránh double click)
export function useDebouncedClick(
  onClick?: () => void,
  delay = 200
): () => void {
  const timeout = useRef<NodeJS.Timeout | null>(null);
  return useCallback(() => {
    if (!onClick) return;
    if (timeout.current) clearTimeout(timeout.current);
    timeout.current = setTimeout(onClick, delay);
  }, [onClick, delay]);
}
