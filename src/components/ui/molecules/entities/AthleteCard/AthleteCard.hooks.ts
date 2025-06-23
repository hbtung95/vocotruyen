import { useState } from "react";

export function useAthleteCardHighlight() {
  const [highlight, setHighlight] = useState(false);
  const onMouseEnter = () => setHighlight(true);
  const onMouseLeave = () => setHighlight(false);
  return { highlight, onMouseEnter, onMouseLeave };
}
