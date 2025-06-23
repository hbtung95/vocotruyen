import { useCallback } from "react";
import { SwitchView } from "./ViewSwitcher.types";

// Hook memo đổi view
export function useSwitchView(onSwitch: (k: string) => void) {
  return useCallback((key: string) => onSwitch(key), [onSwitch]);
}
