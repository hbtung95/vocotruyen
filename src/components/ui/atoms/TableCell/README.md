# TableCell Atom Component

Cell cho bảng/grid, hỗ trợ header, sort, align, variant, size, a11y.

## Props

- `children`: Nội dung cell
- `variant`: text | number | icon | status | action (default text)
- `align`: left | center | right (default left)
- `header`: Có phải th (header) không
- `sortable`, `sorted`, `sortDirection`: Cho header sortable
- `size`: sm | md | lg (default md)
- ...Toàn bộ props `<td>/<th>`

## Sử dụng

```tsx
import TableCell from "@/components/ui/atoms/TableCell";
<TableCell>123</TableCell>
<TableCell header sortable sorted sortDirection="desc">Tên</TableCell>
