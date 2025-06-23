# Card Atom Component

Container khối nền cơ bản – chuẩn glass, solid, bordered, shadow, a11y.

## Props

- `rounded`: Bo góc lớn
- `shadow`: Đổ bóng
- `variant`: glass | solid | bordered
- ...Toàn bộ props <div>

## Theme

- Có Light/Dark, glass effect dễ custom.

## Sử dụng

```tsx
import { Card } from "@/components/ui/atoms/Card";
<Card variant="glass" shadow rounded>
  <h3>Tiêu đề</h3>
  <p>Nội dung...</p>
</Card>
