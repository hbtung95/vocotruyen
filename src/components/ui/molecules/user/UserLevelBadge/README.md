# UserLevelBadge Molecule

Hiển thị badge cấp bậc user: newbie, member, pro, vip, coach, admin, elite...  
Dùng cho profile, leaderboard, bảng xếp hạng, bảng thành tích.

## Props

| Prop      | Type                  | Required | Description                        |
|-----------|-----------------------|----------|------------------------------------|
| level     | string                | ✔️       | Tên cấp bậc                        |
| label     | string                | ❌       | Label custom (mặc định auto)       |
| icon      | ReactNode             | ❌       | Icon custom (mặc định theo level)  |
| className | string                | ❌       | Custom CSS class                   |
| tooltip   | string                | ❌       | Tooltip khi hover                  |
| size      | "sm" \| "md" \| "lg" \| number | ❌  | Kích thước badge                   |

## Example

```tsx
<UserLevelBadge level="vip" />
<UserLevelBadge level="coach" label="HLV" />
<UserLevelBadge level="elite" icon={<Rocket size={14} />} />
