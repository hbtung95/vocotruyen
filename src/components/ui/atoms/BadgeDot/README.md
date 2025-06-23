# BadgeDot Atom Component

Hiển thị chấm nhỏ/badge số lượng, dùng cho icon, avatar, button, notification...

## Props

- `count`: Số lượng (mặc định là dot, nếu có thì hiện số)
- `max`: Giới hạn số (vd 99+)
- `status`: accent | error | warning | info | success | neutral
- `size`: Kích thước px (mặc định 10)
- `outlined`: Có border trắng không (default: false)
- ...Toàn bộ props `<span>`

## Sử dụng

```tsx
import BadgeDot from "@/components/ui/atoms/BadgeDot";
<BadgeDot count={7} status="info" />
<BadgeDot status="warning" />
