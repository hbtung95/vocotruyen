import React from "react";

const Unauthorized: React.FC = () => (
  <div className="flex flex-col items-center justify-center h-[80vh] text-center">
    <h2 className="text-3xl font-bold text-red-500 mb-4">403 - Không có quyền truy cập</h2>
    <p>Bạn không được phép truy cập trang này. Vui lòng liên hệ quản trị viên.</p>
  </div>
);

export default Unauthorized;
