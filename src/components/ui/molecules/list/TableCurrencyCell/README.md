# TableCurrencyCell Molecule

Hiển thị tiền tệ trong cell bảng, tự động format theo đơn vị/locale, hỗ trợ màu, icon, copy, error.

## Props

| Prop        | Type      | Required | Description                |
|-------------|-----------|----------|----------------------------|
| value       | number    | ✔️      | Giá trị tiền               |
| currency    | string    | ❌      | Đơn vị tiền (VND/USD/...)  |
| locale      | string    | ❌      | Ngôn ngữ/định dạng         |
| showSymbol  | boolean   | ❌      | Hiện ký hiệu đơn vị        |
| symbol      | string    | ❌      | Ghi đè ký hiệu đơn vị      |
| showColor   | boolean   | ❌      | Màu đỏ/ xanh cho âm/dương  |
| highlight   | boolean   | ❌      | Nổi bật                    |
| tooltip     | string    | ❌      | Tooltip                    |
| icon        | ReactNode | ❌      | Icon minh hoạ              |
| bold        | boolean   | ❌      | In đậm                     |
| copyable    | boolean   | ❌      | Click để copy              |
| onCopy      | (v)=>void | ❌      | Callback khi copy          |
| error       | boolean   | ❌      | Đánh dấu lỗi               |
| className   | string    | ❌      | Custom className           |

## Example

```tsx
<TableCurrencyCell
  value={1000000}
  currency="VND"
  showSymbol
  showColor
  copyable
  tooltip="Số tiền VNĐ"
/>
