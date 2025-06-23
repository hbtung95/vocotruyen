# StatusBadge Molecule

Hiển thị badge nhỏ trạng thái cho user, item, process... Có thể dùng kèm icon, custom label, tooltip.

## Props

| Prop      | Type                                 | Required | Description                         |
|-----------|--------------------------------------|----------|-------------------------------------|
| status    | string                               | ✔️       | Tên trạng thái (active, pending...) |
| label     | string                               | ❌       | Label custom, mặc định auto         |
| icon      | ReactNode                            | ❌       | Icon trạng thái                     |
| className | string                               | ❌       | Custom CSS class                    |
| tooltip   | string                               | ❌       | Tooltip hiển thị                    |

## Example

```tsx
<StatusBadge status="approved" icon={<CheckCircle size={14} />} tooltip="Đã duyệt" />
