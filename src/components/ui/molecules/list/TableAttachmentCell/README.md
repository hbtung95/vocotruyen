# TableAttachmentCell Molecule

Hiển thị file đính kèm trong cell bảng: icon, tên file, dung lượng, preview, download, trạng thái...

## Props

| Prop        | Type             | Required | Description                    |
|-------------|------------------|----------|--------------------------------|
| attachments | AttachmentItem[] | ✔️       | Danh sách file                 |
| max         | number           | ❌       | Hiện tối đa N file             |
| showSize    | boolean          | ❌       | Hiện dung lượng                |
| showIcon    | boolean          | ❌       | Hiện icon                      |
| highlight   | boolean          | ❌       | Nổi bật                        |
| disabled    | boolean          | ❌       | Khóa cell                      |
| className   | string           | ❌       | Custom className               |

## AttachmentItem

| key         | string      | Định danh file        |
| name        | string      | Tên file              |
| url         | string      | Link file             |
| type        | string      | Kiểu file (pdf, jpg…) |
| size        | number      | Dung lượng            |
| icon        | ReactNode   | Icon file             |
| uploading   | boolean     | Đang tải lên          |
| error       | boolean     | Báo lỗi               |
| tooltip     | string      | Tooltip               |
| onDownload  | ()=>void    | Click tải xuống       |
| onPreview   | ()=>void    | Xem nhanh             |
| onCopyUrl   | ()=>void    | Copy link file        |
| disabled    | boolean     | Khóa action           |

## Example

```tsx
<TableAttachmentCell
  attachments={[
    { key: "pdf", name: "Tài liệu.pdf", url: "#", type: "pdf", size: 20200, onDownload: ... },
    { key: "img", name: "Ảnh.jpg", url: "#", type: "jpg", size: 50000, onPreview: ... },
  ]}
  max={2}
  highlight
/>
