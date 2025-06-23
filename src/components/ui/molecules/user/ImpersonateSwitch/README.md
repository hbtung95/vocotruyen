# ImpersonateSwitch Molecule

Hiển thị trạng thái “đang đăng nhập hộ user khác” (impersonate), cho phép trở về tài khoản admin, cảnh báo rõ ràng.

## Props

| Prop            | Type      | Required | Description                               |
|-----------------|-----------|----------|-------------------------------------------|
| impersonatedName| string    | ✔️       | Tên user bị impersonate                   |
| adminName       | string    | ❌       | Tên admin (nếu muốn hiển thị)             |
| onReturnToAdmin | () => void| ✔️       | Callback trở về tài khoản admin           |
| showBanner      | boolean   | ❌       | Có hiển thị banner hay không (default: true) |
| className       | string    | ❌       | Custom class                              |

## Example

```tsx
<ImpersonateSwitch
  impersonatedName="Nguyễn Văn B"
  adminName="Admin Dương Tùng"
  onReturnToAdmin={() => signOutImpersonate()}
  showBanner={true}
/>
