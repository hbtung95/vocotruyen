# TableEmptyState Molecule

Hiển thị trạng thái khi bảng không có dòng dữ liệu.  
Có thể tuỳ biến icon, message, action (tạo mới, refetch...).

## Props

| Prop         | Type        | Required | Description                         |
|--------------|-------------|----------|-------------------------------------|
| icon         | ReactNode   | ❌       | Icon minh họa                       |
| title        | string      | ❌       | Tiêu đề                             |
| description  | string      | ❌       | Mô tả phụ                           |
| action       | ReactNode   | ❌       | Action (nút/tạo mới/tìm lại/...)    |
| className    | string      | ❌       | Custom className                    |

## Example

```tsx
<TableEmptyState
  icon="🏆"
  title="Chưa có VĐV"
  description="Hãy thêm mới VĐV cho giải đấu."
  action={<button>Thêm VĐV</button>}
/>
