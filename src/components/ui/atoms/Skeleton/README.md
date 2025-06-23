# Skeleton Atom Component

Placeholder loading (text, rect, circle, avatar...), hỗ trợ animate shimmer, custom size, theme.

## Props

- `variant`: text | rect | circle | avatar (default: rect)
- `width`, `height`: Tuỳ chỉnh kích thước
- `radius`: Bo góc
- `animate`: Hiệu ứng shimmer (default true)
- ...Toàn bộ props `<div>`

## Sử dụng

```tsx
import Skeleton from "@/components/ui/atoms/Skeleton";
<Skeleton variant="text" width={100} />
<Skeleton variant="circle" width={32} />
