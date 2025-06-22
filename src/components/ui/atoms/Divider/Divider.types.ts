/**
 * Props cho component Divider
 */
export interface DividerProps extends React.HTMLAttributes<HTMLHRElement> {
  /** Kiểu dọc hay ngang */
  orientation?: "horizontal" | "vertical";
  /** Dạng đứt nét */
  dashed?: boolean;
  /** Độ dày (px hoặc Tailwind size) */
  thickness?: number | string;
  /** Custom class */
  className?: string;
}
