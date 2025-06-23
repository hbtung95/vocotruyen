import { ReactNode } from "react";

export interface UserCellItem {
  id: string;
  name: string;
  avatar?: string;
  email?: string;
  role?: string;
  status?: "active" | "inactive" | "offline" | "online";
  tooltip?: string;
}

export interface TableUserCellProps {
  users: UserCellItem[];
  multi?: boolean;
  max?: number;                   // Hiện tối đa N user
  avatarSize?: number;            // px, default 36
  showEmail?: boolean;
  showRole?: boolean;
  showStatus?: boolean;
  onClickUser?: (user: UserCellItem, idx: number) => void;
  className?: string;
}
