import React, { useState } from "react";
import Button from "../components/ui/Button";
import Card from "../components/ui/Card";
import Table from "../components/ui/Table";
import Toast from "../components/ui/Toast";
import Badge from "../components/ui/Badge";
import Avatar from "../components/ui/Avatar";
import Pagination from "../components/ui/Pagination";
import Skeleton from "../components/ui/Skeleton";
import SearchInput from "../components/ui/SearchInput";
import Tab from "../components/ui/Tab";
import Popover from "../components/ui/Popover";
import Stepper from "../components/ui/Stepper";
import Timeline from "../components/ui/Timeline";
import Breadcrumb from "../components/ui/Breadcrumb";
import Modal from "../components/ui/Modal";

// Các module nâng cao
import AutoCompleteSearch from "../components/ui/AutoCompleteSearch";
import MarkdownEditor from "../components/ui/MarkdownEditor";
import NotificationCenter from "../components/ui/NotificationCenter";
import CommandPalette from "../components/ui/CommandPalette";
import CommentMention from "../components/ui/CommentMention";
import RoleMenu from "../components/ui/RoleMenu";
import NotificationHistory from "../components/ui/NotificationHistory";
import KeyboardShortcutHint from "../components/ui/KeyboardShortcutHint";

const mockUsers = [
  {
    id: 1,
    name: "Nguyễn Văn A",
    gender: "Nam",
    avatar: "",
    email: "a@gmail.com",
    status: "active",
    timeline: [
      { time: "2023", label: "Tham dự Giải trẻ QG", desc: "HCV 60kg nam" },
      { time: "2024", label: "Vô địch CLB toàn quốc", desc: "HCĐ 65kg nữ" },
      { time: "2025", label: "Tham dự SEA Games", desc: "Chưa có thành tích" }
    ]
  },
  {
    id: 2,
    name: "Trần Thị B",
    gender: "Nữ",
    avatar: "",
    email: "b@gmail.com",
    status: "inactive",
    timeline: [
      { time: "2022", label: "Học sinh giỏi QG", desc: "Không có huy chương" },
      { time: "2024", label: "Vô địch CLB toàn quốc", desc: "HCB 48kg nữ" }
    ]
  },
];

const notifications = [
  { id: 1, text: "Đăng ký mới thành công", time: "1 phút trước", unread: true },
  { id: 2, text: "Update hồ sơ", time: "3 giờ trước", unread: false }
];

const options = [
  { label: "Nguyễn Văn A", value: "athlete-1", type: "VĐV" },
  { label: "CLB Sài Gòn", value: "club-1", type: "CLB" },
  { label: "Trần Thị B", value: "athlete-2", type: "VĐV" },
];

function DemoAdvancedUI() {
  // State cho demo
  const [showToast, setShowToast] = useState(false);
  const [search, setSearch] = useState("");
  const [tab, setTab] = useState("info");
  const [page, setPage] = useState(1);
  const [modal, setModal] = useState(false);
  const [step, setStep] = useState(0);
  const [note, setNote] = useState("");
  const [role, setRole] = useState("admin");
  const [comment, setComment] = useState("");
  const [autoSearch, setAutoSearch] = useState("");

  const tabs = [
    { label: "Thông tin", value: "info" },
    { label: "Lịch sử", value: "history" },
    { label: "Cài đặt", value: "settings" },
  ];
  // State lưu VĐV đang chọn
  const [selectedAthlete, setSelectedAthlete] = useState(mockUsers[0]);

  // Lọc data theo search
  const data = mockUsers.filter(u =>
    u.name.toLowerCase().includes(search.toLowerCase()) ||
    u.email.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-8 bg-gradient-to-tr from-blue-100 via-white to-blue-50 min-h-screen space-y-12">
      {/* Command Palette mount ở App Layout cũng được */}
      <CommandPalette />

      <Breadcrumb items={[
        { label: "Trang chủ", path: "/" },
        { label: "Demo UI nâng cao" }
      ]} className="mb-6" />

      {/* ===== 1. Role-based Menu + Notification Center (phía trên) ===== */}
      <div className="flex flex-col md:flex-row gap-8 mb-8">
        <div>
          <div className="font-semibold mb-2">Menu động theo role:</div>
          <select value={role} onChange={e => setRole(e.target.value)} className="border rounded px-2 py-1 mb-2">
            <option value="admin">Admin</option>
            <option value="coach">Coach</option>
            <option value="user">User</option>
          </select>
          <RoleMenu userRole={role} />
        </div>
        <div>
          <div className="font-semibold mb-2">Notification Center:</div>
          <NotificationCenter />
        </div>
        <div>
          <div className="font-semibold mb-2">Notification History:</div>
          <NotificationHistory notifications={notifications} />
        </div>
      </div>

      {/* ===== 2. Keyboard shortcut hint ===== */}
      <div>
        <KeyboardShortcutHint keys={['Ctrl', 'N']} action="Tạo mới" onTrigger={() => alert("Mở form tạo mới!")} />
      </div>

      {/* ===== 3. Auto-complete Search ===== */}
      <div>
        <h2 className="font-bold mb-2">AutoCompleteSearch (Gõ tên, chọn VĐV/CLB...)</h2>
        <AutoCompleteSearch options={options} onSelect={opt => setAutoSearch(opt.label)} />
        {autoSearch && <div className="mt-2 text-blue-600">Bạn vừa chọn: {autoSearch}</div>}
      </div>

      {/* ===== 4. Markdown Editor ===== */}
      <div>
        <h2 className="font-bold mb-2">Markdown Editor (soạn ghi chú, bình luận nâng cao)</h2>
        <MarkdownEditor value={note} onChange={setNote} />
      </div>

      {/* ===== 5. Comment box + Mention ===== */}
      <div>
        <h2 className="font-bold mb-2">Comment Box (nhận diện @mention)</h2>
        <CommentMention onSend={setComment} />
        {comment && <div className="mt-2 text-blue-600">Nội dung vừa gửi: {comment}</div>}
      </div>

      {/* ===== 6. Tab, Popover, Toast, Modal, Stepper ===== */}
      <Card className="mb-8">
        <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
          <Tab
            tabs={tabs}
            current={tab}
            onChange={setTab}
          />
          <div className="flex gap-2 items-center">
            <Popover
              trigger={
                <Button variant="secondary">Popover</Button>
              }
              content={<div className="text-blue-800">Popover siêu đẹp 👋</div>}
            />
            <Button onClick={() => setShowToast(true)} variant="primary">Hiện Toast</Button>
            <Button onClick={() => setModal(true)} variant="primary">Mở Modal</Button>
          </div>
        </div>
        <Stepper
          steps={["Tạo tài khoản", "Xác thực email", "Nhập thông tin", "Hoàn tất"]}
          active={step}
        />
        <div className="flex gap-3 mt-3">
          <Button variant="secondary" disabled={step === 0} onClick={() => setStep(s => s - 1)}>Back</Button>
          <Button variant="primary" disabled={step === 3} onClick={() => setStep(s => s + 1)}>Next</Button>
        </div>
      </Card>

      {/* ===== 7. Search + Table + Pagination + Skeleton ===== */}
      <Card>
        <div className="flex items-center gap-4 mb-4">
          <SearchInput value={search} onChange={setSearch} />
          <Button onClick={() => setShowToast(true)} variant="secondary">Fake Load</Button>
        </div>
        {/* Skeleton loading */}
        {search === "loading" ? (
          <>
            {[...Array(3)].map((_, i) => <Skeleton key={i} height="2.5rem" className="mb-2" />)}
          </>
        ) : (
          <Table>
            <thead>
              <tr className="bg-blue-100 text-blue-900">
                <th className="p-3">#</th>
                <th className="p-3">Avatar</th>
                <th className="p-3">Tên</th>
                <th className="p-3">Email</th>
                <th className="p-3">Trạng thái</th>
                <th className="p-3">Hành động</th>
              </tr>
            </thead>
            <tbody>
              {data.length === 0 ? (
                <tr><td colSpan={6}><span className="text-blue-400 italic">Không có dữ liệu</span></td></tr>
              ) : (
                data.slice((page-1)*2, (page-1)*2+2).map((u, i) => (
                  <tr
                    key={u.id}
                    className={
                      (i % 2 ? "bg-blue-50/60 " : "") +
                      (selectedAthlete && u.id === selectedAthlete.id ? "ring-2 ring-blue-300" : "")
                    }
                    onClick={() => setSelectedAthlete(u)}
                    style={{ cursor: "pointer" }}
                  >
                    <td className="p-3">{u.id}</td>
                    <td className="p-3"><Avatar gender={u.gender} size={36} /></td>
                    <td className="p-3">{u.name}</td>
                    <td className="p-3">{u.email}</td>
                    <td className="p-3">
                      <Badge color={
                        u.status === "active" ? "green" : u.status === "inactive" ? "red" : "yellow"
                      }>
                        {u.status === "active" ? "Đang hoạt động" : u.status === "inactive" ? "Tạm khóa" : "Chờ duyệt"}
                      </Badge>
                    </td>
                    <td className="p-3">
                      <Button
                        variant="ghost"
                        onClick={e => { e.stopPropagation(); setSelectedAthlete(u); }}
                      >Chi tiết</Button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </Table>
        )}
        <Pagination
          page={page}
          total={data.length}
          pageSize={2}
          onChange={setPage}
        />
      </Card>

      {/* ===== 8. Timeline ===== */}
      <Card className="mt-8">
        <h2 className="font-bold text-blue-800 mb-4 text-lg">
          Lịch sử thi đấu: {selectedAthlete?.name}
        </h2>
        {selectedAthlete?.timeline && selectedAthlete.timeline.length > 0 ? (
          <Timeline events={selectedAthlete.timeline} />
        ) : (
          <div className="text-blue-400 italic">Chưa có dữ liệu lịch sử</div>
        )}
      </Card>

      {/* Toast + Modal */}
      <Toast open={showToast} message="Đã thực hiện thao tác thành công!" type="success" onClose={() => setShowToast(false)} />
      <Modal open={modal} onClose={() => setModal(false)}>
        <h2 className="text-blue-900 font-bold text-lg mb-2">Đây là Modal nâng cao</h2>
        <div className="mb-3">Modal này có thể đặt bất kỳ nội dung nào (form, bảng, avatar...)</div>
        <Button onClick={() => setModal(false)} variant="primary">OK</Button>
      </Modal>
    </div>
  );
}

export default DemoAdvancedUI;
