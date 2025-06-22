/**
 * Props cho atom Tooltip
 */
export interface TooltipProps {
  /** Nội dung tooltip */
  content: React.ReactNode;
  /** Trẻ em (children) để bọc */
  children: React.ReactNode;
  /** Vị trí: top, right, bottom, left */
  position?: "top" | "right" | "bottom" | "left";
  /** Độ trễ xuất hiện (ms) */
  delay?: number;
  /** Có thể disabled? */
  disabled?: boolean;
  /** Class custom */
  className?: string;
}
