import React, { useRef, useEffect } from "react";
import { TextareaProps } from "../Textarea.types";

/**
 * TextareaAutoResize – Tự động co giãn chiều cao theo nội dung
 */
const TextareaAutoResize: React.FC<TextareaProps> = (props) => {
  const ref = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (ref.current) {
      ref.current.style.height = "auto";
      ref.current.style.height = ref.current.scrollHeight + "px";
    }
  }, [props.value]);

  return <textarea ref={ref} {...props} className={["resize-none", props.className].join(" ")} />;
};

export default TextareaAutoResize;
