import { ReactNode } from "react";

export interface MiniProfilePopoverProps {
  avatar: string;
  name: string;
  subtitle?: string;
  email?: string;
  status?: "online" | "offline" | "busy" | "away";
  actions?: ReactNode;
  className?: string;
}
