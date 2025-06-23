import { useState } from "react";

export function useExpand(defaultOpen = false) {
  const [expanded, setExpanded] = useState(defaultOpen);
  const toggle = () => setExpanded(e => !e);
  return [expanded, toggle] as const;
}
