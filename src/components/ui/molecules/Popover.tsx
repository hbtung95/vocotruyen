import React, { useRef, useState, useEffect } from "react";

interface Props {
  trigger: React.ReactNode;
  content: React.ReactNode;
}

const Popover: React.FC<Props> = ({ trigger, content }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    window.addEventListener("mousedown", onClick);
    return () => window.removeEventListener("mousedown", onClick);
  }, [open]);

  return (
    <div ref={ref} className="inline-block relative">
      <span onClick={() => setOpen(v => !v)} className="cursor-pointer">{trigger}</span>
      {open && (
        <div className="absolute right-0 mt-2 min-w-[180px] bg-white/90 glass rounded-xl shadow-lg p-4 z-30">
          {content}
        </div>
      )}
    </div>
  );
};

export default Popover;
