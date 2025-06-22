/**
 * Props cho Icon atom
 */
export interface IconProps extends React.SVGAttributes<SVGElement> {
  /** Tên icon (đặt trùng tên file trong icons/) */
  name: string;
  /** Kích thước: small/medium/large hoặc số px */
  size?: "sm" | "md" | "lg" | number;
  /** Màu (theo theme hoặc custom) */
  color?: string;
  /** className thêm */
  className?: string;
  /** Nếu chỉ dùng cho a11y decoration, sẽ aria-hidden */
  "aria-label"?: string;
}
