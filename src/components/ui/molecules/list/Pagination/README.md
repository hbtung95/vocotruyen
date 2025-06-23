# Pagination Molecule

Phân trang cho bảng, list, gallery, search...  
Hỗ trợ chuyển trang, nhảy đầu/cuối, chọn page size, loading/disabled.

## Props

| Prop            | Type      | Required | Description                      |
|-----------------|-----------|----------|----------------------------------|
| page            | number    | ✔️       | Trang hiện tại (1-based)         |
| pageSize        | number    | ✔️       | Số dòng/trang                    |
| total           | number    | ✔️       | Tổng số dòng                     |
| onPageChange    | (n)=>void | ✔️       | Gọi khi chuyển trang             |
| onPageSizeChange| (n)=>void | ❌       | Gọi khi đổi số dòng/trang        |
| pageSizeOptions | number[]  | ❌       | Tùy chọn pageSize                |
| showPageSize    | boolean   | ❌       | Hiện chọn pageSize               |
| disabled        | boolean   | ❌       | Khóa toàn bộ nút                 |
| loading         | boolean   | ❌       | Đang loading                     |
| className       | string    | ❌       | Custom className                 |

## Example

```tsx
<Pagination
  page={1}
  pageSize={20}
  total={85}
  onPageChange={setPage}
  showPageSize
  onPageSizeChange={setPageSize}
/>
