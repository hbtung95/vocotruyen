# TableColumnSettings Molecule

Tuỳ chỉnh các cột trong bảng: ẩn/hiện, đổi thứ tự (drag & drop), resize, cố định.

## Props

| Prop         | Type            | Required | Description                                      |
|--------------|-----------------|----------|--------------------------------------------------|
| columns      | TableColumn[]   | ✔️       | Danh sách cột                                     |
| onChange     | (cols[])=>void  | ✔️       | Gọi khi cập nhật columns                         |
| allowReorder | boolean         | ❌       | Cho phép kéo thả reorder (default: true)         |
| allowResize  | boolean         | ❌       | Cho phép resize chiều rộng (default: true)       |
| className    | string          | ❌       | Custom className                                 |

## TableColumn

| key        | string      | Định danh duy nhất      |
| label      | string      | Nhãn cột                |
| visible    | boolean     | Đang hiển thị không?    |
| resizable  | boolean     | Có thể resize không     |
| width      | number/string | px hoặc % (nếu cần)   |
| fixed      | boolean     | Không thể chỉnh sửa     |

## Example

```tsx
<TableColumnSettings
  columns={[
    { key: "name", label: "Họ tên", visible: true, resizable: true, width: "100" },
    { key: "score", label: "Điểm", visible: false, resizable: false },
  ]}
  onChange={setColumns}
/>
