# UserCardCompact Molecule

Hiển thị thông tin user: avatar, tên, phụ đề, trạng thái, actions — dạng thu gọn, tối ưu cho sidebar/list dọc.

## Props

| Prop     | Type                                              | Required | Description               |
|----------|---------------------------------------------------|----------|---------------------------|
| avatar   | string                                            | ✔️       | Link ảnh đại diện         |
| name     | string                                            | ✔️       | Tên người dùng            |
| subtitle | string                                            | ❌       | Phụ đề/nghề nghiệp        |
| status   | "online" "offline" "busy" "away"                  | ❌       | Trạng thái                |
| actions  | ReactNode                                         | ❌       | Vùng nút/action           |
| className| string                                            | ❌       | Custom CSS                |

## Example

```tsx
<UserCardCompact
  avatar="/avatars/anna.jpg"
  name="Anna Nguyen"
  subtitle="Học viên"
  status="offline"
  actions={<Button size="xs">Profile</Button>}
/>
