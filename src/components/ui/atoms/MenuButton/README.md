# MenuButton Atom Component

Nút mở menu (dropdown, popover...), có caret, variant, size, hỗ trợ a11y, teamwork.

## Props

- `children`: Nội dung (text/icon)
- `variant`: primary | outline | ghost (default primary)
- `size`: sm | md | lg (default md)
- `open`: Đang mở menu (default false)
- `caret`: Hiện caret ▼/▲ (default true)
- ...Toàn bộ props `<button>`

## Sử dụng

```tsx
import MenuButton from "@/components/ui/atoms/MenuButton";
<MenuButton>Menu</MenuButton>
<MenuButton open>Menu mở</MenuButton>
<MenuButton variant="outline" size="lg">Lựa chọn</MenuButton>
