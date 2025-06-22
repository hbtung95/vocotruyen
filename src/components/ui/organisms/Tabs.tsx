import React from "react";

type Tab = { label: string; value: string };

type Props = {
  tabs: Tab[];
  current: string;
  onChange: (v: string) => void;
};

const Tab: React.FC<Props> = ({ tabs, current, onChange }) => (
  <div className="flex gap-2 bg-blue-50/80 rounded-xl p-1">
    {tabs.map(tab => (
      <button
        key={tab.value}
        className={`px-4 py-1 rounded-xl font-semibold transition-all ${current === tab.value ? "bg-blue-500 text-white shadow" : "bg-white text-blue-600 hover:bg-blue-100"}`}
        onClick={() => onChange(tab.value)}
      >
        {tab.label}
      </button>
    ))}
  </div>
);

export default Tab;
