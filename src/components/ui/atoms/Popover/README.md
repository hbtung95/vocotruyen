# Popover Atom Component

Popover – popup nổi cạnh trigger.  
Hỗ trợ position, openOnHover, theme, a11y.

## Props

- `content`: Nội dung popup
- `children`: Trigger element
- `position`: top | right | bottom | left
- `openOnHover`: Boolean, mặc định click
- `className`: CSS tùy chỉnh

## Sử dụng

```tsx
import { Popover } from "@/components/ui/atoms/Popover";
<Popover content="Nội dung">Click/hover</Popover>
