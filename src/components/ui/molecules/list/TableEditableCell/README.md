# TableEditableCell Molecule

Cell cho phép chỉnh sửa trực tiếp (inline-edit): text, số, select, multi-line...  
Hỗ trợ validate, loading, error, highlight, save/cancel, tooltip.

## Props

| Prop        | Type         | Required | Description                |
|-------------|--------------|----------|----------------------------|
| value       | string/number| ✔️      | Giá trị ban đầu            |
| type        | "text"/"number"/"select"/"textarea" | ❌ | Kiểu edit        |
| options     | OptionItem[] | ❌      | Cho select                 |
| editable    | boolean      | ❌      | Cho phép chỉnh sửa         |
| multiLine   | boolean      | ❌      | Multi-line                 |
| placeholder | string       | ❌      | Placeholder                |
| loading     | boolean      | ❌      | Trạng thái lưu             |
| error       | boolean      | ❌      | Báo lỗi                    |
| tooltip     | string       | ❌      | Tooltip                    |
| icon        | ReactNode    | ❌      | Icon minh hoạ              |
| label       | ReactNode    | ❌      | Label phụ/trạng thái       |
| highlight   | boolean      | ❌      | Nổi bật                    |
| onSave      | (v)=>void    | ❌      | Khi lưu                    |
| onCancel    | ()=>void     | ❌      | Khi huỷ                    |
| validate    | (v)=>string/undefined | ❌ | Validate custom         |
| className   | string       | ❌      | Custom className           |

## Example

```tsx
<TableEditableCell
  value="Chỉnh trực tiếp"
  editable
  onSave={val => ...}
  validate={val => !val ? "Bắt buộc nhập!" : undefined}
  highlight
/>
