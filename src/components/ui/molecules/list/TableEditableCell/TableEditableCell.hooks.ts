import { useState } from "react";

export function useEditValue<T>(init: T) {
  const [value, setValue] = useState<T>(init);
  const reset = () => setValue(init);
  return [value, setValue, reset] as const;
}
