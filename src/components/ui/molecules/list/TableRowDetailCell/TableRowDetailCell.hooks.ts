import { useState } from "react";

export function useDetailPanel(defaultOpen = false) {
  const [open, setOpen] = useState(defaultOpen);
  const openPanel = () => setOpen(true);
  const closePanel = () => setOpen(false);
  return { open, openPanel, closePanel };
}
