# ListItemAction Molecule

Dùng cho list item có action rõ ràng (button/menu/dropdown): ví dụ chấm điểm, sửa, xóa, thao tác trên từng dòng.  
Tách biệt logic, style, test, storybook chuẩn enterprise.

## Props

| Prop         | Type        | Required | Description                          |
|--------------|-------------|----------|--------------------------------------|
| icon         | ReactNode   | ❌       | Icon đầu dòng                        |
| label        | string      | ✔️       | Nội dung chính                       |
| description  | string      | ❌       | Mô tả phụ                             |
| actions      | ReactNode   | ✔️       | Button/menu/switch/dropdown v.v.     |
| selected     | boolean     | ❌       | Đang được chọn (highlight)           |
| disabled     | boolean     | ❌       | Vô hiệu hóa toàn bộ item             |
| onActionClick| () => void  | ❌       | Callback khi bấm action              |
| className    | string      | ❌       | Custom class                         |
| tabIndex     | number      | ❌       | Tab order (a11y)                     |

## Example

```tsx
<ListItemAction
  icon={<Icon name="award" />}
  label="Chấm điểm"
  actions={<button onClick={() => alert('Chấm!')}>Chấm</button>}
/>
