import { ReactNode } from "react";

export interface UserCardCompactProps {
  avatar: string;
  name: string;
  subtitle?: string;
  status?: "online" | "offline" | "busy" | "away";
  actions?: ReactNode;
  className?: string;
}
