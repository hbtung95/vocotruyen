# VisuallyHidden Atom Component

Ẩn nội dung với mắt thường, nhưng screen reader vẫn đọc được.  
Đáp ứng chuẩn accessibility quốc tế (WCAG/ARIA).

## Props

- `children`: Nội dung ẩn
- ... Toàn bộ props `<span>`

## Sử dụng

```tsx
import VisuallyHidden from "@/components/ui/atoms/VisuallyHidden";
<button>
  Submit
  <VisuallyHidden> (Gửi biểu mẫu)</VisuallyHidden>
</button>
