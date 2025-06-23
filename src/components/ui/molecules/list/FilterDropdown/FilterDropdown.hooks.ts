import { useState, useRef, useEffect } from "react";

// Hook đóng dropdown khi click ngoài
export function useDropdownClose(ref: React.RefObject<HTMLDivElement>, onClose: () => void) {
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        onClose();
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [ref, onClose]);
}
