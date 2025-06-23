import { ReactNode } from "react";

export interface LiveEditUser {
  id: string | number;
  name: string;
  avatar?: string;
  color?: string; // màu đặc trưng cho user (optional)
}

export interface LiveEditIndicatorProps {
  users: LiveEditUser[];
  maxVisible?: number;       // số avatar hiển thị tối đa
  className?: string;
  tooltip?: string;          // Tooltip custom nếu muốn
}
