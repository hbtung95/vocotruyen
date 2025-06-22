# Link Atom Component

Liên kết chuẩn UX – hỗ trợ external, button, icon, underline, a11y, theme.

## Props

- `href`: URL (bắt buộc)
- `external`: Mở tab mới, có icon external
- `underline`: Gạch chân
- `icon`: Icon trái
- `disabled`: Vô hiệu hoá
- ...Toàn bộ props <a>

## Variants

- `LinkExternal`: Link external
- `LinkButton`: Link style như button

## Theme

- Có Light/Dark, glass effect dễ custom.

## Sử dụng

```tsx
import { Link } from "@/components/atoms/Link";
<Link href="/">Về trang chủ</Link>
<Link href="https://google.com" external>Google</Link>

import LinkButton from "@/components/atoms/Link/variants/LinkButton";
<LinkButton href="#">Xem thêm</LinkButton>
