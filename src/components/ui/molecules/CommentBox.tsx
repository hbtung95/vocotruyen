import React, { useState } from "react";

interface Props {
  onSend: (value: string) => void;
  placeholder?: string;
}

const CommentBox: React.FC<Props> = ({ onSend, placeholder = "Bình luận..." }) => {
  const [value, setValue] = useState("");
  return (
    <div className="rounded-xl glass p-3 flex gap-2 items-end">
      <textarea
        className="w-full p-2 rounded-xl border bg-transparent min-h-[36px] focus:outline-none resize-none"
        placeholder={placeholder}
        value={value}
        onChange={e => setValue(e.target.value)}
      />
      <button
        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-xl shadow"
        onClick={() => {
          if (value.trim()) {
            onSend(value.trim());
            setValue("");
          }
        }}
      >
        Gửi
      </button>
    </div>
  );
};

export default CommentBox;
