import React, { useState } from "react";

const initialReferees = [
  { id: 1, name: "Nguyễn Văn D", phone: "0912345678", level: "Trọng tài Quốc gia" },
  { id: 2, name: "Lê Thị E", phone: "0988123456", level: "Trọng tài Cấp 1" },
];

export default function ManageReferee() {
  const [refs, setRefs] = useState(initialReferees);
  const [showForm, setShowForm] = useState(false);
  const [editIndex, setEditIndex] = useState<number | null>(null);
  const [form, setForm] = useState({ name: "", phone: "", level: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (editIndex !== null) {
      const updated = [...refs];
      updated[editIndex] = { ...updated[editIndex], ...form };
      setRefs(updated);
    } else {
      setRefs([...refs, { id: Date.now(), ...form }]);
    }
    setForm({ name: "", phone: "", level: "" });
    setEditIndex(null);
    setShowForm(false);
  };

  const handleEdit = (idx: number) => {
    setEditIndex(idx);
    setForm({
      name: refs[idx].name,
      phone: refs[idx].phone,
      level: refs[idx].level,
    });
    setShowForm(true);
  };

  const handleDelete = (idx: number) => {
    if (window.confirm("Xóa trọng tài này?")) {
      setRefs(refs.filter((_, i) => i !== idx));
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#e3eeff] to-[#cfd8e7] flex flex-col items-center py-12">
      <div className="w-full max-w-4xl bg-white/80 backdrop-blur-lg rounded-2xl shadow-xl p-10">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-blue-800">Quản lý Trọng tài</h2>
          <button
            className="px-4 py-2 bg-blue-600 text-white rounded-xl shadow hover:bg-blue-700 transition"
            onClick={() => {
              setForm({ name: "", phone: "", level: "" });
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
                <th className="px-4 py-2">Họ tên</th>
                <th className="px-4 py-2">SĐT</th>
                <th className="px-4 py-2">Cấp bậc</th>
                <th className="px-4 py-2">Hành động</th>
              </tr>
            </thead>
            <tbody>
              {refs.length === 0 && (
                <tr>
                  <td colSpan={5} className="text-center py-4 text-slate-400">
                    Chưa có trọng tài nào!
                  </td>
                </tr>
              )}
              {refs.map((r, idx) => (
                <tr key={r.id} className="even:bg-blue-50 hover:bg-blue-100/70">
                  <td className="px-4 py-2 text-center">{idx + 1}</td>
                  <td className="px-4 py-2">{r.name}</td>
                  <td className="px-4 py-2">{r.phone}</td>
                  <td className="px-4 py-2">{r.level}</td>
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
                {editIndex !== null ? "Sửa trọng tài" : "Thêm trọng tài mới"}
              </h3>
              <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                <input
                  type="text"
                  placeholder="Họ tên"
                  required
                  className="border px-3 py-2 rounded"
                  value={form.name}
                  onChange={e => setForm({ ...form, name: e.target.value })}
                />
                <input
                  type="text"
                  placeholder="Số điện thoại"
                  required
                  className="border px-3 py-2 rounded"
                  value={form.phone}
                  onChange={e => setForm({ ...form, phone: e.target.value })}
                />
                <input
                  type="text"
                  placeholder="Cấp bậc"
                  required
                  className="border px-3 py-2 rounded"
                  value={form.level}
                  onChange={e => setForm({ ...form, level: e.target.value })}
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
