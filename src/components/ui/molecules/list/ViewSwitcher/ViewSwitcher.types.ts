import { ReactNode } from "react";

export interface SwitchView {
  key: string;
  label: string;
  icon?: ReactNode;
}

export interface ViewSwitcherProps {
  views: SwitchView[];                 // Danh sách view (list/table/kanban...)
  current: string;                     // key view hiện tại
  onSwitch: (key: string) => void;     // Khi đổi view
  className?: string;
  size?: "sm" | "md" | "lg";           // Cỡ nút
  variant?: "tab" | "segmented";       // Kiểu UI
}
