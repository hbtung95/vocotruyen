# TableUserCell Molecule

Hiển thị user/avatar/status/email/role trong cell bảng, hỗ trợ nhiều user, avatar, trạng thái, tooltip...

## Props

| Prop         | Type         | Required | Description                    |
|--------------|--------------|----------|--------------------------------|
| users        | UserCellItem[] | ✔️     | Danh sách user                 |
| multi        | boolean      | ❌       | Cho nhiều user/cell            |
| max          | number       | ❌       | Hiện tối đa N user             |
| avatarSize   | number       | ❌       | Kích thước avatar px           |
| showEmail    | boolean      | ❌       | Hiện email                     |
| showRole     | boolean      | ❌       | Hiện role                      |
| showStatus   | boolean      | ❌       | Hiện chấm trạng thái           |
| onClickUser  | (user,idx)=>void | ❌   | Sự kiện click user             |
| className    | string       | ❌       | Custom className               |

## Example

```tsx
<TableUserCell
  users={[
    { id: "a", name: "Nguyễn Văn A", avatar: "url", email: "a@email.com", role: "Admin", status: "active" },
    { id: "b", name: "Lê Thị B", avatar: "", email: "b@email.com", role: "User", status: "offline" },
  ]}
  showEmail
  showRole
  max={2}
/>
