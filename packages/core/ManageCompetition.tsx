import React, { useState } from "react";

const initialCompetitions = [
  { id: 1, name: "Giải Trẻ Toàn quốc 2025", location: "Hà Nội", date: "2025-08-10" },
  { id: 2, name: "Giải CLB xuất sắc 2025", location: "TP HCM", date: "2025-09-15" },
];

export default function ManageCompetition() {
  const [comps, setComps] = useState(initialCompetitions);
  const [showForm, setShowForm] = useState(false);
  const [editIndex, setEditIndex] = useState<number | null>(null);
  const [form, setForm] = useState({ name: "", location: "", date: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (editIndex !== null) {
      const updated = [...comps];
      updated[editIndex] = { ...updated[editIndex], ...form };
      setComps(updated);
    } else {
      setComps([...comps, { id: Date.now(), ...form }]);
    }
    setForm({ name: "", location: "", date: "" });
    setEditIndex(null);
    setShowForm(false);
  };

  const handleEdit = (idx: number) => {
    setEditIndex(idx);
    setForm({
      name: comps[idx].name,
      location: comps[idx].location,
      date: comps[idx].date,
    });
    setShowForm(true);
  };

  const handleDelete = (idx: number) => {
    if (window.confirm("Xóa giải đấu này?")) {
      setComps(comps.filter((_, i) => i !== idx));
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#e3eeff] to-[#cfd8e7] flex flex-col items-center py-12">
      <div className="w-full max-w-4xl bg-white/80 backdrop-blur-lg rounded-2xl shadow-xl p-10">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-blue-800">Quản lý Giải Đấu</h2>
          <button
            className="px-4 py-2 bg-blue-600 text-white rounded-xl shadow hover:bg-blue-700 transition"
            onClick={() => {
              setForm({ name: "", location: "", date: "" });
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
                <th className="px-4 py-2">Tên giải đấu</th>
                <th className="px-4 py-2">Địa điểm</th>
                <th className="px-4 py-2">Ngày tổ chức</th>
                <th className="px-4 py-2">Hành động</th>
              </tr>
            </thead>
            <tbody>
              {comps.length === 0 && (
                <tr>
                  <td colSpan={5} className="text-center py-4 text-slate-400">
                    Chưa có giải đấu nào!
                  </td>
                </tr>
              )}
              {comps.map((c, idx) => (
                <tr key={c.id} className="even:bg-blue-50 hover:bg-blue-100/70">
                  <td className="px-4 py-2 text-center">{idx + 1}</td>
                  <td className="px-4 py-2">{c.name}</td>
                  <td className="px-4 py-2">{c.location}</td>
                  <td className="px-4 py-2">{c.date}</td>
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
                {editIndex !== null ? "Sửa Giải Đấu" : "Thêm Giải Đấu mới"}
              </h3>
              <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                <input
                  type="text"
                  placeholder="Tên giải đấu"
                  required
                  className="border px-3 py-2 rounded"
                  value={form.name}
                  onChange={e => setForm({ ...form, name: e.target.value })}
                />
                <input
                  type="text"
                  placeholder="Địa điểm tổ chức"
                  required
                  className="border px-3 py-2 rounded"
                  value={form.location}
                  onChange={e => setForm({ ...form, location: e.target.value })}
                />
                <input
                  type="date"
                  required
                  className="border px-3 py-2 rounded"
                  value={form.date}
                  onChange={e => setForm({ ...form, date: e.target.value })}
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
