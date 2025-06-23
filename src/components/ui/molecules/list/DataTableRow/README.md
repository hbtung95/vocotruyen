# DataTableRow Molecule

Dùng cho 1 dòng dữ liệu trong bảng (table/grid).  
Hỗ trợ cell tuỳ chỉnh, select/check, actions, trạng thái highlight/disable/selected, inline edit.

## Props

| Prop      | Type            | Required | Description                            |
|-----------|-----------------|----------|----------------------------------------|
| cells     | DataTableCell[] | ✔️       | Các cell dữ liệu trong row             |
| selected  | boolean         | ❌       | Highlight dòng đã chọn                 |
| checked   | boolean         | ❌       | Checkbox đã chọn                       |
| onCheck   | (boolean)=>void | ❌       | Gọi khi check thay đổi                 |
| onRowClick| ()=>void        | ❌       | Gọi khi click vào dòng                 |
| highlight | boolean         | ❌       | Dòng nổi bật                           |
| disabled  | boolean         | ❌       | Vô hiệu hóa dòng                       |
| className | string          | ❌       | Custom className                       |
| rowId     | string/number   | ❌       | ID định danh dòng                      |
| actions   | ReactNode       | ❌       | Action phụ cuối dòng (button/menu)     |

## Example

```tsx
<DataTableRow
  cells={[
    { key: "name", content: "Nguyễn Văn B" },
    { key: "score", content: 8.9, align: "right" },
  ]}
  checked={true}
  onCheck={checked => alert(checked)}
  actions={<button>Chi tiết</button>}
/>
