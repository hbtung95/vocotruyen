import { useMemo } from "react";
import { pickRandomEmoji } from "./TableEmptyState.utils";

export function useEmptyIcon(icon?: React.ReactNode) {
  return useMemo(() => icon || pickRandomEmoji(), [icon]);
}
