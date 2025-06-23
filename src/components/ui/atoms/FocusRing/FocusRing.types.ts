/**
 * Props cho atom FocusRing
 */
export interface FocusRingProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Element được wrap */
  children: React.ReactNode;
  /** Hiệu ứng màu focus */
  color?: string; // ex: "#1e90ff" hoặc Tailwind class
  /** Độ rộng hiệu ứng */
  width?: number; // ex: 2, 3, 4
  /** Custom class */
  className?: string;
}
