export interface TableFieldUsageStatsProps {
  label: string;                // Tên cột/field
  totalRows: number;            // Tổng số dòng trong table
  nonEmptyRows: number;         // Số dòng field này có dữ liệu
  filteredCount?: number;       // Số lần cột này được dùng để filter
  sortedCount?: number;         // Số lần cột này được dùng để sort
  isVisible?: boolean;          // Cột có đang hiển thị không
  onToggleVisible?: (visible: boolean) => void;
  className?: string;
}
