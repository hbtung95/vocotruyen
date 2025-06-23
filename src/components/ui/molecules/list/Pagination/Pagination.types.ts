export interface PaginationProps {
  page: number;                  // Trang hiện tại (1-based)
  pageSize: number;              // Số dòng/trang
  total: number;                 // Tổng số dòng
  onPageChange: (page: number) => void;
  onPageSizeChange?: (size: number) => void;
  pageSizeOptions?: number[];    // Tùy chọn số dòng/trang
  showPageSize?: boolean;        // Hiện combo chọn pageSize
  disabled?: boolean;
  loading?: boolean;
  className?: string;
}
