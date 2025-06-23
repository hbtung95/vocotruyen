import { useCallback, useRef } from "react";

// Debounce khi click action (phòng double-action)
export function useDebouncedAction(
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
