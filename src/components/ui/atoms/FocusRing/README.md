# FocusRing Atom Component

Bọc element, tự động thêm hiệu ứng viền (box-shadow) khi focus bằng keyboard, giúp tăng accessibility, WCAG, chuẩn MacOS.

## Props

- `children`: Element cần bọc
- `color`: Màu viền focus (mặc định MacOS blue)
- `width`: Độ rộng viền
- `className`: Tuỳ chỉnh

## Sử dụng

```tsx
import FocusRing from "@/components/ui/atoms/FocusRing";
<FocusRing>
  <button>Focusable</button>
</FocusRing>
<FocusRing color="#f00" width={3}>
  <input />
</FocusRing>
