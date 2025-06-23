# TableColorCell Molecule

Hiển thị màu sắc trong cell bảng – color swatch, label, icon, copyable, highlight...

## Props

| Prop        | Type      | Required | Description                |
|-------------|-----------|----------|----------------------------|
| value       | string    | ✔️      | Mã màu (hex, rgb, tên...)  |
| label       | string    | ❌      | Nhãn hiển thị              |
| icon        | ReactNode | ❌      | Icon minh hoạ              |
| tooltip     | string    | ❌      | Tooltip                    |
| copyable    | boolean   | ❌      | Click để copy mã màu       |
| onCopy      | (v)=>void | ❌      | Callback khi copy          |
| highlight   | boolean   | ❌      | Nổi bật                    |
| bold        | boolean   | ❌      | In đậm                     |
| className   | string    | ❌      | Custom className           |

## Example

```tsx
<TableColorCell
  value="#ffa82b"
  label="Vàng"
  copyable
  highlight
/>
