# Calendar Atom Component

Lịch đơn giản, hỗ trợ chọn ngày.

## Props

- `selected`: Ngày đang chọn
- `onSelect`: Hàm chọn ngày

## Sử dụng

```tsx
import Calendar from "@/components/ui/atoms/Calendar";
<Calendar selected={new Date()} onSelect={d => ...} />
