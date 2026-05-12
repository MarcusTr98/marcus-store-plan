export const p1 = [
  {
    id: "p1t1",
    date: "11/05 - 17/05",
    title: "Khởi tạo & Chốt yêu cầu hệ thống",
    note: "Thống nhất các tính năng cốt lõi (Must-have) và thiết kế kiến trúc dữ liệu dùng chung.",
    output: "Tài liệu Scope (Word) & Lược đồ ERD hoàn chỉnh (Miro / draw.io).",
    tags: ["doc", "db", "all"],
    who: "Cả team 5 người",
    subtasks: [
      {
        id: "p1_st0",
        title:
          "Khảo sát 5 website bán hàng online thực tế để tham khảo tính năng",
      },
      {
        id: "p1_st1",
        title: "Họp team chốt danh sách các tính năng cốt lõi (Scope)",
      },
      {
        id: "p1_st2",
        title:
          "Thiết kế Database (ERD), thống nhất các bảng, khóa ngoại (Foreign Keys)",
      },
      {
        id: "p1_st3",
        title: "Phân chia quyền quản lý các bảng Database cho từng thành viên",
      },
    ],
  },
  {
    id: "p1t2",
    date: "18/05 - 24/05",
    title: "Tiêu chuẩn API & Dựng Base Project",
    note: "Thống nhất cách giao tiếp dữ liệu giữa Frontend/Backend và thiết lập nền tảng dự án.",
    output:
      "Tài liệu API Contract (Postman) & Repository GitHub chứa Base code.",
    tags: ["nt", "be", "fe"],
    who: "Marcus (Lead) + Cả team",
    subtasks: [
      {
        id: "p1_st4",
        title:
          "Chốt định dạng API Contract đầu vào/đầu ra (không tự ý sửa sau khi chốt)",
      },
      {
        id: "p1_st5",
        title:
          "Marcus khởi tạo Spring Boot (Cấu hình DB SQL Server, Security, CORS)",
      },
      {
        id: "p1_st6",
        title: "Marcus khởi tạo Vue.js (Cấu hình Router, Pinia quản lý state)",
      },
      {
        id: "p1_st7",
        title:
          "Đẩy Base Project lên nhánh main GitHub & setup nhánh cho từng người",
      },
    ],
  },
  {
    id: "p1t3",
    date: "Chủ nhật (17/05 & 24/05)",
    title: "Họp nhóm định kỳ: Review Giai đoạn 1",
    note: "Rà soát tiến độ tuần. Thống nhất lại DB và các chuẩn API lần cuối trước khi bước vào GĐ 2.",
    output: "Biên bản chốt DB & API, sẵn sàng code.",
    tags: ["all"],
    who: "Cả team 5 người",
  },
];
