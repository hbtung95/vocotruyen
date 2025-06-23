import { useRef } from "react";

// Hook xử lý drag-n-drop file
export function useFileDrop(onFile: (f: File) => void) {
  const ref = useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    function prevent(e: Event) { e.preventDefault(); }
    function drop(e: DragEvent) {
      e.preventDefault();
      if (e.dataTransfer?.files?.[0]) onFile(e.dataTransfer.files[0]);
    }
    const el = ref.current;
    if (!el) return;
    el.addEventListener("dragover", prevent);
    el.addEventListener("drop", drop);
    return () => {
      el.removeEventListener("dragover", prevent);
      el.removeEventListener("drop", drop);
    };
  }, [onFile]);
  return ref;
}
