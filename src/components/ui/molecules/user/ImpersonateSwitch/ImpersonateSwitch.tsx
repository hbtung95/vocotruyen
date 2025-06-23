import React from "react";
import { ImpersonateSwitchProps } from "./ImpersonateSwitch.types";
import styles from "./themes/ImpersonateSwitch.module.css";
import { Icon } from "@/components/ui/atoms/Icon";

const ImpersonateSwitch: React.FC<ImpersonateSwitchProps> = ({
  impersonatedName,
  onReturnToAdmin,
  adminName,
  showBanner = true,
  className = "",
}) => (
  showBanner ? (
    <div
      className={`w-full flex items-center justify-between bg-gradient-to-r from-amber-500 to-rose-500 text-white px-4 py-2 shadow-md rounded-b-xl font-semibold
        ${styles.impersonateBanner || ""} ${className}`}
      role="alert"
      aria-live="polite"
    >
      <div className="flex items-center gap-2">
        <Icon name="user-switch" size={20} />
        <span>
          Đang đăng nhập với quyền <strong>{impersonatedName}</strong>
          {adminName && <> (Admin: <strong>{adminName}</strong>)</>}
        </span>
      </div>
      <button
        onClick={onReturnToAdmin}
        className="ml-4 bg-white/20 hover:bg-white/40 text-white font-semibold px-3 py-1 rounded transition"
        aria-label="Trở về tài khoản admin"
      >
        <Icon name="log-out" size={16} className="mr-1" />
        Trở về admin
      </button>
    </div>
  ) : null
);

export default ImpersonateSwitch;
