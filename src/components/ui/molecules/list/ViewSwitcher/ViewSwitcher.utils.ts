// Lấy view đang chọn
import { SwitchView } from "./ViewSwitcher.types";

export function getCurrentView(views: SwitchView[], key: string) {
  return views.find(v => v.key === key) || views[0];
}
