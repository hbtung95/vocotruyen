# TableProgressCell Molecule

Hiển thị tiến độ (progress) trong cell bảng: thanh, vòng tròn, icon, trạng thái completed/error...

## Props

| Prop        | Type      | Required | Description                |
|-------------|-----------|----------|----------------------------|
| value       | number    | ✔️      | Phần trăm 0-100            |
| showLabel   | boolean   | ❌      | Hiện nhãn %                |
| showIcon    | boolean   | ❌      | Hiện icon trạng thái       |
| barType     | "line"/"circle" | ❌ | Kiểu bar/thanh/vòng        |
| color       | string    | ❌      | Màu trạng thái chính       |
| successColor| string    | ❌      | Màu completed              |
| errorColor  | string    | ❌      | Màu error                  |
| error       | boolean   | ❌      | Đánh dấu lỗi                |
| tooltip     | string    | ❌      | Tooltip                    |
| highlight   | boolean   | ❌      | Nổi bật                    |
| icon        | ReactNode | ❌      | Icon custom                |
| className   | string    | ❌      | Custom className           |

## Example

```tsx
<TableProgressCell
  value={83}
  barType="circle"
  tooltip="Tiến độ hoàn thành"
  showLabel
  showIcon
/>
