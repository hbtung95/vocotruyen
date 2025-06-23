import { useCallback, useRef } from "react";

// Hook debounce onChange, phòng double-select, thao tác quá nhanh.
export function useDebouncedSelect(
  onChange?: (checked: boolean) => void,
  delay = 150
): (checked: boolean) => void {
  const timeout = useRef<NodeJS.Timeout | null>(null);
  return useCallback(
    (checked: boolean) => {
      if (!onChange) return;
      if (timeout.current) clearTimeout(timeout.current);
      timeout.current = setTimeout(() => onChange(checked), delay);
    },
    [onChange, delay]
  );
}
