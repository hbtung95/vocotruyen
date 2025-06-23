# TableLinkCell Molecule

Hiển thị link (url/email/phone/resource) trong cell bảng, hỗ trợ icon, copy, tooltip, highlight, trạng thái lỗi.

## Props

| Prop      | Type              | Required | Description                      |
|-----------|-------------------|----------|----------------------------------|
| value     | string            | ✔️       | Giá trị link                     |
| type      | "url"/"email"/"phone"/"resource" | ❌ | Loại link (auto detect nếu thiếu)|
| icon      | ReactNode         | ❌       | Icon minh hoạ                    |
| label     | string            | ❌       | Hiện text thay vì value          |
| highlight | boolean           | ❌       | Nổi bật                          |
| tooltip   | string            | ❌       | Tooltip                          |
| invalid   | boolean           | ❌       | Hiện trạng thái lỗi              |
| copyable  | boolean           | ❌       | Click để copy link               |
| onCopy    | (val)=>void       | ❌       | Callback khi copy                |
| className | string            | ❌       | Custom className                 |

## Example

```tsx
<TableLinkCell
  value="https://openai.com"
  highlight
  tooltip="Truy cập website OpenAI"
  copyable
/>
