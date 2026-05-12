export const TASKS = {
  p1: [
    {
      id: "p1t1",
      date: "11/05 - 17/05",
      title: "Khởi tạo & Chốt yêu cầu hệ thống",
      note: "Thống nhất các tính năng cốt lõi.",
      output: "Tài liệu Scope & ERD.",
      tags: ["doc", "db", "all"],
      who: "Cả team 5 người",
      subtasks: [
        { id: "p1_st0", title: "Khảo sát 5 website bán hàng online" },
        { id: "p1_st1", title: "Họp team chốt Scope" },
        { id: "p1_st2", title: "Thiết kế Database (ERD)" },
      ],
    },
    {
      id: "p1t2",
      date: "18/05 - 24/05",
      title: "Tiêu chuẩn API & Dựng Base",
      note: "Thống nhất giao tiếp Frontend/Backend.",
      output: "API Contract & Base code.",
      tags: ["nt", "be", "fe"],
      who: "Marcus (Lead) + Cả team",
      subtasks: [
        { id: "p1_st4", title: "Chốt định dạng API Contract" },
        { id: "p1_st5", title: "Marcus khởi tạo Spring Boot" },
        { id: "p1_st6", title: "Marcus khởi tạo Vue.js" },
      ],
    },
  ],
  // Rút gọn file cấu trúc gốc tại đây, bạn dán nguyên mảng p2, p3, p4, p5 từ file cũ vào đây.
  p3: [
    {
      id: "p3t1",
      date: "13/07 - 19/07",
      title: "Merge Code & Quản lý nhánh Git",
      note: "Đẩy code lên nhánh main. Xử lý conflict.",
      output: "Nhánh main không lỗi.",
      tags: ["nt", "be", "fe"],
      who: "Marcus (Lead) + Cả team",
    },
  ],
};

export const MEMBERS = [
  {
    id: "m1",
    name: "Marcus (Nhóm trưởng)",
    role: "Đơn hàng, VNPay & Lõi Hệ thống",
    color: "bg-indigo-100",
    tcolor: "text-indigo-700",
    avatar: "MC",
    tasks: [
      "Thiết kế Database (ERD, SQL Server)",
      "Setup Base Project, Security",
      "API Thanh toán VNPay",
    ],
  },
  // Dán nguyên mảng Members từ file cũ vào.
];

export const TAG_STYLES = {
  nt: "bg-indigo-100 text-indigo-700 border-indigo-200",
  doc: "bg-slate-100 text-slate-700 border-slate-200",
  fe: "bg-blue-100 text-blue-700 border-blue-200",
  be: "bg-amber-100 text-amber-700 border-amber-200",
  all: "bg-emerald-100 text-emerald-700 border-emerald-200",
  slide: "bg-rose-100 text-rose-700 border-rose-200",
  db: "bg-purple-100 text-purple-700 border-purple-200",
};
export const TAG_LABELS = {
  nt: "Quản lý",
  doc: "Tài liệu",
  fe: "Frontend",
  be: "Backend",
  all: "Cả nhóm",
  slide: "Thuyết trình",
  db: "Database",
};
