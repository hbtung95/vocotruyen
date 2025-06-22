import React, { useState } from "react";
import { SelectProps } from "../Select.types";
import { Icon } from "../../Icon";

/**
 * SelectSearch – Dropdown có filter realtime
 */
const SelectSearch: React.FC<SelectProps> = ({
  options,
  placeholder,
  ...props
}) => {
  const [filter, setFilter] = useState("");
  const filtered = options.filter(
    (opt) =>
      String(opt.label).toLowerCase().includes(filter.toLowerCase()) ||
      String(opt.value).toLowerCase().includes(filter.toLowerCase())
  );
  return (
    <div className="flex flex-col gap-1">
      <div className="relative">
        <input
          className="w-full h-10 rounded-xl px-3 border border-gray-300 focus:ring-2 focus:ring-accent bg-white/40 dark:bg-gray-900/40 mb-1"
          placeholder={placeholder || "Tìm kiếm..."}
          value={filter}
          onChange={e => setFilter(e.target.value)}
        />
        <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
          <Icon name="search" size={18} />
        </span>
      </div>
      <select
        {...props}
        className="w-full h-10 rounded-xl px-3 border border-gray-300 focus:ring-2 focus:ring-accent bg-white/40 dark:bg-gray-900/40"
      >
        {filtered.map(opt => (
          <option key={opt.value} value={opt.value}>{opt.label}</option>
        ))}
      </select>
    </div>
  );
};

export default SelectSearch;
