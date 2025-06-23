# TableNoteCell Molecule

Hiển thị ghi chú/ngắn gọn, remark, trong cell bảng.  
Hỗ trợ multi-line, markdown, icon, label, copyable, error, highlight.

## Props

| Prop        | Type      | Required | Description                |
|-------------|-----------|----------|----------------------------|
| note        | string    | ✔️      | Giá trị ghi chú            |
| maxLength   | number    | ❌      | Số ký tự tối đa            |
| multiLine   | boolean   | ❌      | Cho nhiều dòng             |
| markdown    | boolean   | ❌      | Cho phép markdown          |
| tooltip     | string    | ❌      | Tooltip                    |
| icon        | ReactNode | ❌      | Icon minh hoạ              |
| label       | ReactNode | ❌      | Label phụ/trạng thái       |
| highlight   | boolean   | ❌      | Nổi bật                    |
| error       | boolean   | ❌      | Báo lỗi                    |
| copyable    | boolean   | ❌      | Click để copy              |
| onCopy      | (v)=>void | ❌      | Callback khi copy          |
| bold        | boolean   | ❌      | In đậm                     |
| className   | string    | ❌      | Custom className           |

## Example

```tsx
<TableNoteCell
  note="**Lưu ý:** Dữ liệu cần xác minh."
  markdown
  label="Cảnh báo"
  copyable
  highlight
/>
