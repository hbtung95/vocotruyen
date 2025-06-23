export interface TableColumn {
  key: string;
  label: string;
  visible: boolean;
  resizable?: boolean;
  width?: number | string; // px hoặc %
  fixed?: boolean;
}

export interface TableColumnSettingsProps {
  columns: TableColumn[];
  onChange: (columns: TableColumn[]) => void; // Gọi khi cập nhật thứ tự, ẩn/hiện, resize
  allowReorder?: boolean;
  allowResize?: boolean;
  className?: string;
}
