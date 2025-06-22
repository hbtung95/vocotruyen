// Demo mock "real-time" cập nhật, có thể bỏ nếu chưa cần
import React, { useEffect, useState } from "react";

export default function RealtimeDemo() {
  const [time, setTime] = useState(Date.now());
  useEffect(() => {
    const i = setInterval(() => setTime(Date.now()), 1000);
    return () => clearInterval(i);
  }, []);
  return (
    <div className="rounded-xl glass bg-blue-100/30 px-4 py-2 text-blue-800">
      Đồng hồ realtime: <b>{new Date(time).toLocaleTimeString()}</b>
    </div>
  );
}
