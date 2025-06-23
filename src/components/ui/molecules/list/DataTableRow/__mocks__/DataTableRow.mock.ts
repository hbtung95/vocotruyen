import { DataTableRowProps } from "../DataTableRow.types";

export const mockDataTableRow: DataTableRowProps = {
  cells: [
    { key: "name", content: "Nguyễn Văn A" },
    { key: "score", content: 9.5, align: "right" },
  ],
  selected: false,
  checked: false,
  onCheck: (checked) => alert(`Checked: ${checked}`),
  onRowClick: () => alert("Row clicked!"),
  actions: <button className="text-xs text-primary-600">Xem</button>,
};
