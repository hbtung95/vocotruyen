import React, { useEffect, useState } from "react";

const actions = [
  { label: "Tạo mới VĐV", shortcut: "Ctrl+N", onTrigger: () => alert("Tạo mới VĐV") },
  { label: "Chuyển dashboard", shortcut: "Ctrl+D", onTrigger: () => alert("Go Dashboard") },
];

const CommandPalette: React.FC = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const listener = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.key === "k") {
        e.preventDefault();
        setOpen((o) => !o);
      }
    };
    window.addEventListener("keydown", listener);
    return () => window.removeEventListener("keydown", listener);
  }, []);

  return (
    <>
      {open && (
        <div className="fixed inset-0 bg-black/30 z-50 flex items-center justify-center">
          <div className="bg-white rounded-2xl shadow-lg p-6 w-96">
            <h2 className="font-bold mb-3">Command Palette</h2>
            {actions.map((a) => (
              <button
                key={a.label}
                onClick={() => {
                  a.onTrigger();
                  setOpen(false);
                }}
                className="block w-full text-left p-2 hover:bg-blue-100 rounded"
              >
                {a.label}
                <span className="float-right text-xs text-gray-400">
                  {a.shortcut}
                </span>
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default CommandPalette;
