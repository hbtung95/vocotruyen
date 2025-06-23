# Chip Atom Component

Nhãn nhỏ (filter, tag, trạng thái), có thể closable, icon trái/phải, variant màu, size.

## Props

- `children`: Nội dung chip
- `color`: accent | success | error | info | warning | neutral
- `closable`: Có thể đóng/xoá
- `onClose`: Hàm đóng
- `iconLeft`, `iconRight`: Icon trái/phải
- `size`: sm | md | lg (default md)
- ...Toàn bộ props `<span>`

## Sử dụng

```tsx
import Chip from "@/components/ui/atoms/Chip";
<Chip color="success" closable onClose={...}>Active</Chip>
<Chip iconLeft="🔍">Tìm kiếm</Chip>
