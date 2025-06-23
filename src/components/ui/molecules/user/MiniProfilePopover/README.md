# MiniProfilePopover Molecule

Popover profile mini hiển thị avatar, tên, phụ đề, email, trạng thái, actions — dùng cho hover menu, chat, list user.

## Props

| Prop     | Type                                              | Required | Description               |
|----------|---------------------------------------------------|----------|---------------------------|
| avatar   | string                                            | ✔️       | Link ảnh đại diện         |
| name     | string                                            | ✔️       | Tên người dùng            |
| subtitle | string                                            | ❌       | Chức vụ/phụ đề            |
| email    | string                                            | ❌       | Email liên hệ              |
| status   | "online" "offline" "busy" "away"                  | ❌       | Trạng thái                |
| actions  | ReactNode                                         | ❌       | Vùng action (nút, link)   |
| className| string                                            | ❌       | Custom CSS                |

## Example

```tsx
<MiniProfilePopover
  avatar="/avatars/kate.jpg"
  name="Kate Lee"
  subtitle="Moderator"
  email="kate.lee@email.com"
  status="online"
  actions={<Button size="xs">Kết bạn</Button>}
/>
