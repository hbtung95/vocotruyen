# Icon Atom Component

Dùng để render SVG icon từ thư viện nội bộ (file SVG dạng React component).

## Props

- `name`: Tên icon (theo danh sách ./icons.ts)
- `size`: sm | md | lg | number (mặc định md/20)
- `color`: Màu icon (theo theme hoặc custom)
- `aria-label`: Để a11y, nếu chỉ là icon trang trí thì bỏ qua

## Variants

- `IconButton`: Chỉ dùng icon làm nút (kèm focus, hover)

## Cách thêm icon mới

1. Thêm file SVG mới vào `icons/` (ví dụ Heart.tsx)
2. Import vào `icons.ts`, thêm vào object ICONS
3. Dùng `<Icon name="heart" />` ở mọi nơi

## Theme

- Có thể override style qua themes/IconLight.module.css, IconDark.module.css

## Sử dụng

```tsx
import { Icon } from "@/components/atoms/Icon";
<Icon name="search" size="lg" color="#1e90ff" />
