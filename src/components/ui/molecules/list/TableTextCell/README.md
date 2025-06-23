# TableTextCell Molecule

Hiển thị text/mô tả trong cell bảng.  
Hỗ trợ ellipsis, multi-line, highlight, icon, label phụ, copyable, error, bold.

## Props

| Prop        | Type      | Required | Description                |
|-------------|-----------|----------|----------------------------|
| value       | string    | ✔️      | Giá trị hiển thị           |
| maxLength   | number    | ❌      | Số ký tự tối đa            |
| ellipsis    | boolean   | ❌      | Rút gọn "..." nếu dài      |
| multiLine   | boolean   | ❌      | Cho nhiều dòng             |
| rows        | number    | ❌      | Số dòng tối đa             |
| highlight   | boolean   | ❌      | Nổi bật                    |
| tooltip     | string    | ❌      | Tooltip                    |
| icon        | ReactNode | ❌      | Icon minh hoạ              |
| label       | ReactNode | ❌      | Label phụ/trạng thái       |
| copyable    | boolean   | ❌      | Click để copy              |
| onCopy      | (v)=>void | ❌      | Callback khi copy          |
| bold        | boolean   | ❌      | In đậm                     |
| error       | boolean   | ❌      | Báo lỗi                    |
| className   | string    | ❌      | Custom className           |

## Example

```tsx
<TableTextCell
  value="Mô tả sản phẩm chi tiết, nhiều dòng..."
  maxLength={50}
  ellipsis
  multiLine
  label="Hoạt động"
  copyable
  highlight
/>
