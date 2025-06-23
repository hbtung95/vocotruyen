// src/components/ui/molecules/user/UserCard/UserCard.types.ts
import { ReactNode } from "react";

export interface UserCardProps {
  avatar: string;                  // URL hoặc path avatar
  name: string;                    // Tên người dùng
  subtitle?: string;               // Phụ đề/nghề nghiệp
  status?: "online" | "offline" | "busy" | "away";
  actions?: ReactNode;             // Nút/action phụ (edit, menu...)
  className?: string;
}
