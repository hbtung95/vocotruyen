# TableDateCell Molecule

Hiển thị ngày/thời gian trong cell bảng.  
Tự động format ngày, hỗ trợ relative, overdue, icon, click đổi mode.

## Props

| Prop       | Type                | Required | Description                    |
|------------|---------------------|----------|--------------------------------|
| value      | string&#124;Date&#124;number | ✔️ | Giá trị ngày                   |
| mode       | "date"/"datetime"/"time"/"relative" | ❌ | Kiểu hiển thị                  |
| format     | string              | ❌       | Định dạng custom               |
| icon       | ReactNode           | ❌       | Icon minh hoạ                  |
| highlight  | boolean             | ❌       | Nổi bật                        |
| tooltip    | string              | ❌       | Tooltip                        |
| overdue    | boolean             | ❌       | Đánh dấu quá hạn                |
| className  | string              | ❌       | Custom className               |
| locale     | string              | ❌       | Đa ngôn ngữ                    |

## Example

```tsx
<TableDateCell
  value="2025-06-21"
  mode="date"
  tooltip="Ngày đăng ký"
  highlight
/>
