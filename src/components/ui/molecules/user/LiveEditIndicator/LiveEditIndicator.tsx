import React from "react";
import { LiveEditIndicatorProps } from "./LiveEditIndicator.types";
import { Avatar } from "@/components/ui/atoms/Avatar";

const LiveEditIndicator: React.FC<LiveEditIndicatorProps> = ({
  users,
  maxVisible = 3,
  className = "",
  tooltip,
}) => {
  if (!users || users.length === 0) return null;

  const visibleUsers = users.slice(0, maxVisible);
  const extra = users.length - maxVisible;

  return (
    <div className={`flex items-center space-x-[-8px] group ${className}`} title={tooltip || undefined}>
      {visibleUsers.map((u, idx) => (
        <div
          key={u.id}
          className="ring-2 ring-white dark:ring-bg-dark rounded-full overflow-hidden"
          style={{
            zIndex: 10 - idx,
            borderColor: u.color || undefined,
          }}
        >
          <Avatar src={u.avatar || "/avatars/default.png"} alt={u.name} size={20} />
        </div>
      ))}
      {extra > 0 && (
        <span
          className="flex items-center justify-center bg-primary-100 text-xs font-semibold text-primary-700 rounded-full border border-white dark:border-bg-dark"
          style={{ width: 20, height: 20, zIndex: 0 }}
        >+{extra}</span>
      )}
      <span
        className="ml-2 text-xs text-primary-700 animate-pulse"
        aria-label="Đang cùng chỉnh sửa"
      >
        Đang cùng chỉnh sửa
      </span>
    </div>
  );
};

export default LiveEditIndicator;
