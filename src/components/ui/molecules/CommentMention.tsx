import React, { useState } from "react";
// Giả sử danh sách user/fake mention (có thể fetch từ API)
const mentions = [
  { label: "Nguyễn Văn A", value: "nguyenvana" },
  { label: "Trần Thị B", value: "tranthib" }
];

interface Props {
  onSend: (value: string) => void;
  placeholder?: string;
}

const CommentMention: React.FC<Props> = ({ onSend, placeholder }) => {
  const [value, setValue] = useState("");
  const [show, setShow] = useState(false);

  return (
    <div className="relative w-full">
      <textarea
        className="w-full p-2 rounded-xl border bg-transparent min-h-[36px] focus:outline-none resize-none"
        placeholder={placeholder || "Bình luận... (@ để nhắc tên)"}
        value={value}
        onChange={e => {
          setValue(e.target.value);
          setShow(e.target.value.includes("@"));
        }}
      />
      {show && (
        <div className="absolute z-20 left-0 top-full mt-1 bg-white/90 glass rounded-xl shadow p-2">
          {mentions.map(m => (
            <div
              key={m.value}
              className="px-2 py-1 hover:bg-blue-100 cursor-pointer rounded"
              onClick={() => {
                setValue(v => v.replace(/@\w*$/, "@" + m.label + " "));
                setShow(false);
              }}
            >
              @{m.label}
            </div>
          ))}
        </div>
      )}
      <button
        className="mt-2 bg-blue-500 text-white px-4 py-1 rounded-xl"
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

export default CommentMention;
