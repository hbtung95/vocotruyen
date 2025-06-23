# TableRatingCell Molecule

Hiển thị đánh giá (số sao, điểm) trong cell bảng.  
Hỗ trợ icon, max sao, màu, nhãn, disabled, highlight, bold...

## Props

| Prop        | Type      | Required | Description                |
|-------------|-----------|----------|----------------------------|
| value       | number    | ✔️      | Số sao (đánh giá)          |
| max         | number    | ❌      | Tổng số sao (default 5)    |
| icon        | ReactNode | ❌      | Icon custom                |
| activeColor | string    | ❌      | Màu đã đánh giá            |
| inactiveColor | string  | ❌      | Màu chưa đánh giá          |
| showValue   | boolean   | ❌      | Hiện số điểm cạnh sao      |
| disabled    | boolean   | ❌      | Khóa chỉnh                 |
| tooltip     | string    | ❌      | Tooltip                    |
| bold        | boolean   | ❌      | In đậm                     |
| highlight   | boolean   | ❌      | Nổi bật                    |
| className   | string    | ❌      | Custom className           |

## Example

```tsx
<TableRatingCell
  value={4.5}
  max={5}
  showValue
  highlight
  tooltip="Đánh giá sản phẩm"
/>
