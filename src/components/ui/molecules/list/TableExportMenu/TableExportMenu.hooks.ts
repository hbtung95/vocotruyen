import { useState, useRef, useEffect } from "react";

// Hook đóng menu khi click ngoài
export function useDropdownClose(ref: React.RefObject<HTMLDivElement>, onClose: () => void) {
  useEffect(() => {
    function handler(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        onClose();
      }
    }
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [ref, onClose]);
}
