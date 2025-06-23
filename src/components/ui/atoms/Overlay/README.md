# Overlay Atom Component

Hiển thị lớp phủ và children nổi phía trên, dùng cho modal, loading, popover, sidebar, tooltip...  
Hỗ trợ hiệu ứng glass, custom color, opacity, center, z-index.

## Props

- `open`: Hiển thị overlay (default: true)
- `children`: Nội dung nổi phía trên overlay
- `color`: Màu nền overlay
- `opacity`: Độ mờ
- `glass`: Glass effect MacOS
- `zIndex`: Lớp ưu tiên
- `center`: Canh giữa nội dung (default: false)
- `onClick`: Sự kiện click (để đóng overlay)
- ...Toàn bộ props `<div>`

## Sử dụng

```tsx
import Overlay from "@/components/ui/atoms/Overlay";
<Overlay open center onClick={...}>
  <div>Modal content</div>
</Overlay>
