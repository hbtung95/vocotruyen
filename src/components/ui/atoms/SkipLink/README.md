# SkipLink Atom Component

Link bỏ qua nhanh tới nội dung chính (main), tăng accessibility, đáp ứng chuẩn WCAG quốc tế.

## Props

- `href`: id của content muốn nhảy tới (ví dụ: "#main")
- `children`: Text hiển thị (mặc định: "Bỏ qua đến nội dung chính")
- ...Toàn bộ props `<a>`

## Sử dụng

```tsx
import SkipLink from "@/components/ui/atoms/SkipLink";
<SkipLink href="#main" />
<main id="main">...</main>
