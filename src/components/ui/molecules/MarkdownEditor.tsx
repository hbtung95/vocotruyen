import React, { useState } from "react";
// import "github-markdown-css/github-markdown-light.css";
import ReactMarkdown from "react-markdown";

interface Props {
  value: string;
  onChange: (v: string) => void;
}
const MarkdownEditor: React.FC<Props> = ({ value, onChange }) => {
  const [mode, setMode] = useState<"edit" | "preview">("edit");
  return (
    <div className="glass rounded-2xl p-4">
      <div className="flex gap-2 mb-2">
        <button
          className={`px-4 py-1 rounded-l-xl ${mode === "edit" ? "bg-blue-500 text-white" : "bg-white text-blue-500"}`}
          onClick={() => setMode("edit")}
        >
          Soạn
        </button>
        <button
          className={`px-4 py-1 rounded-r-xl ${mode === "preview" ? "bg-blue-500 text-white" : "bg-white text-blue-500"}`}
          onClick={() => setMode("preview")}
        >
          Xem
        </button>
      </div>
      {mode === "edit" ? (
        <textarea
          className="w-full min-h-[80px] p-2 border rounded-xl"
          value={value}
          onChange={e => onChange(e.target.value)}
          placeholder="Gõ markdown..."
        />
      ) : (
        <div className="markdown-body px-2 py-1">
          <ReactMarkdown>{value || "*Không có nội dung*"}</ReactMarkdown>
        </div>
      )}
    </div>
  );
};

export default MarkdownEditor;
