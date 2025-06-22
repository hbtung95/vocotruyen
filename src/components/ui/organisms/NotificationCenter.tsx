// src/components/ui/NotificationCenter.tsx
import React, { useState } from "react";
import { useNotification } from "../../../hooks/useNotification";

const NotificationCenter: React.FC = () => {
  const { notifications, markAllRead } = useNotification();
  const [open, setOpen] = useState(false);

  const unread = notifications.filter(n => !n.read).length;

  return (
    <div className="relative">
      <button
        className="relative p-2 bg-white/40 backdrop-blur rounded-full shadow"
        onClick={() => setOpen((o) => !o)}
      >
        <span role="img" aria-label="bell">🔔</span>
        {unread > 0 && (
          <span className="absolute top-0 right-0 bg-red-500 rounded-full w-5 h-5 flex items-center justify-center text-white text-xs">{unread}</span>
        )}
      </button>
      {open && (
        <div className="absolute right-0 mt-2 w-80 max-w-[90vw] bg-white/90 rounded-xl shadow-glass p-4 z-50">
          <div className="flex justify-between items-center mb-2">
            <span className="font-semibold">Thông báo</span>
            <button className="text-sm text-blue-600" onClick={markAllRead}>Đánh dấu đã đọc</button>
          </div>
          <ul className="max-h-60 overflow-y-auto">
            {notifications.length === 0 && <li className="text-gray-500 text-sm">Không có thông báo</li>}
            {notifications.map((n, idx) => (
              <li key={idx} className={`py-2 border-b last:border-none ${n.read ? "opacity-60" : "font-bold"}`}>
                <div>{n.text}</div>
                <div className="text-xs text-gray-400">{n.time}</div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default NotificationCenter;
