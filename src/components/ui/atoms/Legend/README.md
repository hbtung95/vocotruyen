# Legend Atom Component

Tiêu đề cho fieldset, section form, hỗ trợ size, style, a11y.

## Props

- `children`: Nội dung legend
- `size`: sm | md | lg (default md)
- ...Toàn bộ props `<legend>`

## Sử dụng

```tsx
import Legend from "@/components/ui/atoms/Legend";
<fieldset>
  <Legend size="lg">Thông tin tài khoản</Legend>
  <input placeholder="Email" />
</fieldset>
