/**
 * Props cho atom AvatarGroup
 */
export interface AvatarGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Danh sách url/avatar */
  avatars: {
    src: string;
    alt?: string;
    key?: string | number;
    name?: string; // nếu muốn render initial
  }[];
  /** Số lượng hiển thị tối đa */
  max?: number;
  /** Kích thước px (default: 32) */
  size?: number;
  /** Overlap px (âm sẽ overlap) */
  overlap?: number;
  /** Custom class */
  className?: string;
}
