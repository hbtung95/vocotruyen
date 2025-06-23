# TableBooleanCell Molecule

Hiển thị giá trị boolean trong cell bảng (checked/unchecked, Đạt/Không đạt, Yes/No...).  
Hỗ trợ icon, label, trạng thái màu, click toggle, tooltip, highlight.

## Props

| Prop        | Type       | Required | Description                |
|-------------|------------|----------|----------------------------|
| value       | boolean    | ✔️      | Giá trị boolean            |
| trueLabel   | string     | ❌      | Label cho true             |
| falseLabel  | string     | ❌      | Label cho false            |
| trueIcon    | ReactNode  | ❌      | Icon true                  |
| falseIcon   | ReactNode  | ❌      | Icon false                 |
| trueColor   | string     | ❌      | Màu cho true               |
| falseColor  | string     | ❌      | Màu cho false              |
| tooltip     | string     | ❌      | Tooltip                    |
| highlight   | boolean    | ❌      | Nổi bật                    |
| toggleable  | boolean    | ❌      | Cho phép click đổi trạng thái |
| onToggle    | (val)=>void| ❌      | Sự kiện đổi trạng thái     |
| className   | string     | ❌      | Custom className           |

## Example

```tsx
<TableBooleanCell
  value={true}
  trueLabel="Đạt"
  falseLabel="Chưa đạt"
  toggleable
  tooltip="Kết quả kiểm tra"
  onToggle={setChecked}
/>
