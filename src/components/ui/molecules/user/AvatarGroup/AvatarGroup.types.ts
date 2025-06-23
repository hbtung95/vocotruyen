import { ReactNode } from "react";

export interface AvatarItem {
  src: string;           // Link ảnh đại diện
  alt: string;           // Tên hoặc mô tả
  status?: "online" | "offline" | "busy" | "away";
  id?: string | number;
}

export interface AvatarGroupProps {
  avatars: AvatarItem[];
  maxVisible?: number;   // Số avatar hiển thị tối đa
  size?: "sm" | "md" | "lg" | number;
  showMoreLabel?: (count: number) => ReactNode; // Custom label số còn lại
  className?: string;
}
