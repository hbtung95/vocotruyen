# LockBadge Molecule

Hiển thị trạng thái khoá (bởi user khác, bởi admin, do quyền, do process...). Có thể custom icon, tooltip, lý do hoặc người khoá.

## Props

| Prop      | Type           | Required | Description                        |
|-----------|----------------|----------|------------------------------------|
| lockedBy  | string         | ❌       | Tên user đang khoá (nếu có)        |
| reason    | string         | ❌       | Lý do khoá                         |
| icon      | ReactNode      | ❌       | Icon custom (mặc định icon khoá)   |
| size      | number         | ❌       | Đường kính badge (px), mặc định 20 |
| tooltip   | string         | ❌       | Tooltip tuỳ chỉnh                  |
| className | string         | ❌       | Custom CSS class                   |

## Example

```tsx
<LockBadge lockedBy="Nguyễn Văn A" reason="Đang bị chỉnh sửa" />
<LockBadge icon={<UserX size={16} />} tooltip="Khoá do admin" />
