# TablePercentCell Molecule

Hiển thị giá trị % (tỷ lệ) trong cell bảng.  
Tự động format, màu động, bar nhỏ, icon, copyable, error, highlight...

## Props

| Prop        | Type      | Required | Description                |
|-------------|-----------|----------|----------------------------|
| value       | number    | ✔️      | Giá trị phần trăm          |
| fixed       | number    | ❌      | Số chữ số thập phân        |
| showBar     | boolean   | ❌      | Hiện bar nhỏ               |
| showLabel   | boolean   | ❌      | Hiện text %                |
| icon        | ReactNode | ❌      | Icon minh hoạ              |
| positiveColor| string   | ❌      | Màu cho số dương           |
| negativeColor| string   | ❌      | Màu cho số âm              |
| highlight   | boolean   | ❌      | Nổi bật                    |
| tooltip     | string    | ❌      | Tooltip                    |
| error       | boolean   | ❌      | Báo lỗi                    |
| copyable    | boolean   | ❌      | Click để copy              |
| onCopy      | (v)=>void | ❌      | Callback khi copy          |
| bold        | boolean   | ❌      | In đậm                     |
| className   | string    | ❌      | Custom className           |

## Example

```tsx
<TablePercentCell
  value={83.5}
  showBar
  highlight
  tooltip="Tỷ lệ hoàn thành"
  copyable
/>
