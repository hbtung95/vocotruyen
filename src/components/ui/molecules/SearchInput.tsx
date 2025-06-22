import React from "react";
import { FiSearch } from "react-icons/fi"; // npm i react-icons

type Props = {
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  className?: string;
};
const SearchInput: React.FC<Props> = ({ value, onChange, placeholder = "Tìm kiếm...", className }) => (
  <div className={`relative w-full max-w-xs ${className || ""}`}>
    <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-blue-400" />
    <input
      className="pl-10 pr-3 py-2 w-full rounded-xl border glass focus:border-blue-400 focus:outline-none"
      placeholder={placeholder}
      value={value}
      onChange={e => onChange(e.target.value)}
    />
  </div>
);
export default SearchInput;
