import { TableToolbarProps } from "../TableToolbar.types";

export const mockTableToolbar: TableToolbarProps = {
  title: "Mock Toolbar",
  selectedCount: 1,
  onAdd: () => alert("Add!"),
  onRefresh: () => alert("Refresh!"),
  onSearch: (kw) => alert("Search: " + kw),
  bulkActions: <button>Xóa</button>,
  filterComponent: <select><option>Tất cả</option></select>,
  extraActions: <button>Export</button>,
};
