export interface ProjectImage {
  src: string;
  caption: string;
}

export interface Project {
  id: string;
  number: string;
  title: string;
  shortDescription: string;
  objectives: string[];
  process: string;
  tools: string[];
  tags: string[];
  challenges?: string;
  results?: string;
  images?: ProjectImage[];
  links?: { label: string; url: string }[];
}

export const projects: Project[] = [
  {
    id: "file-management",
    number: "1",
    title: "Thao tác cơ bản với tệp và thư mục",
    shortDescription:
      "Tạo và tổ chức cấu trúc thư mục hợp lý, đặt tên tệp đúng quy ước với minh chứng cụ thể.",
    objectives: [
      "Hiểu cách tổ chức hệ thống tệp và thư mục hiệu quả",
      "Nắm vững quy ước đặt tên tệp chuyên nghiệp",
      "Thực hành sắp xếp tài liệu học tập một cách khoa học",
    ],
    process:
      "Tôi đã bắt đầu bằng việc phân tích nhu cầu lưu trữ tài liệu học tập của mình, sau đó thiết kế cấu trúc thư mục theo từng môn học và học kỳ. Áp dụng quy ước đặt tên thống nhất với format: [Năm]-[Môn học]-[Loại tài liệu]-[Tên file].",
    tools: ["Windows Explorer", "Google Drive", "Notion"],
    tags: ["Quản lý tệp", "Tổ chức", "Productivity"],
    challenges:
      "Ban đầu gặp khó khăn trong việc duy trì tính nhất quán khi đặt tên tệp. Đã khắc phục bằng cách tạo template đặt tên và checklist kiểm tra.",
    results:
      "Hệ thống thư mục gọn gàng, dễ tìm kiếm tài liệu, tiết kiệm thời gian 30% khi làm bài tập.",
    images: [
      { src: "/src/assets/evidence/google-drive.jpeg", caption: "Tạo thư mục trên Google Drive để lưu trữ tài liệu" },
    ],
  },
  {
    id: "academic-search",
    number: "2",
    title: "Tìm kiếm và đánh giá thông tin học thuật",
    shortDescription:
      "Sử dụng công cụ tìm kiếm nâng cao, đánh giá độ tin cậy của nguồn thông tin học thuật.",
    objectives: [
      "Sử dụng thành thạo các công cụ tìm kiếm học thuật",
      "Xây dựng chiến lược tìm kiếm hiệu quả với từ khóa phù hợp",
      "Đánh giá được độ tin cậy và chất lượng nguồn thông tin",
    ],
    process:
      "Thực hiện tìm kiếm về chủ đề 'Ứng dụng AI trong giáo dục' sử dụng Google Scholar, ResearchGate. Áp dụng các toán tử Boolean (AND, OR, NOT) và filter theo năm xuất bản, loại tài liệu.",
    tools: ["Google Scholar", "ResearchGate", "Sci-Hub", "Zotero"],
    tags: ["Nghiên cứu", "Tìm kiếm", "Học thuật"],
    challenges:
      "Khó phân biệt nguồn đáng tin cậy trong số lượng lớn kết quả. Đã học cách kiểm tra h-index, số trích dẫn và uy tín tạp chí.",
    results:
      "Thu thập được 15+ tài liệu chất lượng cao, xây dựng được thư viện tham khảo cá nhân.",
    images: [
      { src: "/src/assets/evidence/google-docs-report.jpeg", caption: "Báo cáo nghiên cứu khoa học trên Google Docs" },
    ],
  },
  {
    id: "effective-prompts",
    number: "3",
    title: "Viết Prompt hiệu quả cho học tập",
    shortDescription:
      "Thực hành viết prompt ban đầu và prompt cải tiến, so sánh và đánh giá kết quả.",
    objectives: [
      "Hiểu nguyên tắc viết prompt hiệu quả cho AI",
      "Thực hành kỹ thuật prompt engineering cơ bản",
      "So sánh và đánh giá chất lượng output từ các prompt khác nhau",
    ],
    process:
      "Chọn tác vụ: Giải thích khái niệm Machine Learning. Viết prompt v1 đơn giản, sau đó cải tiến với context, format yêu cầu, và ví dụ mong muốn. So sánh 2 kết quả.",
    tools: ["ChatGPT", "Claude", "Gemini"],
    tags: ["AI", "Prompt Engineering", "Học tập"],
    challenges:
      "Prompt quá dài có thể gây confusion cho AI. Cần cân bằng giữa chi tiết và súc tích.",
    results:
      "Output từ prompt cải tiến rõ ràng hơn 80%, có cấu trúc và phù hợp với mục đích học tập.",
    images: [
      { src: "/placeholder.svg", caption: "Prompt v1 đơn giản" },
      { src: "/placeholder.svg", caption: "Prompt v2 cải tiến và kết quả" },
    ],
  },
  {
    id: "online-collaboration",
    number: "4",
    title: "Sử dụng công cụ hợp tác trực tuyến",
    shortDescription:
      "Lập kế hoạch làm việc nhóm, phân công và theo dõi tiến độ bằng công cụ số.",
    objectives: [
      "Sử dụng hiệu quả các công cụ quản lý dự án trực tuyến",
      "Thiết lập quy trình làm việc nhóm có hệ thống",
      "Theo dõi và báo cáo tiến độ công việc",
    ],
    process:
      "Tạo workspace trên Notion cho dự án nhóm 4 người. Thiết lập Kanban board, phân công task với deadline cụ thể. Họp online hàng tuần qua Google Meet.",
    tools: ["Notion", "Trello", "Google Meet", "Slack"],
    tags: ["Teamwork", "Project Management", "Collaboration"],
    challenges:
      "Timezone khác nhau giữa các thành viên. Giải quyết bằng async communication và documentation rõ ràng.",
    results:
      "Hoàn thành dự án đúng hạn, tất cả thành viên nắm rõ tiến độ và trách nhiệm của mình.",
    images: [
      { src: "/src/assets/evidence/trello-progress.jpeg", caption: "Tiến độ làm việc trên Trello" },
      { src: "/src/assets/evidence/trello-final.jpeg", caption: "Bản Final hoàn thiện trên Trello" },
      { src: "/src/assets/evidence/microsoft-teams.jpeg", caption: "Giao tiếp nhóm qua Microsoft Teams" },
    ],
  },
  {
    id: "ai-content-creation",
    number: "5",
    title: "Sử dụng AI để hỗ trợ sáng tạo nội dung",
    shortDescription:
      "Tạo video ngắn hoặc sản phẩm số với sự hỗ trợ của các công cụ AI.",
    objectives: [
      "Khám phá các công cụ AI hỗ trợ sáng tạo nội dung",
      "Tạo sản phẩm số hoàn chỉnh với sự hỗ trợ của AI",
      "Đánh giá vai trò của AI trong quy trình sáng tạo",
    ],
    process:
      "Tạo video giới thiệu ngắn (3 phút) về chủ đề Kỹ năng số. Sử dụng ChatGPT để viết kịch bản, Canva AI để thiết kế, và CapCut để edit video.",
    tools: ["ChatGPT", "Canva AI", "CapCut", "ElevenLabs", "Midjourney"],
    tags: ["AI", "Content Creation", "Video", "Creative"],
    challenges:
      "AI-generated content cần được fact-check và personalize để phù hợp với mục đích cụ thể.",
    results:
      "Video hoàn chỉnh với chất lượng chuyên nghiệp, tiết kiệm 60% thời gian so với làm thủ công.",
    images: [
      { src: "/placeholder.svg", caption: "Kịch bản video từ ChatGPT" },
      { src: "/placeholder.svg", caption: "Video hoàn chỉnh trên Canva" },
    ],
  },
  {
    id: "responsible-ai",
    number: "6",
    title: "Sử dụng AI có trách nhiệm",
    shortDescription:
      "Phân tích đạo đức AI và đề xuất nguyên tắc sử dụng AI có trách nhiệm trong học tập.",
    objectives: [
      "Hiểu các vấn đề đạo đức liên quan đến sử dụng AI",
      "Xây dựng quan điểm cá nhân về AI trong học tập",
      "Đề xuất nguyên tắc sử dụng AI có trách nhiệm",
    ],
    process:
      "Nghiên cứu các chính sách AI của các trường đại học, phân tích case studies về vi phạm đạo đức AI. Xây dựng bộ nguyên tắc 7 điều cho việc sử dụng AI trong học tập.",
    tools: ["Research Papers", "University Policies", "AI Ethics Guidelines"],
    tags: ["Ethics", "AI", "Academic Integrity", "Policy"],
    challenges:
      "Ranh giới giữa hỗ trợ học tập và gian lận còn mờ nhạt. Cần định nghĩa rõ ràng từng trường hợp.",
    results:
      "Bộ 7 nguyên tắc sử dụng AI có trách nhiệm, được áp dụng trong suốt quá trình học tập.",
    images: [
      { src: "/placeholder.svg", caption: "Nghiên cứu chính sách AI của các trường" },
      { src: "/placeholder.svg", caption: "Bộ 7 nguyên tắc sử dụng AI" },
    ],
  },
];
