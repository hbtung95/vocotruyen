import { ListItemSelectableProps } from "../ListItemSelectable.types";

export const mockListItemSelectable: ListItemSelectableProps = {
  icon: "👤",
  label: "Nguyễn Văn A",
  description: "VĐV tiêu biểu",
  checked: false,
  disabled: false,
  actions: <button className="text-xs text-primary-600">Chi tiết</button>,
  onChange: (checked) => alert(`Chọn: ${checked}`),
};
