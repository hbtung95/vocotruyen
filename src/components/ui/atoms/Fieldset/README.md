# Fieldset Atom Component

Nhóm các input, label, form-group với legend, chuẩn a11y, hỗ trợ trạng thái disabled.

## Props

- `legend`: Tiêu đề nhóm (optional)
- `children`: Nội dung
- `disabled`: Disable group (default false)
- ...Toàn bộ props `<fieldset>`

## Sử dụng

```tsx
import Fieldset from "@/components/ui/atoms/Fieldset";
<Fieldset legend="Đăng ký">
  <input placeholder="Email" />
</Fieldset>
