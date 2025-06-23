# PaginationButton Atom Component

Nút phân trang nhỏ, dùng cho table, list, phân trang dashboard. Hỗ trợ active, disabled, prev/next/first/last/ellipsis.

## Props

- `active`: Trang hiện tại (aria-current="page")
- `disabled`: Vô hiệu hóa
- `variant`: page | prev | next | first | last | ellipsis
- `children`: Số trang hoặc custom icon
- ...Toàn bộ props `<button>`

## Sử dụng

```tsx
import PaginationButton from "@/components/ui/atoms/PaginationButton";
<PaginationButton>2</PaginationButton>
<PaginationButton variant="prev" />
<PaginationButton variant="page" active>5</PaginationButton>
