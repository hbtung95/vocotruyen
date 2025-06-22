import React from "react";

type Props = {
  keys: string[];
  action: string;
  onTrigger?: () => void;
};

const KeyboardShortcutHint: React.FC<Props> = ({ keys, action, onTrigger }) => (
  <div
    className="flex items-center gap-2 select-none bg-white/60 rounded-xl px-3 py-1 shadow border glass w-fit"
    tabIndex={0}
    title={`Phím tắt: ${keys.join(" + ")}`}
    onClick={onTrigger}
    style={{ cursor: onTrigger ? "pointer" : undefined }}
  >
    {keys.map((k, i) => (
      <span
        key={i}
        className="bg-gray-200 text-gray-800 font-mono rounded px-2 py-0.5 text-xs border"
      >
        {k}
      </span>
    ))}
    <span className="text-gray-600 text-xs ml-1">{action}</span>
  </div>
);

export default KeyboardShortcutHint;
