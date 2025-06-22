// src/components/ui/Toast.tsx
import React, { useEffect } from "react";

interface ToastProps {
  open: boolean;
  message: string;
  type?: "success" | "error" | "info";
  onClose: () => void;
  sound?: boolean;
}

const Toast: React.FC<ToastProps> = ({ open, message, type = "info", onClose, sound }) => {
  useEffect(() => {
    if (open && sound) {
      const audio = new Audio("/noti.mp3");
      audio.play();
    }
    if (open) {
      const timer = setTimeout(onClose, 2500);
      return () => clearTimeout(timer);
    }
  }, [open, onClose, sound]);

  if (!open) return null;
  let color = "bg-blue-400";
  if (type === "success") color = "bg-green-400";
  if (type === "error") color = "bg-red-400";
  return (
    <div className={`fixed top-5 right-5 z-50 px-5 py-3 rounded-2xl text-white shadow-glass backdrop-blur-md animate-fade-in ${color}`}>
      {message}
    </div>
  );
};

export default Toast;
