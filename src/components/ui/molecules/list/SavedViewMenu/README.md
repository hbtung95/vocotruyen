# SavedViewMenu Molecule

Menu chọn/lưu các view (bộ lọc, group, sort) cho table, dashboard, report...  
Hỗ trợ đổi tên, xóa, nhân bản, đặt mặc định, tạo mới.

## Props

| Prop         | Type       | Required | Description                        |
|--------------|------------|----------|------------------------------------|
| views        | SavedView[]| ✔️      | Danh sách view lưu sẵn              |
| currentId    | string     | ❌      | Id view đang chọn                   |
| onSelect     | (id)=>void | ✔️      | Đổi view                           |
| onAdd        | ()=>void   | ❌      | Tạo mới view                        |
| onRename     | (id)=>void | ❌      | Đổi tên view                        |
| onDelete     | (id)=>void | ❌      | Xóa view                            |
| onDuplicate  | (id)=>void | ❌      | Nhân bản view                       |
| onSetDefault | (id)=>void | ❌      | Đặt mặc định view                   |
| className    | string     | ❌      | Custom className                    |

## SavedView

| id         | string      | Định danh           |
| name       | string      | Tên hiển thị        |
| icon       | ReactNode   | Icon (tùy chọn)     |
| isDefault  | boolean     | Là mặc định         |

## Example

```tsx
<SavedViewMenu
  views={[{ id: "all", name: "Tất cả" }, { id: "final", name: "Chung kết", isDefault: true }]}
  currentId="all"
  onSelect={setView}
  onAdd={addView}
  onRename={renameView}
  onDelete={deleteView}
  onDuplicate={dupView}
  onSetDefault={setDefaultView}
/>
