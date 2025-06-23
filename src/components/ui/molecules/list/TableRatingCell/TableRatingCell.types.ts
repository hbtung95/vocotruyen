import { ReactNode } from "react";

export interface TableRatingCellProps {
  value: number | null | undefined;      // Số sao
  max?: number;                          // Tổng số sao (default 5)
  icon?: ReactNode;                      // Icon custom
  activeColor?: string;                  // Màu đã đánh giá
  inactiveColor?: string;                // Màu chưa đánh giá
  showValue?: boolean;                   // Hiện số điểm cạnh sao
  disabled?: boolean;
  tooltip?: string;
  bold?: boolean;
  highlight?: boolean;
  className?: string;
}
