/**
 * Props cho atom Skeleton
 */
export interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Kiểu skeleton: text, rect, circle, avatar */
  variant?: "text" | "rect" | "circle" | "avatar";
  /** Chiều rộng (px, %, rem...) */
  width?: number | string;
  /** Chiều cao (px, %, rem...) */
  height?: number | string;
  /** Border radius (px, %, rem...) */
  radius?: number | string;
  /** Có hiệu ứng shimmer? */
  animate?: boolean;
  /** Custom class */
  className?: string;
}
