# LiveEditIndicator Molecule

Hiển thị avatar các user đang cùng chỉnh sửa (collaborative editing), tự động overlap, có nháy hiệu ứng và label.

## Props

| Prop        | Type                          | Required | Description                          |
|-------------|-------------------------------|----------|--------------------------------------|
| users       | LiveEditUser[]                | ✔️       | Danh sách user (id, name, avatar)    |
| maxVisible  | number                        | ❌       | Số avatar hiển thị tối đa            |
| className   | string                        | ❌       | Custom CSS class                     |
| tooltip     | string                        | ❌       | Tooltip khi hover                    |

## Example

```tsx
<LiveEditIndicator
  users={[
    { id: 1, name: "Alice", avatar: "/a.png", color: "#F87171" },
    { id: 2, name: "Bob", avatar: "/b.png", color: "#60A5FA" },
    { id: 3, name: "Carol", avatar: "/c.png" },
  ]}
  maxVisible={2}
/>
