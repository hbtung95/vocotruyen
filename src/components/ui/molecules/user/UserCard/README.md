# UserCard Molecule

Hiển thị thông tin user: avatar, tên, phụ đề, trạng thái, actions, đúng chuẩn Liquid Glass MacOS 26 Tahoe.

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
<UserCard
  avatar="/avatars/jane.jpg"
  name="Jane Doe"
  subtitle="Huấn luyện viên"
  status="online"
  actions={<Button size="sm">Profile</Button>}
/>
