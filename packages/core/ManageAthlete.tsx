import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

// Hàm tính tuổi tự động từ ngày sinh
function calcAge(birthday: string) {
  if (!birthday) return "";
  const dob = new Date(birthday);
  const now = new Date();
  let age = now.getFullYear() - dob.getFullYear();
  if (
    now.getMonth() < dob.getMonth() ||
    (now.getMonth() === dob.getMonth() && now.getDate() < dob.getDate())
  ) {
    age--;
  }
  return age;
}

const initialAthletes = [
  {
    id: 1,
    name: "Nguyễn Văn A",
    birthday: "2005-08-05",
    gender: "Nam",
    club: "CLB Alpha",
    height: 178,
    weight: 72,
    cccd: "012345678912",
    phone: "0901123456",
    address: "Hà Nội",
    history: [
      { name: "Giải Trẻ QG 2023", date: "2023-08-01", result: "HCV" },
      { name: "Giải CLB 2024", date: "2024-03-01", result: "HCB" },
    ],
  },
  {
    id: 2,
    name: "Trần Thị B",
    birthday: "2007-01-15",
    gender: "Nữ",
    club: "CLB Beta",
    height: 165,
    weight: 58,
    cccd: "098765432100",
    phone: "0902555123",
    address: "TP HCM",
    history: [],
  },
];

type HistoryType = { name: string; date: string; result: string };

export default function ManageAthlete() {
  const navigate = useNavigate();
  const [athletes, setAthletes] = useState(initialAthletes);
  const [showForm, setShowForm] = useState(false);
  const [editIndex, setEditIndex] = useState<number | null>(null);
  const [form, setForm] = useState({
    name: "",
    birthday: "",
    gender: "Nam",
    club: "",
    height: "",
    weight: "",
    cccd: "",
    phone: "",
    address: "",
    history: [] as HistoryType[],
  });

  const [showHistoryModal, setShowHistoryModal] = useState(false);
  const [historyIdx, setHistoryIdx] = useState<number | null>(null);
  const [historyForm, setHistoryForm] = useState<HistoryType>({ name: "", date: "", result: "" });

  // Thêm hoặc sửa VĐV
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (editIndex !== null) {
      const updated = [...athletes];
      updated[editIndex] = {
        ...updated[editIndex],
        ...form,
        height: Number(form.height),
        weight: Number(form.weight),
        history: [...form.history],
      };
      setAthletes(updated);
    } else {
      setAthletes([
        ...athletes,
        {
          id: Date.now(),
          ...form,
          height: Number(form.height),
          weight: Number(form.weight),
          history: [...form.history],
        },
      ]);
    }
    setForm({
      name: "",
      birthday: "",
      gender: "Nam",
      club: "",
      height: "",
      weight: "",
      cccd: "",
      phone: "",
      address: "",
      history: [],
    });
    setEditIndex(null);
    setShowForm(false);
  };

  // Sửa VĐV
  const handleEdit = (idx: number) => {
    setEditIndex(idx);
    setForm({
      name: athletes[idx].name,
      birthday: athletes[idx].birthday,
      gender: athletes[idx].gender,
      club: athletes[idx].club,
      height: athletes[idx].height.toString(),
      weight: athletes[idx].weight.toString(),
      cccd: athletes[idx].cccd,
      phone: athletes[idx].phone,
      address: athletes[idx].address,
      history: [...athletes[idx].history],
    });
    setShowForm(true);
  };

  // Xóa VĐV
  const handleDelete = (idx: number) => {
    if (window.confirm("Xóa VĐV này?")) {
      setAthletes(athletes.filter((_, i) => i !== idx));
    }
  };

  // Lịch sử thi đấu: mở modal
  const openHistoryModal = (idx: number) => {
    setHistoryIdx(idx);
    setShowHistoryModal(true);
    setHistoryForm({ name: "", date: "", result: "" });
  };

  // Lịch sử thi đấu: thêm mới
  const handleAddHistory = () => {
    if (historyIdx === null) return;
    if (!historyForm.name || !historyForm.date || !historyForm.result) return;
    const updated = [...athletes];
    updated[historyIdx].history.push({ ...historyForm });
    setAthletes(updated);
    setHistoryForm({ name: "", date: "", result: "" });
  };

  // Lịch sử thi đấu: xóa
  const handleDeleteHistory = (athIdx: number, hisIdx: number) => {
    const updated = [...athletes];
    updated[athIdx].history.splice(hisIdx, 1);
    setAthletes(updated);
  };

  // Các trường nhập
  const athleteFields = [
    { label: "Họ tên", key: "name", type: "text" },
    { label: "Ngày sinh", key: "birthday", type: "date" },
    { label: "Giới tính", key: "gender", type: "select" },
    { label: "CLB", key: "club", type: "text" },
    { label: "Chiều cao (cm)", key: "height", type: "number" },
    { label: "Cân nặng (kg)", key: "weight", type: "number" },
    { label: "Số CCCD", key: "cccd", type: "text" },
    { label: "Số điện thoại", key: "phone", type: "text" },
    { label: "Địa chỉ", key: "address", type: "text" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#c8d6e7] via-[#f5fafd] to-[#b9cbe3] flex flex-col items-center py-12 font-sans">
      {/* Nút quay lại */}
      <button
        onClick={() => navigate(-1)}
        className="mb-8 px-5 py-2 rounded-2xl bg-white/70 hover:bg-white/90 text-blue-700 font-semibold shadow border border-blue-100 backdrop-blur"
        style={{ transition: "all .2s" }}
      >
        ← Quay lại
      </button>

      {/* Card glass */}
      <div className="w-full max-w-7xl bg-white/60 backdrop-blur-2xl rounded-3xl shadow-2xl p-10 border border-white/80">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-extrabold text-blue-900 tracking-wide">
            Quản lý Vận Động Viên
          </h2>
          <button
            className="px-7 py-2 rounded-2xl bg-gradient-to-r from-blue-400 to-blue-700 text-white font-bold text-lg shadow-md hover:scale-105 active:scale-100 border border-blue-300"
            onClick={() => {
              setForm({
                name: "",
                birthday: "",
                gender: "Nam",
                club: "",
                height: "",
                weight: "",
                cccd: "",
                phone: "",
                address: "",
                history: [],
              });
              setEditIndex(null);
              setShowForm(true);
            }}
            style={{ transition: "all .15s" }}
          >
            + Thêm mới
          </button>
        </div>

        {/* Bảng glass */}
        <div className="overflow-x-auto rounded-2xl border border-white/60 shadow-inner bg-white/30 backdrop-blur-xl">
          <table className="min-w-full text-base">
            <thead>
              <tr className="bg-white/60 text-blue-800 font-bold text-[16px]">
                <th className="p-3">STT</th>
                <th className="p-3">Họ tên</th>
                <th className="p-3">Ngày sinh</th>
                <th className="p-3">Tuổi</th>
                <th className="p-3">Giới tính</th>
                <th className="p-3">CLB</th>
                <th className="p-3">Chiều cao</th>
                <th className="p-3">Cân nặng</th>
                <th className="p-3">CCCD</th>
                <th className="p-3">Điện thoại</th>
                <th className="p-3">Địa chỉ</th>
                <th className="p-3">Lịch sử thi đấu</th>
                <th className="p-3">Hành động</th>
              </tr>
            </thead>
            <tbody>
              {athletes.length === 0 && (
                <tr>
                  <td colSpan={13} className="text-center py-4 text-slate-400">
                    Chưa có VĐV nào!
                  </td>
                </tr>
              )}
              {athletes.map((a, idx) => (
                <tr
                  key={a.id}
                  className="even:bg-blue-50/60 hover:bg-blue-200/40 transition"
                  style={{ fontSize: "16px" }}
                >
                  <td className="p-3 text-center">{idx + 1}</td>
                  <td className="p-3">{a.name}</td>
                  <td className="p-3">{a.birthday}</td>
                  <td className="p-3 text-center">{calcAge(a.birthday)}</td>
                  <td className="p-3">{a.gender}</td>
                  <td className="p-3">{a.club}</td>
                  <td className="p-3 text-center">{a.height}</td>
                  <td className="p-3 text-center">{a.weight}</td>
                  <td className="p-3">{a.cccd}</td>
                  <td className="p-3">{a.phone}</td>
                  <td className="p-3">{a.address}</td>
                  <td className="p-3">
                    <button
                      className="px-3 py-1 bg-blue-100 text-blue-800 rounded-xl font-semibold hover:bg-blue-200 transition shadow"
                      onClick={() => openHistoryModal(idx)}
                    >
                      Xem ({a.history.length})
                    </button>
                  </td>
                  <td className="p-3 flex gap-2 justify-center">
                    <button
                      className="px-4 py-1 bg-yellow-200 text-yellow-800 rounded-xl hover:bg-yellow-300 shadow transition font-bold"
                      onClick={() => handleEdit(idx)}
                    >
                      Sửa
                    </button>
                    <button
                      className="px-4 py-1 bg-red-500 text-white rounded-xl hover:bg-red-600 shadow transition font-bold"
                      onClick={() => handleDelete(idx)}
                    >
                      Xóa
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Popup form thêm/sửa VĐV */}
      {showForm && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/25 z-40 backdrop-blur">
          <div className="bg-white/80 border border-blue-200 rounded-3xl shadow-2xl p-10 w-full max-w-3xl transition-all">
            <h3 className="text-2xl font-extrabold mb-5 text-blue-700">
              {editIndex !== null ? "Sửa VĐV" : "Thêm VĐV mới"}
            </h3>
            <form onSubmit={handleSubmit} className="flex flex-wrap gap-5">
              {athleteFields.map(f =>
                f.type === "select" ? (
                  <div key={f.key} className="flex-1 min-w-[180px]">
                    <label className="block mb-1 text-base font-semibold">{f.label}</label>
                    <select
                      value={form.gender}
                      onChange={e => setForm({ ...form, gender: e.target.value })}
                      className="border border-blue-200 px-3 py-2 rounded-xl w-full bg-white/70 focus:outline-blue-400"
                    >
                      <option value="Nam">Nam</option>
                      <option value="Nữ">Nữ</option>
                      <option value="Khác">Khác</option>
                    </select>
                  </div>
                ) : (
                  <div key={f.key} className="flex-1 min-w-[180px]">
                    <label className="block mb-1 text-base font-semibold">{f.label}</label>
                    <input
                      type={f.type}
                      required
                      className="border border-blue-200 px-3 py-2 rounded-xl w-full bg-white/70 focus:outline-blue-400"
                      value={(form as any)[f.key]}
                      onChange={e => setForm({ ...form, [f.key]: e.target.value })}
                    />
                  </div>
                )
              )}
              <div className="w-full flex gap-4 mt-7">
                <button
                  type="submit"
                  className="flex-1 py-3 rounded-2xl bg-gradient-to-r from-blue-500 to-blue-700 text-white font-bold text-lg shadow hover:scale-105 transition"
                >
                  Lưu
                </button>
                <button
                  type="button"
                  className="flex-1 py-3 rounded-2xl bg-gray-200 text-gray-700 font-bold text-lg shadow hover:bg-gray-300 transition"
                  onClick={() => setShowForm(false)}
                >
                  Hủy
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Popup lịch sử thi đấu */}
      {showHistoryModal && historyIdx !== null && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/30 backdrop-blur z-50">
          <div className="bg-white/90 border border-blue-200 rounded-3xl shadow-2xl p-10 w-full max-w-xl transition-all">
            <h3 className="text-2xl font-extrabold text-blue-900 mb-5">
              Lịch sử thi đấu: <span className="text-blue-800">{athletes[historyIdx].name}</span>
            </h3>
            <ul className="mb-6 max-h-48 overflow-y-auto pr-1">
              {athletes[historyIdx].history.length === 0 && (
                <li className="text-slate-500 italic">Chưa có dữ liệu.</li>
              )}
              {athletes[historyIdx].history.map((h, i) => (
                <li key={i} className="flex items-center justify-between mb-2 border-b border-blue-100 py-1">
                  <span>
                    <b className="text-blue-800">{h.name}</b>
                    <span className="mx-2 text-gray-500">({h.date})</span>
                    <span className="text-blue-600 font-semibold">{h.result}</span>
                  </span>
                  <button
                    onClick={() => handleDeleteHistory(historyIdx, i)}
                    className="text-red-600 hover:text-red-900 text-xs rounded bg-red-50 px-2 py-1 ml-2"
                  >
                    Xóa
                  </button>
                </li>
              ))}
            </ul>
            <div className="border-t pt-4 mt-2 flex gap-2">
              <input
                type="text"
                placeholder="Tên giải"
                className="border border-blue-200 bg-white/90 px-3 py-2 rounded-xl w-2/5 focus:outline-blue-400"
                value={historyForm.name}
                onChange={e => setHistoryForm({ ...historyForm, name: e.target.value })}
              />
              <input
                type="date"
                className="border border-blue-200 bg-white/90 px-3 py-2 rounded-xl w-1/4 focus:outline-blue-400"
                value={historyForm.date}
                onChange={e => setHistoryForm({ ...historyForm, date: e.target.value })}
              />
              <input
                type="text"
                placeholder="Kết quả"
                className="border border-blue-200 bg-white/90 px-3 py-2 rounded-xl w-1/4 focus:outline-blue-400"
                value={historyForm.result}
                onChange={e => setHistoryForm({ ...historyForm, result: e.target.value })}
              />
              <button
                onClick={handleAddHistory}
                className="px-4 py-2 rounded-2xl bg-gradient-to-r from-blue-400 to-blue-700 text-white font-bold shadow hover:scale-105 active:scale-100"
              >
                Thêm
              </button>
            </div>
            <div className="mt-6 flex justify-end">
              <button
                onClick={() => setShowHistoryModal(false)}
                className="px-5 py-2 rounded-2xl bg-gray-200 hover:bg-gray-300 font-semibold text-gray-700"
              >
                Đóng
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
