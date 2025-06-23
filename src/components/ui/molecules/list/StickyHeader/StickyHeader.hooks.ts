import { useEffect, useRef, useState } from "react";

// Khi header dính lên top, trả về true (dùng cho bóng mờ)
export function useStickyShadow(top = 0): [React.RefObject<HTMLDivElement>, boolean] {
  const ref = useRef<HTMLDivElement>(null);
  const [isStuck, setStuck] = useState(false);

  useEffect(() => {
    function onScroll() {
      if (!ref.current) return;
      const { top: elTop } = ref.current.getBoundingClientRect();
      setStuck(elTop <= (top ?? 0));
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [top]);

  return [ref, isStuck];
}
