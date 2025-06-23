# TableImportMenu Molecule

Menu popup import file vào table: Excel, CSV, JSON…  
Hỗ trợ kéo thả, file picker, chọn định dạng, báo lỗi, demo file, hướng dẫn.

## Props

| Prop            | Type         | Required | Description                    |
|-----------------|--------------|----------|--------------------------------|
| onImport        | (file,fmt)=>void | ✔️   | Callback khi chọn file nhập    |
| formats         | ImportFormat[] | ❌     | Định dạng hỗ trợ (csv, xlsx…) |
| loading         | boolean      | ❌       | Đang nhập/đang upload          |
| error           | string/Node  | ❌       | Báo lỗi                        |
| onDownloadDemo  | (fmt)=>void  | ❌       | Nút tải file mẫu demo          |
| instructions    | ReactNode    | ❌       | Hướng dẫn (mô tả)              |
| disabled        | boolean      | ❌       | Khóa nút                       |
| className       | string       | ❌       | Custom className               |

## Example

```tsx
<TableImportMenu
  onImport={(file,fmt) => importData(file,fmt)}
  onDownloadDemo={fmt => downloadDemo(fmt)}
  instructions="Chỉ nhận file CSV/XLSX, tối đa 1000 dòng."
/>
