import { useCallback, useEffect, useRef, useState } from "react";

// Sử dụng BroadcastChannel nếu được, fallback về localStorage event nếu không
const canBroadcast = typeof window !== "undefined" && "BroadcastChannel" in window;
const channelName = "notifications";

export type NotificationPayload = {
  id: string | number;
  text: string;
  time: string;
  unread?: boolean;
  type?: "info" | "success" | "error";
};

export function useRealtimeNotification() {
  const [notifications, setNotifications] = useState<NotificationPayload[]>([]);
  const soundRef = useRef<HTMLAudioElement>(null);

  // Nhận notification mới (real-time)
  useEffect(() => {
    if (canBroadcast) {
      const bc = new BroadcastChannel(channelName);
      bc.onmessage = (event) => {
        _onReceive(event.data);
      };
      return () => bc.close();
    } else {
      function onStorage(e: StorageEvent) {
        if (e.key === "REALTIME_NOTIFICATION" && e.newValue) {
          _onReceive(JSON.parse(e.newValue));
        }
      }
      window.addEventListener("storage", onStorage);
      return () => window.removeEventListener("storage", onStorage);
    }
    // eslint-disable-next-line
  }, []);

  // Hàm push noti (gửi toàn app, các tab)
  const pushNotification = useCallback((noti: NotificationPayload) => {
    // Tự push lên local
    _onReceive(noti);
    // Broadcast ra tất cả tab FE
    if (canBroadcast) {
      const bc = new BroadcastChannel(channelName);
      bc.postMessage(noti);
      bc.close();
    } else {
      window.localStorage.setItem("REALTIME_NOTIFICATION", JSON.stringify(noti));
    }
  }, []);

  // Nội bộ: nhận và update + play sound
  function _onReceive(noti: NotificationPayload) {
    setNotifications(prev => [{ ...noti, unread: true }, ...prev]);
    // Play sound khi nhận noti mới
    if (soundRef.current) {
      soundRef.current.currentTime = 0;
      soundRef.current.play().catch(() => {});
    }
  }

  // Mark as read
  const markRead = (id: string | number) => {
    setNotifications(prev => prev.map(n => n.id === id ? { ...n, unread: false } : n));
  };

  // Xoá/thêm các action khác nếu muốn

  return {
    notifications,
    pushNotification,
    markRead,
    soundRef,
  };
}
