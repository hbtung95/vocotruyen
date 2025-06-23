# TableRowDetailCell Molecule

Panel chi tiết/expand cho từng hàng bảng – hiển thị info mở rộng, sub-table, form, record log...  
Hỗ trợ custom content, loading, error, quick action, sticky, highlight.

## Props

| Prop      | Type        | Required | Description                |
|-----------|-------------|----------|----------------------------|
| open      | boolean     | ❌      | Đang mở panel              |
| children  | ReactNode   | ❌      | Nội dung chi tiết          |
| loading   | boolean     | ❌      | Đang tải                   |
| error     | boolean     | ❌      | Báo lỗi                    |
| padding   | number      | ❌      | Padding trái               |
| sticky    | boolean     | ❌      | Sticky khi cuộn            |
| highlight | boolean     | ❌      | Nổi bật                    |
| className | string      | ❌      | Custom className           |
| actions   | ReactNode[] | ❌      | Quick action phía phải     |
| onClose   | ()=>void    | ❌      | Đóng panel                 |

## Example

```tsx
<TableRowDetailCell
  open
  loading={loading}
  error={error}
  actions={[<button>Lưu</button>, <button>In</button>]}
  onClose={() => setOpen(false)}
>
  <OrderDetailView order={row} />
</TableRowDetailCell>
