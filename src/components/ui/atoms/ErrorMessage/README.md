# ErrorMessage Atom Component

Hiển thị lỗi cho input, form. Tối ưu accessibility (a11y), dùng cho aria-describedby.  
Có thể hiện/ẩn icon cảnh báo.

## Props

- `children`: Nội dung lỗi
- `id`: Dùng liên kết với input (aria-describedby)
- `hideIcon`: Ẩn icon cảnh báo
- ...Toàn bộ props `<div>`

## Sử dụng

```tsx
import ErrorMessage from "@/components/ui/atoms/ErrorMessage";
<input aria-describedby="err01" />
<ErrorMessage id="err01">Sai định dạng email!</ErrorMessage>
