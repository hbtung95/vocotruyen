# Image Atom Component

Tối ưu lazy, fallback, error, glass effect, avatar/photo/dashboard... Tối ưu a11y.

## Props

- `src`, `alt`: Bắt buộc (alt cho a11y)
- `glass`: Hiệu ứng glass (default false)
- `lazy`: Tối ưu lazy load (default true)
- `placeholder`: Hiện khi chưa load xong
- `fallback`: Hiện khi lỗi
- ...Toàn bộ props `<img>`

## Sử dụng

```tsx
import Image from "@/components/ui/atoms/Image";
<Image src="..." alt="Ảnh demo" glass placeholder={<Skeleton />} fallback="Không có ảnh" />
