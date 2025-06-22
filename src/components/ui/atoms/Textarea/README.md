# Textarea Atom Component

Field nhập nhiều dòng, hỗ trợ label, error, theme, variant auto-resize.

## Props

- `label`: Nhãn hiển thị
- `error`: Thông báo lỗi
- `disabled`: Vô hiệu hoá
- `size`: sm | md | lg | number
- ...Toàn bộ props <textarea>

## Variants

- `TextareaAutoResize`: Tự động co giãn chiều cao

## Theme

- Có Light/Dark, glass effect dễ custom.

## Sử dụng

```tsx
import { Textarea } from "@/components/atoms/Textarea";
<Textarea label="Ghi chú" placeholder="Nhập nội dung..." />

import TextareaAutoResize from "@/components/atoms/Textarea/variants/TextareaAutoResize";
<TextareaAutoResize placeholder="Auto resize..." />
