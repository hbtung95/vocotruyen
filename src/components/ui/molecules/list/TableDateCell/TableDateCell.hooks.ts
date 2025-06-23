import { useState } from "react";
import { DateDisplayMode } from "./TableDateCell.types";

// Cho phép click đổi kiểu hiển thị (date <-> relative)
export function useDisplayMode(defaultMode: DateDisplayMode = "date") {
  const [mode, setMode] = useState<DateDisplayMode>(defaultMode);
  const toggle = () => setMode(m => (m === "date" ? "relative" : "date"));
  return [mode, toggle] as const;
}
