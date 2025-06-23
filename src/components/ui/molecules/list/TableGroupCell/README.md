# TableGroupCell Molecule

Hiển thị group header, tổng hợp nhóm, collapsible section cho bảng.  
Hỗ trợ icon, tiêu đề, count, nested, expand/collapse, quick action.

## Props

| Prop      | Type        | Required | Description                |
|-----------|-------------|----------|----------------------------|
| label     | string      | ✔️      | Tiêu đề nhóm               |
| count     | number      | ❌      | Số lượng                   |
| icon      | ReactNode   | ❌      | Icon minh hoạ              |
| expanded  | boolean     | ❌      | Đã mở nhóm                 |
| level     | number      | ❌      | Bậc lồng nhau              |
| tooltip   | string      | ❌      | Tooltip                    |
| highlight | boolean     | ❌      | Nổi bật                    |
| bold      | boolean     | ❌      | In đậm                     |
| onToggle  | ()=>void    | ❌      | Click expand/collapse      |
| actions   | ReactNode[] | ❌      | Quick action (button, menu)|
| className | string      | ❌      | Custom className           |

## Example

```tsx
<TableGroupCell
  label="Nhóm khách hàng VIP"
  count={13}
  expanded
  icon={<IconUserGroup />}
  onToggle={...}
  actions={[
    <button key="add">+ Thêm</button>,
    <button key="edit">Sửa</button>
  ]}
  highlight
/>
