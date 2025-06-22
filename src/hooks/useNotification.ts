// src/hooks/useNotification.ts
import { useState, useCallback, useEffect } from "react";

// Kiểu notification
export interface AppNotification {
  id: number;
  text: string;
  time: string;
  read?: boolean;
  type?: "info" | "success" | "error";
}

// Hook notification + toast + sound
export function useNotification() {
  const [notifications, setNotifications] = useState<AppNotification[]>([]);
  const [toast, setToast] = useState<{ open: boolean; message: string; type: string }>({ open: false, message: "", type: "info" });

  // Thêm notification + phát sound/toast
  const notify = useCallback((noti: Omit<AppNotification, "id" | "time">) => {
    const n = {
      id: Date.now(),
      text: noti.text,
      type: noti.type || "info",
      read: false,
      time: new Date().toLocaleTimeString("vi-VN", { hour: "2-digit", minute: "2-digit" }),
    };
    setNotifications((prev) => [n, ...prev]);
    setToast({ open: true, message: n.text, type: n.type || "info" });
    // Play sound
    const audio = new Audio("/noti.mp3");
    audio.play();
  }, []);

  // Đóng toast
  const closeToast = () => setToast((t) => ({ ...t, open: false }));

  // Đánh dấu đã đọc
  const markAllRead = () => setNotifications((ns) => ns.map(n => ({ ...n, read: true })));

  // Fake WebSocket: nhận notification mới sau 5s
  useEffect(() => {
    // Chỉ demo cho local/test. Nếu dùng real WebSocket thì thay bằng ws event.
    const timeout = setTimeout(() => {
      notify({ text: "Bạn có thông báo mới! (fake WebSocket)", type: "info" });
    }, 5000);
    return () => clearTimeout(timeout);
  }, [notify]);

  return {
    notifications,
    notify,
    toast,
    closeToast,
    markAllRead,
  };
}
