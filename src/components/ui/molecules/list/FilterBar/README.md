# FilterBar Molecule

Thanh filter nâng cao cho bảng, list, dashboard...  
Hỗ trợ nhiều kiểu trường lọc, tuỳ biến, dễ mở rộng.

## Props

| Prop      | Type              | Required | Description                    |
|-----------|-------------------|----------|--------------------------------|
| fields    | FilterField[]     | ✔️       | Danh sách trường lọc           |
| value     | Record<string,any>| ✔️       | Giá trị các filter hiện tại    |
| onChange  | (v)=>void         | ✔️       | Gọi khi thay đổi filter        |
| onReset   | ()=>void          | ❌       | Xóa lọc                        |
| onSubmit  | ()=>void          | ❌       | Gọi khi submit lọc             |
| className | string            | ❌       | Custom className               |

## Example

```tsx
<FilterBar
  fields={[
    { key: "name", label: "Tên", type: "text" },
    { key: "status", label: "Trạng thái", type: "select", options: [...] },
  ]}
  value={filterValue}
  onChange={setFilterValue}
  onReset={() => setFilterValue({})}
  onSubmit={() => fetchData()}
/>
