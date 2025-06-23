import { useState, useCallback } from "react";

// Hook search keyword, debounce (tối ưu nếu bảng lớn)
export function useToolbarSearch(onSearch?: (kw: string) => void, debounce = 200) {
  const [value, setValue] = useState("");
  const timer = useRef<NodeJS.Timeout | null>(null);

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setValue(val);
    if (onSearch) {
      if (timer.current) clearTimeout(timer.current);
      timer.current = setTimeout(() => onSearch(val), debounce);
    }
  }, [onSearch, debounce]);

  return { value, onChange: handleChange };
}
