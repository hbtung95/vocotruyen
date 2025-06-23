# TableActionCell Molecule

Hiển thị nút action (Sửa/Xoá/Xem/Thêm/Menu...) trong cell bảng.  
Hỗ trợ multi-action, icon, menu dropdown, confirm, disabled, highlight.

## Props

| Prop      | Type              | Required | Description                    |
|-----------|-------------------|----------|--------------------------------|
| actions   | ActionCellItem[]  | ✔️       | Danh sách action               |
| max       | number            | ❌       | Hiện tối đa N action, còn lại menu|
| menuLabel | string            | ❌       | Nhãn menu (mặc định: "Khác")   |
| menuIcon  | ReactNode         | ❌       | Icon menu                      |
| menuTooltip| string           | ❌       | Tooltip menu                   |
| highlight | boolean           | ❌       | Nổi bật                        |
| disabled  | boolean           | ❌       | Khóa cell                      |
| className | string            | ❌       | Custom className               |

## ActionCellItem

| key      | string      | Định danh         |
| icon     | ReactNode   | Icon              |
| label    | string      | Nhãn              |
| tooltip  | string      | Tooltip           |
| color    | string      | Màu               |
| disabled | boolean     | Khóa action       |
| confirm  | string      | Xác nhận xoá...   |
| onClick  | ()=>void    | Callback click    |
| show     | boolean     | Ẩn/hiện action    |

## Example

```tsx
<TableActionCell
  actions={[
    { key: "edit", label: "Sửa", icon: <IconEdit />, onClick: ... },
    { key: "delete", label: "Xoá", icon: <IconDelete />, color: "#e94f44", confirm: "Bạn chắc chắn xoá?", onClick: ... },
    { key: "view", label: "Xem", icon: <IconView />, onClick: ... },
  ]}
  max={2}
  highlight
/>
