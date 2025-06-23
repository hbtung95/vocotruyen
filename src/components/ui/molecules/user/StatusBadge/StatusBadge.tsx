import React from "react";
import { StatusBadgeProps } from "./StatusBadge.types";

const statusStyleMap: Record<string, string> = {
  active: "bg-green-100 text-green-700 border-green-400",
  inactive: "bg-gray-100 text-gray-500 border-gray-300",
  pending: "bg-yellow-100 text-yellow-700 border-yellow-400",
  approved: "bg-blue-100 text-blue-700 border-blue-400",
  rejected: "bg-red-100 text-red-700 border-red-400",
  banned: "bg-red-200 text-red-800 border-red-400",
  warning: "bg-orange-100 text-orange-700 border-orange-400",
  error: "bg-red-100 text-red-700 border-red-400",
  success: "bg-green-100 text-green-700 border-green-400",
  draft: "bg-gray-50 text-gray-400 border-gray-200",
  processing: "bg-blue-50 text-blue-600 border-blue-200",
};

const defaultLabel: Record<string, string> = {
  active: "Đang hoạt động",
  inactive: "Ngừng hoạt động",
  pending: "Đang chờ",
  approved: "Đã duyệt",
  rejected: "Từ chối",
  banned: "Khóa",
  warning: "Cảnh báo",
  error: "Lỗi",
  success: "Thành công",
  draft: "Nháp",
  processing: "Đang xử lý",
};

const StatusBadge: React.FC<StatusBadgeProps> = ({
  status,
  label,
  icon,
  className = "",
  tooltip,
}) => (
  <span
    className={`
      inline-flex items-center px-2.5 py-0.5 border rounded-full text-xs font-semibold
      ${statusStyleMap[status] || "bg-gray-100 text-gray-400 border-gray-200"}
      ${className}
    `}
    title={tooltip || label || defaultLabel[status] || status}
    aria-label={label || defaultLabel[status] || status}
    data-testid="status-badge"
  >
    {icon && <span className="mr-1">{icon}</span>}
    {label || defaultLabel[status] || status}
  </span>
);

export default StatusBadge;
