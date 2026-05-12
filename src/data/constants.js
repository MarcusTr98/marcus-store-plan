export const TASKS = {
  p1: [
    {
      id: "p1t1",
      date: "11/05 - 17/05",
      title: "Khởi tạo & Chốt yêu cầu hệ thống",
      note: "Thống nhất các tính năng cốt lõi (Must-have) và thiết kế kiến trúc dữ liệu dùng chung.",
      output:
        "Tài liệu Scope (Word) & Lược đồ ERD hoàn chỉnh (Miro / draw.io).",
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
          title:
            "Phân chia quyền quản lý các bảng Database cho từng thành viên",
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
          title:
            "Marcus khởi tạo Vue.js (Cấu hình Router, Pinia quản lý state)",
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
      note: "Rà soát tiến độ tuần. Thống nhất lại DB và các chuẩn API lần cuối trước khi bước vào GĐ 2 (code độc lập).",
      output: "Biên bản chốt DB & API, sẵn sàng code.",
      tags: ["all"],
      who: "Cả team 5 người",
    },
  ],
  p2: [
    {
      id: "p2t1_be",
      date: "Tuần 3-5 (25/05 - 15/06)",
      title: "[Marcus] Viết Backend API: Lõi, VNPay, Đơn hàng",
      note: "Viết API Endpoints (Entity -> Repository -> Service -> Controller)",
      output: "API test pass trên Postman không lỗi 500.",
      tags: ["be", "nt"],
      who: "Marcus",
      subtasks: [
        { id: "m_be_1", title: "API luồng Thanh toán VNPay (IPN/Return)" },
        {
          id: "m_be_2",
          title:
            "API Quản lý Đơn hàng (Đổi trạng thái: Chờ duyệt, Đang giao...)",
        },
        { id: "m_be_3", title: "API Thống kê Doanh thu (Group by tháng/ngày)" },
      ],
    },
    {
      id: "p2t1_fe",
      date: "Tuần 6-9 (16/06 - 12/07)",
      title: "[Marcus] Vẽ Frontend UI: Admin & Giao dịch",
      note: "Sử dụng Vue.js để gọi các API vừa viết ở trên.",
      output: "Giao diện hoạt động mượt mà trên trình duyệt.",
      tags: ["fe", "nt"],
      who: "Marcus",
      subtasks: [
        {
          id: "m_fe_1",
          title: "Giao diện Dashboard Admin (Vẽ biểu đồ doanh thu)",
        },
        { id: "m_fe_2", title: "UI Quản lý duyệt/hủy đơn hàng bên Admin" },
        { id: "m_fe_3", title: "Xử lý luồng Redirect báo kết quả của VNPay" },
      ],
    },
    {
      id: "p2t2_be",
      date: "Tuần 3-5 (25/05 - 15/06)",
      title: "[Thành viên 1] Viết Backend API: Sản phẩm & Biến thể",
      note: "",
      output: "API chuẩn xác, lưu hình ảnh thành công.",
      tags: ["be"],
      who: "Thành viên 1",
      subtasks: [
        {
          id: "tv1_be_1",
          title: "Viết API CRUD Sản phẩm, Danh mục (dựa trên DB của Marcus)",
        },
        {
          id: "tv1_be_2",
          title: "Logic API thay đổi giá theo Biến thể (RAM/ROM)",
        },
        { id: "tv1_be_3", title: "API Upload hình ảnh sản phẩm" },
      ],
    },
    {
      id: "p2t2_fe",
      date: "Tuần 6-9 (16/06 - 12/07)",
      title: "[Thành viên 1] Vẽ Frontend UI: Chi tiết SP & Thêm SP",
      note: "",
      output: "Click chọn Option đổi giá tự động.",
      tags: ["fe"],
      who: "Thành viên 1",
      subtasks: [
        { id: "tv1_fe_1", title: "UI Trang chi tiết sản phẩm" },
        { id: "tv1_fe_2", title: "UI Chọn option thay đổi giá tiền" },
        {
          id: "tv1_fe_3",
          title: "Admin Form thêm mới sản phẩm (kèm upload ảnh)",
        },
      ],
    },
    {
      id: "p2t3_be",
      date: "Tuần 3-5 (25/05 - 15/06)",
      title: "[Thành viên 2] Viết Backend API: Giỏ hàng & Voucher",
      note: "",
      output: "Tính đúng số tiền khi áp dụng voucher.",
      tags: ["be"],
      who: "Thành viên 2",
      subtasks: [
        {
          id: "tv2_be_1",
          title: "Viết API CRUD Giỏ hàng (dựa trên DB của Marcus)",
        },
        {
          id: "tv2_be_2",
          title:
            "API kiểm tra tính hợp lệ của Voucher (Còn hạn không, giảm bao nhiêu)",
        },
      ],
    },
    {
      id: "p2t3_fe",
      date: "Tuần 6-9 (16/06 - 12/07)",
      title: "[Thành viên 2] Vẽ Frontend UI: Giỏ hàng & Đồng bộ",
      note: "",
      output: "Thêm SP vào giỏ, nhập mã hiển thị tiền giảm.",
      tags: ["fe"],
      who: "Thành viên 2",
      subtasks: [
        { id: "tv2_fe_1", title: "UI Trang Giỏ hàng" },
        {
          id: "tv2_fe_2",
          title: "Logic đồng bộ LocalStorage (Pinia) xuống API Backend",
        },
        { id: "tv2_fe_3", title: "UI nhập mã giảm giá và tính lại tổng tiền" },
      ],
    },
    {
      id: "p2t4_be",
      date: "Tuần 3-5 (25/05 - 15/06)",
      title: "[Thành viên 3] Viết Backend API: Auth & User",
      note: "",
      output: "Có Token JWT trả về khi login.",
      tags: ["be"],
      who: "Thành viên 3",
      subtasks: [
        { id: "tv3_be_1", title: "API Đăng ký, Cập nhật Profile" },
        {
          id: "tv3_be_2",
          title: "API Đăng nhập (gọi hàm sinh JWT do Marcus viết)",
        },
        { id: "tv3_be_3", title: "API Lấy danh sách User cho Admin" },
      ],
    },
    {
      id: "p2t4_fe",
      date: "Tuần 6-9 (16/06 - 12/07)",
      title: "[Thành viên 3] Vẽ Frontend UI: Auth & Quản trị User",
      note: "",
      output: "Form login báo lỗi nếu sai pass, chặn quyền vào Admin.",
      tags: ["fe"],
      who: "Thành viên 3",
      subtasks: [
        {
          id: "tv3_fe_1",
          title: "UI Form Đăng nhập / Đăng ký (Validate form)",
        },
        { id: "tv3_fe_2", title: "UI Trang thông tin cá nhân" },
        { id: "tv3_fe_3", title: "UI Admin khóa / mở khóa tài khoản" },
      ],
    },
    {
      id: "p2t5_be",
      date: "Tuần 3-5 (25/05 - 15/06)",
      title: "[Thành viên 4] Viết Backend API: Search & Review",
      note: "",
      output: "API trả về list sản phẩm theo keyword.",
      tags: ["be"],
      who: "Thành viên 4",
      subtasks: [
        {
          id: "tv4_be_1",
          title: "API Tìm kiếm sản phẩm cơ bản (theo tên/hãng)",
        },
        { id: "tv4_be_2", title: "API lưu Bình luận / Đánh giá sao" },
        { id: "tv4_be_3", title: "API CRUD Bài viết Blog" },
      ],
    },
    {
      id: "p2t5_fe",
      date: "Tuần 6-9 (16/06 - 12/07)",
      title: "[Thành viên 4] Vẽ Frontend UI: Search Bar & Blog",
      note: "",
      output: "Gõ chữ hiện list gợi ý.",
      tags: ["fe"],
      who: "Thành viên 4",
      subtasks: [
        { id: "tv4_fe_1", title: "Thanh search bar ở Header" },
        {
          id: "tv4_fe_2",
          title: "UI hiển thị danh sách Comment dưới sản phẩm",
        },
        { id: "tv4_fe_3", title: "UI đọc bài viết Công nghệ" },
      ],
    },
    {
      id: "p2t6",
      date: "Chủ nhật hằng tuần",
      title: "Họp nhóm định kỳ: Demo & Code Review",
      note: "Ngồi check API và ghép nối với nhau.",
      output: "Branch code chạy êm, ko lỗi conflict.",
      tags: ["all"],
      who: "Cả team 5 người",
    },
  ],
  p3: [
    {
      id: "p3t1",
      date: "13/07 - 19/07",
      title: "Merge Code & Quản lý nhánh Git",
      note: "Đẩy toàn bộ code của 5 cá nhân lên nhánh main. Marcus chịu trách nhiệm resolve conflict nếu code đè lên nhau.",
      output: "Nhánh main full code không bị lỗi biên dịch.",
      tags: ["nt", "be", "fe"],
      who: "Marcus (Lead) + Cả team",
    },
    {
      id: "p3t2",
      date: "20/07 - 26/07",
      title: "Test chéo xuyên luồng E-Commerce",
      note: "Chạy thử luồng: Đăng nhập (TV3) -> Lọc SP (TV4) -> Thêm Giỏ hàng (TV2) -> Thanh toán VNPay (Marcus) -> Trừ kho (TV1).",
      output: "Bảng báo cáo Bug (Excel/Trello) & Lịch sử Fix Bug.",
      tags: ["all"],
      who: "Cả team 5 người",
    },
    {
      id: "p3t3",
      date: "Chủ nhật hằng tuần",
      title: "Họp nhóm định kỳ: Review Test & Fix Bug",
      note: "Ngồi trực tiếp qua Meet hoặc Offline để giải quyết các luồng test bị gãy (VD: Không trừ được kho khi thanh toán xong).",
      output: "Hệ thống trơn tru từ đầu đến cuối.",
      tags: ["all"],
      who: "Cả team 5 người",
    },
  ],
  p4: [
    {
      id: "p4t1",
      date: "27/07 - 05/08",
      title: "Viết báo cáo: Nhóm trưởng (Marcus)",
      note: "",
      output: "File Word đặc tả.",
      tags: ["doc"],
      who: "Marcus",
      subtasks: [
        {
          id: "p4_s1",
          title: "Vẽ & giải thích toàn bộ ERD tổng thể của hệ thống",
        },
      ],
    },
    {
      id: "p4t2",
      date: "27/07 - 05/08",
      title: "Viết báo cáo: Thành viên 1",
      note: "",
      output: "File Word đặc tả.",
      tags: ["doc"],
      who: "Thành viên 1",
      subtasks: [
        {
          id: "p4_s2",
          title: "Giải thích logic gọi API thao tác với bảng Product",
        },
        { id: "p4_s3", title: "Đặc tả logic lưu trữ hình ảnh" },
      ],
    },
    {
      id: "p4t3",
      date: "27/07 - 05/08",
      title: "Viết báo cáo: Thành viên 2",
      note: "",
      output: "File Word đặc tả.",
      tags: ["doc"],
      who: "Thành viên 2",
      subtasks: [
        { id: "p4_s4", title: "Giải thích luồng lưu Giỏ hàng khách vãng lai" },
        { id: "p4_s5", title: "Thuật toán tính tiền khi áp dụng Voucher" },
      ],
    },
    {
      id: "p4t4",
      date: "27/07 - 05/08",
      title: "Viết báo cáo: Thành viên 3",
      note: "",
      output: "File Word đặc tả.",
      tags: ["doc"],
      who: "Thành viên 3",
      subtasks: [
        { id: "p4_s6", title: "Đặc tả luồng dữ liệu của bảng User và Role" },
        { id: "p4_s7", title: "Sơ đồ luồng đăng nhập" },
      ],
    },
    {
      id: "p4t5",
      date: "27/07 - 05/08",
      title: "Viết báo cáo: Thành viên 4",
      note: "",
      output: "File Word đặc tả.",
      tags: ["doc"],
      who: "Thành viên 4",
      subtasks: [
        { id: "p4_s8", title: "Chụp ảnh UI chức năng tìm kiếm" },
        { id: "p4_s9", title: "Trình bày cách gọi API lưu đánh giá" },
      ],
    },
    {
      id: "p4t6",
      date: "06/08 - 16/08",
      title: "Tổng hợp Báo cáo & Làm Slide",
      note: "Marcus gom Word. Cả team làm Slide Demo.",
      output: "Quyển Đồ án bản Final (PDF/Word).",
      tags: ["slide", "nt"],
      who: "Marcus + Cả team",
    },
    {
      id: "p4t7",
      date: "Chủ nhật hằng tuần",
      title: "Họp nhóm định kỳ: Rà soát Document",
      note: "Đọc chéo bản Word của nhau.",
      output: "Bản Word không lỗi format.",
      tags: ["all"],
      who: "Cả team 5 người",
    },
  ],
  p5: [
    {
      id: "p5t1",
      date: "17/08 - 25/08",
      title: "Tổng duyệt (Mock Defense)",
      note: "Cả team bấm giờ trình bày. Lường trước các câu hỏi phản biện của Hội đồng.",
      output: "Kịch bản bảo vệ trơn tru.",
      tags: ["all", "slide"],
      who: "Cả team 5 người",
      subtasks: [
        { id: "p5_s1", title: "[Marcus] Thuyết trình luồng thanh toán VNPay" },
        { id: "p5_s2", title: "[Thành viên 1] Demo thao tác tạo sản phẩm mới" },
        {
          id: "p5_s3",
          title: "[Thành viên 2] Demo khách thêm đồ và áp mã giảm giá",
        },
        {
          id: "p5_s4",
          title: "[Thành viên 3] Demo tạo tài khoản và bị Admin khóa",
        },
        {
          id: "p5_s5",
          title: "[Thành viên 4] Demo khách bình luận và xem tin tức",
        },
      ],
    },
    {
      id: "p5t2",
      date: "2 Ngày trước khi thi",
      title: "Họp chốt lần cuối",
      note: "Kiểm tra lại server deploy, test lại luồng thanh toán.",
      output: "Tự tin đi bảo vệ.",
      tags: ["all"],
      who: "Cả team 5 người",
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
      "Setup Base Project, Security (JWT, CORS)",
      "API Thanh toán VNPay & Quản lý Đơn hàng",
      "UI Dashboard & Duyệt đơn Admin",
      "Tổng hợp Báo cáo Final & Thuyết trình",
    ],
  },
  {
    id: "m2",
    name: "Thành viên 1",
    role: "Sản phẩm & Biến thể",
    color: "bg-amber-100",
    tcolor: "text-amber-700",
    avatar: "M1",
    tasks: [
      "API CRUD Sản phẩm & Upload ảnh",
      "Logic API giá theo biến thể (RAM/ROM)",
      "UI Trang chi tiết SP & Option giá",
      "Admin Form thêm SP",
      "Đặc tả logic lưu trữ hình ảnh",
    ],
  },
  {
    id: "m3",
    name: "Thành viên 2",
    role: "Giỏ hàng & Khuyến mãi (Voucher)",
    color: "bg-blue-100",
    tcolor: "text-blue-700",
    avatar: "M2",
    tasks: [
      "API CRUD Giỏ hàng",
      "API kiểm tra hợp lệ Voucher",
      "UI Trang Giỏ hàng & Nhập mã giảm giá",
      "Logic Pinia đồng bộ LocalStorage xuống API",
      "Giải thích thuật toán Voucher",
    ],
  },
  {
    id: "m4",
    name: "Thành viên 3",
    role: "Tài khoản & Phân quyền User",
    color: "bg-teal-100",
    tcolor: "text-teal-700",
    avatar: "M3",
    tasks: [
      "API Đăng ký, Đăng nhập (gọi hàm JWT)",
      "API Lấy DS User cho Admin",
      "UI Form Đăng ký/Đăng nhập",
      "UI Admin khóa/mở khóa tài khoản",
      "Đặc tả dữ liệu bảng User/Role",
    ],
  },
  {
    id: "m5",
    name: "Thành viên 4",
    role: "Tìm kiếm, Đánh giá & Blog",
    color: "bg-rose-100",
    tcolor: "text-rose-700",
    avatar: "M4",
    tasks: [
      "API Tìm kiếm sản phẩm cơ bản",
      "API Lưu Bình luận/Đánh giá sao",
      "Thanh search bar ở Header",
      "UI Danh sách Comment & Blog",
      "Chụp ảnh UI tìm kiếm (Báo cáo)",
    ],
  },
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
