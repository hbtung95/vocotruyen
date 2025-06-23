# BulkEditDialog Molecule

Popup chỉnh sửa nhiều dòng trong bảng, hỗ trợ nhiều kiểu field (text/number/select/checkbox/custom).

## Props

| Prop      | Type            | Required | Description                            |
|-----------|-----------------|----------|----------------------------------------|
| open      | boolean         | ✔️       | Dialog mở hay không                    |
| onClose   | ()=>void        | ✔️       | Callback đóng dialog                   |
| fields    | BulkEditField[] | ✔️       | Danh sách trường cần sửa               |
| onSubmit  | (data)=>void    | ✔️       | Gọi khi submit (dữ liệu mới)           |
| title     | string          | ❌       | Tiêu đề dialog                         |
| loading   | boolean         | ❌       | Đang loading                           |
| className | string          | ❌       | Custom className                       |

## BulkEditField

| key     | string         | Định danh      |
| label   | string         | Nhãn           |
| type    | "text"/"number"/"select"/"checkbox"/"custom" | Loại input |
| options | array          | Nếu là select  |
| render  | ReactNode      | Custom input   |

## Example

```tsx
<BulkEditDialog
  open={open}
  onClose={() => setOpen(false)}
  fields={[
    { key: "status", label: "Trạng thái", type: "select", options: [{value: "ok", label: "OK"}] },
    { key: "note", label: "Ghi chú", type: "text" },
  ]}
  onSubmit={data => updateBulk(data)}
/>
