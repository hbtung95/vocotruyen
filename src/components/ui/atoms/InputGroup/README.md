# InputGroup Atom Component

Group input với icon, nút, label ở đầu/cuối, dùng cho search, số, tiền tệ...

## Props

- `children`: Input hoặc group input
- `prepend`: Phần đầu (icon/nút/label)
- `append`: Phần cuối (icon/nút/label)
- `fullWidth`: Bắt buộc full width (default: true)
- ...Toàn bộ props `<div>`

## Sử dụng

```tsx
import InputGroup from "@/components/ui/atoms/InputGroup";
<InputGroup prepend="VNĐ" append=".000đ">
  <input placeholder="Số tiền" />
</InputGroup>
