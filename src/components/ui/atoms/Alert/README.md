# Alert Atom Component

Hiển thị thông báo dạng info/success/warning/error, tối ưu accessibility, hỗ trợ closable, custom theme.

## Props

- `children`: Nội dung thông báo
- `type`: "info" | "success" | "warning" | "error" (default: "info")
- `title`: Tiêu đề (tùy chọn)
- `closable`: Có nút đóng (default: false)
- `onClose`: Sự kiện đóng (nếu closable)
- ...Toàn bộ props `<div>`

## Sử dụng

```tsx
import Alert from "@/components/ui/atoms/Alert";
<Alert type="success" title="Thành công">Bạn đã lưu xong!</Alert>
<Alert type="error" closable onClose={() => {}}>Có lỗi xảy ra</Alert>
