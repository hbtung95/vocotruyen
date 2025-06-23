import { useEffect, useState } from "react";

// Auto detect section trong viewport (optional)
export function useScrollSpy(sectionIds: string[], offset = 80) {
  const [activeId, setActiveId] = useState<string | undefined>(sectionIds[0]);

  useEffect(() => {
    function onScroll() {
      let found: string | undefined;
      for (let id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= offset && rect.bottom > offset) {
            found = id;
            break;
          }
        }
      }
      if (found) setActiveId(found);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [sectionIds, offset]);

  return activeId;
}
