import React, { useState } from "react";

// Dữ liệu giả lập ban đầu
const initialClubs = [
  { id: 1, name: "CLB Alpha", city: "Hà Nội", leader: "Nguyễn A", phone: "0123456789" },
  { id: 2, name: "CLB Beta", city: "TP HCM", leader: "Trần B", phone: "0987654321" },
];

export default function ManageClub() {
  const [clubs, setClubs] = useState(initialClubs);
  const [showForm, setShowForm] = useState(false);
  const [editIndex, setEditIndex] = useState<number | null>(null);
  const [form, setForm] = useState({ name: "", city: "", leader: "", phone: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (editIndex !== null) {
      const updated = [...clubs];
      updated[editIndex] = { ...updated[editIndex], ...form };
      setClubs(updated);
    } else {
      setClubs([...clubs, { id: Date.now(), ...form }]);
    }
    setForm({ name: "", city: "", leader: "", phone: "" });
    setEditIndex(null);
    setShowForm(false);
  };

  const handleEdit = (idx: number) => {
    setEditIndex(idx);
    setForm({
      name: clubs[idx].name,
      city: clubs[idx].city,
      leader: clubs[idx].leader,
      phone: clubs[idx].phone,
    });
    setShowForm(true);
  };

  const handleDelete = (idx: number) => {
    if (window.confirm("Xóa CLB này?")) {
      setClubs(clubs.filter((_, i) => i !== idx));
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#e3eeff] to-[#cfd8e7] flex flex-col items-center py-12">
      <div className="w-full max-w-4xl bg-white/80 backdrop-blur-lg rounded-2xl shadow-xl p-10">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-blue-800">Quản lý Câu Lạc Bộ</h2>
          <button
            className="px-4 py-2 bg-blue-600 text-white rounded-xl shadow hover:bg-blue-700 transition"
            onClick={() => {
              setForm({ name: "", city: "", leader: "", phone: "" });
              setEditIndex(null);
              setShowForm(true);
            }}
          >
            Thêm mới
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full table-auto border border-gray-200 rounded-xl bg-white">
            <thead>
              <tr className="bg-blue-100 text-blue-800">
                <th className="px-4 py-2">STT</th>
                <th className="px-4 py-2">Tên CLB</th>
                <th className="px-4 py-2">Thành phố</th>
                <th className="px-4 py-2">Chủ nhiệm</th>
                <th className="px-4 py-2">SĐT</th>
                <th className="px-4 py-2">Hành động</th>
              </tr>
            </thead>
            <tbody>
              {clubs.length === 0 && (
                <tr>
                  <td colSpan={6} className="text-center py-4 text-slate-400">
                    Chưa có CLB nào!
                  </td>
                </tr>
              )}
              {clubs.map((c, idx) => (
                <tr key={c.id} className="even:bg-blue-50 hover:bg-blue-100/70">
                  <td className="px-4 py-2 text-center">{idx + 1}</td>
                  <td className="px-4 py-2">{c.name}</td>
                  <td className="px-4 py-2">{c.city}</td>
                  <td className="px-4 py-2">{c.leader}</td>
                  <td className="px-4 py-2">{c.phone}</td>
                  <td className="px-4 py-2 flex gap-2 justify-center">
                    <button
                      className="px-3 py-1 bg-yellow-300 text-yellow-800 rounded hover:bg-yellow-400"
                      onClick={() => handleEdit(idx)}
                    >
                      Sửa
                    </button>
                    <button
                      className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
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

        {showForm && (
          <div className="fixed inset-0 flex items-center justify-center bg-black/30 z-30">
            <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md">
              <h3 className="text-xl font-bold mb-4 text-blue-700">
                {editIndex !== null ? "Sửa CLB" : "Thêm CLB mới"}
              </h3>
              <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                <input
                  type="text"
                  placeholder="Tên CLB"
                  required
                  className="border px-3 py-2 rounded"
                  value={form.name}
                  onChange={e => setForm({ ...form, name: e.target.value })}
                />
                <input
                  type="text"
                  placeholder="Thành phố"
                  required
                  className="border px-3 py-2 rounded"
                  value={form.city}
                  onChange={e => setForm({ ...form, city: e.target.value })}
                />
                <input
                  type="text"
                  placeholder="Chủ nhiệm"
                  required
                  className="border px-3 py-2 rounded"
                  value={form.leader}
                  onChange={e => setForm({ ...form, leader: e.target.value })}
                />
                <input
                  type="text"
                  placeholder="Số điện thoại"
                  required
                  className="border px-3 py-2 rounded"
                  value={form.phone}
                  onChange={e => setForm({ ...form, phone: e.target.value })}
                />
                <div className="flex gap-3 mt-4">
                  <button
                    type="submit"
                    className="flex-1 py-2 rounded bg-blue-600 text-white font-bold hover:bg-blue-700"
                  >
                    Lưu
                  </button>
                  <button
                    type="button"
                    className="flex-1 py-2 rounded bg-gray-300 text-gray-700 font-bold hover:bg-gray-400"
                    onClick={() => setShowForm(false)}
                  >
                    Hủy
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
