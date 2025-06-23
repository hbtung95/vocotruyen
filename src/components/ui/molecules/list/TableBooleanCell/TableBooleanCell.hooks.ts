import { useState } from "react";

export function useBoolToggle(value: boolean | null | undefined, onToggle?: (v: boolean) => void) {
  const [checked, setChecked] = useState(!!value);
  const toggle = () => {
    setChecked(v => {
      const next = !v;
      onToggle?.(next);
      return next;
    });
  };
  return [checked, toggle] as const;
}
