# AvatarGroup Atom Component

Hiển thị nhóm avatar, tự overlap, có dấu +n nếu vượt max.

## Props

- `avatars`: Mảng avatar (src, alt, name)
- `max`: Số lượng hiển thị tối đa (default 5)
- `size`: Kích thước px (default 32)
- `overlap`: Khoảng overlap px (âm để chồng lên nhau)
- ...Toàn bộ props `<div>`

## Sử dụng

```tsx
import AvatarGroup from "@/components/ui/atoms/AvatarGroup";
<AvatarGroup avatars={[{ src: "url1" }, { src: "url2" }, ...]} max={4} />
