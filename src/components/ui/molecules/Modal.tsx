import React from "react";

interface ModalProps {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
  className?: string;
}

const Modal: React.FC<ModalProps> = ({ open, onClose, children, className }) =>
  open ? (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30">
      <div
        className={`bg-white glass p-6 rounded-3xl shadow-xl relative min-w-[320px] ${className || ""}`}
      >
        <button
          className="absolute top-3 right-3 bg-gray-100 rounded-full px-2 py-1 text-lg"
          onClick={onClose}
          aria-label="Đóng"
        >
          ×
        </button>
        {children}
      </div>
    </div>
  ) : null;

export default Modal;
