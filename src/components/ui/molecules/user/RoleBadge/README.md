# RoleBadge Molecule

Hiển thị vai trò (role) của user: Admin, Quản lý, Trọng tài, HLV, VĐV, Guest, Viewer… Chuẩn màu sắc, icon và label rõ ràng.

## Props

| Prop      | Type      | Required | Description                |
|-----------|-----------|----------|----------------------------|
| role      | UserRole  | ✔️       | Vai trò của user           |
| className | string    | ❌       | Custom class (optional)    |

## UserRole

"admin" | "manager" | "referee" | "coach" | "athlete" | "guest" | "viewer"

## Example

```tsx
<RoleBadge role="manager" />
<RoleBadge role="admin" className="ml-2" />
