import React from "react";

interface Props {
  page: number;
  total: number;
  pageSize: number;
  onChange: (page: number) => void;
}

const Pagination: React.FC<Props> = ({ page, total, pageSize, onChange }) => {
  const totalPages = Math.ceil(total / pageSize);
  if (totalPages <= 1) return null;

  return (
    <div className="flex gap-2 justify-center mt-4">
      <button
        disabled={page === 1}
        onClick={() => onChange(page - 1)}
        className="rounded-full px-3 py-1 bg-white/70 border border-blue-100 text-blue-600 hover:bg-blue-50 disabled:opacity-40"
      >
        &lt;
      </button>
      {[...Array(totalPages)].map((_, idx) => (
        <button
          key={idx}
          onClick={() => onChange(idx + 1)}
          className={`rounded-full px-3 py-1 border ${page === idx + 1 ? "bg-blue-500 text-white" : "bg-white/70 border-blue-100 text-blue-600"} hover:bg-blue-100`}
        >
          {idx + 1}
        </button>
      ))}
      <button
        disabled={page === totalPages}
        onClick={() => onChange(page + 1)}
        className="rounded-full px-3 py-1 bg-white/70 border border-blue-100 text-blue-600 hover:bg-blue-50 disabled:opacity-40"
      >
        &gt;
      </button>
    </div>
  );
};

export default Pagination;
