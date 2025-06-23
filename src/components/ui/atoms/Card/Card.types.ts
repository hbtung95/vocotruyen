/**
 * Props cho atom Card
 */
export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Có bo góc lớn không */
  rounded?: boolean;
  /** Đổ bóng hay không */
  shadow?: boolean;
  /** Nền glass, màu đặc biệt... */
  variant?: "glass" | "solid" | "bordered";
  /** Custom class */
  className?: string;
}
