# StatusDot Atom Component

Chấm trạng thái online, warning, error, offline, info, neutral. Dùng trong bảng, list, avatar, dashboard...

## Props

- `status`: "success" | "warning" | "error" | "info" | "offline" | "neutral" (default: "success")
- `label`: Tooltip hoặc aria-label (mặc định lấy status)
- `size`: Kích thước px (mặc định 12)
- ...Toàn bộ props `<span>`

## Sử dụng

```tsx
import StatusDot from "@/components/ui/atoms/StatusDot";
<StatusDot status="warning" label="Đang bảo trì" size={16} />
