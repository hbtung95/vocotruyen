# TableToolbar Molecule

Thanh công cụ cho bảng dữ liệu: filter, bulk action, search, add, refresh, extra action...

## Props

| Prop           | Type         | Required | Description                           |
|----------------|--------------|----------|---------------------------------------|
| title          | string       | ❌       | Tiêu đề bảng                          |
| selectedCount  | number       | ❌       | Số item đã chọn (cho bulk action)     |
| onBulkAction   | ()=>void     | ❌       | Xử lý bulk action                     |
| bulkActions    | ReactNode    | ❌       | Nút/hành động bulk action             |
| onRefresh      | ()=>void     | ❌       | Làm mới bảng                          |
| onAdd          | ()=>void     | ❌       | Thêm mới                              |
| searchPlaceholder | string    | ❌       | Placeholder cho ô tìm kiếm            |
| onSearch       | (string)=>void | ❌     | Xử lý search                          |
| filterComponent| ReactNode    | ❌       | Filter nâng cao                       |
| extraActions   | ReactNode    | ❌       | Extra action (xuất, cấu hình, v.v.)   |
| disabled       | boolean      | ❌       | Disable toàn bộ toolbar               |
| className      | string       | ❌       | Custom className                      |

## Example

```tsx
<TableToolbar
  title="Danh sách"
  onAdd={() => alert("Thêm")}
  onSearch={kw => alert(kw)}
  filterComponent={<MyFilter />}
  extraActions={<button>Export</button>}
/>
