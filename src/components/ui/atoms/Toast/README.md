# Toast Atom Component

Hiển thị notification nhỏ (info/success/warning/error), closable, theme, auto hide, tối ưu UX quốc tế.

## Props

- `open`: Hiển thị hay không (bắt buộc)
- `children`: Nội dung thông báo
- `type`: "info" | "success" | "warning" | "error" (mặc định: "info")
- `closable`: Có nút đóng (default: false)
- `onClose`: Hàm đóng (nếu closable/auto)
- `duration`: Thời gian tự động ẩn (ms, optional)
- ...Toàn bộ props `<div>`

## Sử dụng

```tsx
import Toast from "@/components/ui/atoms/Toast";
<Toast open type="success" duration={2000} onClose={...}>Đã lưu thành công!</Toast>
