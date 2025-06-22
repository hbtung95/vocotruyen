import React from "react";

interface Props extends React.SelectHTMLAttributes<HTMLSelectElement> {
  options: { value: string; label: string }[];
}

const Select: React.FC<Props> = ({ options, ...props }) => (
  <select
    className="rounded-xl px-4 py-2 border bg-white/80 glass focus:outline-blue-300"
    {...props}
  >
    {options.map(opt => (
      <option key={opt.value} value={opt.value}>{opt.label}</option>
    ))}
  </select>
);

export default Select;
