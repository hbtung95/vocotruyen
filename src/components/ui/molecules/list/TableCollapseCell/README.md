# TableCollapseCell Molecule

Hiển thị cell mở rộng (expand/collapse) cho row/table.  
Hỗ trợ expand/collapse, icon, content con, nested, quick action.

## Props

| Prop      | Type        | Required | Description                |
|-----------|-------------|----------|----------------------------|
| expanded  | boolean     | ❌      | Đang mở rộng               |
| onToggle  | ()=>void    | ❌      | Click expand/collapse      |
| icon      | ReactNode   | ❌      | Icon minh hoạ              |
| tooltip   | string      | ❌      | Tooltip                    |
| highlight | boolean     | ❌      | Nổi bật                    |
| disabled  | boolean     | ❌      | Khóa cell                  |
| content   | ReactNode   | ❌      | Nội dung mở rộng           |
| padding   | number      | ❌      | Padding bên trái           |
| level     | number      | ❌      | Độ lồng nhau               |
| actions   | ReactNode[] | ❌      | Quick action               |
| className | string      | ❌      | Custom className           |

## Example

```tsx
<TableCollapseCell
  expanded={expanded}
  onToggle={() => setExpanded(!expanded)}
  content={<div>Thông tin mở rộng...</div>}
  highlight
/>
