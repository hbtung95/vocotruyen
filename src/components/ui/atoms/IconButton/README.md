# IconButton Atom Component

Nút chỉ có icon, dùng cho action nhỏ (edit, xóa, open...), hỗ trợ variant, size, loading, a11y.

## Props

- `icon`: ReactNode, bắt buộc (icon hiển thị)
- `variant`: primary | outline | danger | ghost (default primary)
- `size`: sm | md | lg (default md)
- `loading`: Hiệu ứng loading (default false)
- `aria-label`: Label a11y (bắt buộc nếu không có text)
- ...Toàn bộ props `<button>`

## Sử dụng

```tsx
import IconButton from "@/components/ui/atoms/IconButton";
<IconButton icon="✏️" aria-label="Sửa" />
<IconButton icon="❌" variant="danger" size="sm" aria-label="Xoá" />
