# TableExportMenu Molecule

Dropdown xuất dữ liệu table: Excel, CSV, JSON, PDF, chọn các dòng đã chọn...

## Props

| Prop          | Type         | Required | Description                       |
|---------------|--------------|----------|-----------------------------------|
| onExport      | (fmt, opt)=>void | ✔️    | Callback khi xuất file            |
| formats       | ExportMenuOption[] | ❌   | Danh sách định dạng hỗ trợ        |
| withSelection | boolean      | ❌       | Có chọn “chỉ xuất dòng đã chọn”   |
| disabled      | boolean      | ❌       | Disable nút xuất                  |
| className     | string       | ❌       | Custom className                  |

## Example

```tsx
<TableExportMenu
  onExport={(fmt, opt) => exportData(fmt, opt)}
  withSelection
/>
