import React, { useState } from "react";

type Option = { label: string; value: string; type?: string };

interface Props {
  options: Option[];
  onSelect: (option: Option) => void;
  placeholder?: string;
  className?: string;
}

const AutoCompleteSearch: React.FC<Props> = ({
  options,
  onSelect,
  placeholder = "Tìm kiếm...",
  className,
}) => {
  const [input, setInput] = useState("");
  const [show, setShow] = useState(false);

  const filtered = input
    ? options.filter(
        (o) =>
          o.label.toLowerCase().includes(input.toLowerCase()) ||
          o.value.toLowerCase().includes(input.toLowerCase())
      )
    : options;

  return (
    <div className={`relative w-full max-w-xs ${className || ""}`}>
      <input
        className="w-full rounded-2xl px-4 py-2 glass border focus:outline-none"
        placeholder={placeholder}
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
          setShow(true);
        }}
        onFocus={() => setShow(true)}
        onBlur={() => setTimeout(() => setShow(false), 120)}
      />
      {show && filtered.length > 0 && (
        <div className="absolute z-20 left-0 right-0 mt-1 bg-white/60 glass rounded-xl shadow-glass max-h-48 overflow-auto border">
          {filtered.map((opt, idx) => (
            <div
              key={opt.value}
              onClick={() => {
                onSelect(opt);
                setInput(opt.label);
                setShow(false);
              }}
              className={`px-4 py-2 cursor-pointer hover:bg-blue-100/60 ${
                idx !== filtered.length - 1 && "border-b"
              }`}
            >
              <span className="font-medium">{opt.label}</span>
              {opt.type && (
                <span className="ml-2 text-xs text-gray-500">{opt.type}</span>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AutoCompleteSearch;
