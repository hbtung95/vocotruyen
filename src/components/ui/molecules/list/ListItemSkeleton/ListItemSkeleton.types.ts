export interface ListItemSkeletonProps {
  withIcon?: boolean;      // Có icon giả không
  actionsCount?: number;   // Số action button giả (mặc định 0)
  lines?: number;          // Số dòng skeleton label (mặc định 1)
  className?: string;
}
