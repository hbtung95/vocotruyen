# Badge Atom Component

Hiển thị nhãn nhỏ, trạng thái, label (success, error, info, warning...) theo Liquid Glass.

## Props

- `children`: Nội dung hiển thị
- `variant`: 'success' | 'error' | 'info' | 'warning' | 'default'
- `pill`: Bo tròn full pill
- `className`: Custom CSS

## Variants

- `BadgeSuccess`
- `BadgeError`
- `BadgeInfo`

## Theme

- Style có sẵn cho Light/Dark, dùng module css.  
- Có thể bổ sung theme khác theo yêu cầu.

## Sử dụng

```tsx
import { Badge } from "@/components/atoms/Badge";
<Badge variant="success" pill>Hoạt động</Badge>
