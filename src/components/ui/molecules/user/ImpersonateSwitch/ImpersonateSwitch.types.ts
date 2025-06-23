export interface ImpersonateSwitchProps {
  impersonatedName: string;           // Tên user đang bị impersonate
  onReturnToAdmin: () => void;        // Hàm callback trở về tài khoản admin
  adminName?: string;                 // Tên admin (nếu muốn show)
  showBanner?: boolean;               // Có hiển thị banner cảnh báo hay không
  className?: string;
}
