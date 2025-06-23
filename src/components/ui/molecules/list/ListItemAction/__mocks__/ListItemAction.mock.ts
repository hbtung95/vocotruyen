import { ListItemActionProps } from "../ListItemAction.types";

export const mockListItemAction: ListItemActionProps = {
  icon: "🎯",
  label: "Chấm điểm VĐV",
  description: "Thao tác cho từng trận",
  actions: <button className="text-xs text-primary-600">Chấm điểm</button>,
  selected: false,
  disabled: false,
  onActionClick: () => alert("Đã chấm điểm!"),
};
