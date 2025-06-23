import { useRef } from "react";

// Hook chống double drag hoặc dùng cho animation
export function useDragActive(disabled?: boolean) {
  const ref = useRef<HTMLDivElement | null>(null);
  return { ref, isDraggable: !disabled };
}
