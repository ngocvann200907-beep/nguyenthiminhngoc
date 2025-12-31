import { Button } from "@/components/ui/button";
import { Download, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { projects } from "@/data/projects";

const ExportPDF = () => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <>
      {/* Print controls - hidden when printing */}
      <div className="print:hidden fixed top-0 left-0 right-0 bg-background border-b z-50 p-4">
        <div className="container mx-auto flex items-center justify-between">
          <Button asChild variant="ghost" size="sm">
            <Link to="/">
              <ArrowLeft className="mr-2" size={16} />
              Quay lại
            </Link>
          </Button>
          <Button onClick={handlePrint} className="bg-primary text-primary-foreground">
            <Download className="mr-2" size={16} />
            Tải PDF (Ctrl+P)
          </Button>
        </div>
      </div>

      {/* PDF Content */}
      <div className="pt-20 print:pt-0 px-8 print:px-0 max-w-4xl mx-auto bg-white text-black print:text-black">
        
        {/* Cover Page */}
        <div className="min-h-screen flex flex-col items-center justify-center text-center print:break-after-page">
          <h1 className="text-4xl font-bold mb-4 text-blue-600">PORTFOLIO KỸ NĂNG SỐ</h1>
          <h2 className="text-2xl mb-8">Và Ứng dụng AI trong Học tập</h2>
          <div className="w-32 h-1 bg-blue-600 mb-8"></div>
          <p className="text-xl font-semibold mb-2">Nguyễn Văn A</p>
          <p className="text-gray-600 mb-1">Sinh viên ngành Công nghệ Thông tin</p>
          <p className="text-gray-600 mb-8">Trường Đại học ABC</p>
          <p className="text-sm text-gray-500">Học kỳ 1 - Năm học 2024-2025</p>
        </div>

        {/* Page 1: About Me */}
        <div className="print:break-after-page py-8">
          <h2 className="text-2xl font-bold text-blue-600 border-b-2 border-blue-600 pb-2 mb-6">
            TRANG 1: GIỚI THIỆU BẢN THÂN
          </h2>
          
          <h3 className="text-xl font-semibold mb-4">Về tôi</h3>
          <p className="mb-4 text-gray-700 leading-relaxed">
            Tôi là sinh viên năm thứ 2 ngành <strong>Công nghệ Thông tin</strong> tại Trường Đại học ABC. 
            Với niềm đam mê về công nghệ và mong muốn ứng dụng AI vào học tập, tôi luôn tìm cách khám phá 
            và áp dụng những công cụ số mới nhất.
          </p>
          <p className="mb-6 text-gray-700 leading-relaxed">
            Portfolio này là nơi tôi tổng hợp những kiến thức và kỹ năng đã học được trong học phần 
            <strong> Kỹ năng số và Ứng dụng AI</strong>, đồng thời thể hiện tư duy học tập có trách nhiệm và sáng tạo.
          </p>

          <div className="grid grid-cols-2 gap-4 mb-8">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-semibold text-blue-700 mb-2">Mục tiêu học tập</h4>
              <p className="text-sm text-gray-600">Làm chủ kỹ năng số trong thời đại AI</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-semibold text-blue-700 mb-2">Sở thích</h4>
              <p className="text-sm text-gray-600">Lập trình, AI, Đọc sách, Âm nhạc</p>
            </div>
          </div>

          <h3 className="text-xl font-semibold mb-4">Mục đích Portfolio</h3>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <span className="bg-blue-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm flex-shrink-0">1</span>
              <div>
                <strong>Lưu trữ học tập:</strong>
                <span className="text-gray-600"> Tổng hợp tất cả sản phẩm và bài tập trong một nơi dễ truy cập</span>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="bg-blue-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm flex-shrink-0">2</span>
              <div>
                <strong>Thể hiện kỹ năng số:</strong>
                <span className="text-gray-600"> Chứng minh khả năng sử dụng công nghệ và AI trong thực tế</span>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="bg-blue-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm flex-shrink-0">3</span>
              <div>
                <strong>Phát triển cá nhân:</strong>
                <span className="text-gray-600"> Xây dựng thương hiệu cá nhân và định hướng nghề nghiệp</span>
              </div>
            </div>
          </div>
        </div>

        {/* Page 2-4: Projects */}
        <div className="print:break-after-page py-8">
          <h2 className="text-2xl font-bold text-blue-600 border-b-2 border-blue-600 pb-2 mb-6">
            TRANG 2: CÁC DỰ ÁN / BÀI TẬP
          </h2>
          <p className="text-gray-600 mb-6">
            Tổng hợp 6 bài tập thực hành về kỹ năng số và ứng dụng AI đã hoàn thành trong học phần.
          </p>

          {projects.slice(0, 3).map((project, index) => (
            <div key={project.id} className={`mb-8 ${index < 2 ? 'pb-6 border-b' : ''}`}>
              <h3 className="text-lg font-bold text-blue-700 mb-2">
                Bài {project.number}: {project.title}
              </h3>
              <p className="text-sm text-gray-500 mb-3">Tags: {project.tags.join(", ")}</p>
              
              <div className="space-y-3 text-sm">
                <div>
                  <strong className="text-gray-800">Mục tiêu:</strong>
                  <ul className="list-disc list-inside text-gray-600 mt-1">
                    {project.objectives.map((obj, i) => (
                      <li key={i}>{obj}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <strong className="text-gray-800">Quá trình thực hiện:</strong>
                  <p className="text-gray-600 mt-1">{project.process}</p>
                </div>
                <div>
                  <strong className="text-gray-800">Công cụ:</strong>
                  <span className="text-gray-600"> {project.tools.join(", ")}</span>
                </div>
                {project.challenges && (
                  <div>
                    <strong className="text-gray-800">Khó khăn & Giải pháp:</strong>
                    <p className="text-gray-600 mt-1">{project.challenges}</p>
                  </div>
                )}
                {project.results && (
                  <div>
                    <strong className="text-gray-800">Kết quả:</strong>
                    <p className="text-gray-600 mt-1">{project.results}</p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Projects continued */}
        <div className="print:break-after-page py-8">
          <h2 className="text-xl font-bold text-blue-600 mb-6">
            CÁC DỰ ÁN / BÀI TẬP (tiếp theo)
          </h2>

          {projects.slice(3, 6).map((project, index) => (
            <div key={project.id} className={`mb-8 ${index < 2 ? 'pb-6 border-b' : ''}`}>
              <h3 className="text-lg font-bold text-blue-700 mb-2">
                Bài {project.number}: {project.title}
              </h3>
              <p className="text-sm text-gray-500 mb-3">Tags: {project.tags.join(", ")}</p>
              
              <div className="space-y-3 text-sm">
                <div>
                  <strong className="text-gray-800">Mục tiêu:</strong>
                  <ul className="list-disc list-inside text-gray-600 mt-1">
                    {project.objectives.map((obj, i) => (
                      <li key={i}>{obj}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <strong className="text-gray-800">Quá trình thực hiện:</strong>
                  <p className="text-gray-600 mt-1">{project.process}</p>
                </div>
                <div>
                  <strong className="text-gray-800">Công cụ:</strong>
                  <span className="text-gray-600"> {project.tools.join(", ")}</span>
                </div>
                {project.challenges && (
                  <div>
                    <strong className="text-gray-800">Khó khăn & Giải pháp:</strong>
                    <p className="text-gray-600 mt-1">{project.challenges}</p>
                  </div>
                )}
                {project.results && (
                  <div>
                    <strong className="text-gray-800">Kết quả:</strong>
                    <p className="text-gray-600 mt-1">{project.results}</p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Page 5: Conclusion */}
        <div className="print:break-after-page py-8">
          <h2 className="text-2xl font-bold text-blue-600 border-b-2 border-blue-600 pb-2 mb-6">
            TRANG 3: TỔNG KẾT
          </h2>

          <h3 className="text-xl font-semibold mb-4">Tổng kết quá trình</h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            Portfolio này là kết quả của một học kỳ học tập và thực hành về kỹ năng số. 
            Thông qua 6 bài tập thực hành, tôi đã có cơ hội tiếp cận và làm chủ nhiều công cụ số hiện đại, 
            đặc biệt là các ứng dụng AI trong học tập.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Quá trình xây dựng portfolio này không chỉ giúp tôi tổng hợp kiến thức mà còn rèn luyện 
            tư duy phản biện, kỹ năng trình bày và khả năng tự đánh giá bản thân.
          </p>

          <h3 className="text-xl font-semibold mb-4">Kiến thức & Kỹ năng đạt được</h3>
          <div className="grid grid-cols-2 gap-2 mb-6">
            {[
              "Quản lý tệp và thư mục hiệu quả",
              "Tìm kiếm và đánh giá thông tin học thuật",
              "Viết prompt hiệu quả cho AI",
              "Sử dụng công cụ hợp tác trực tuyến",
              "Ứng dụng AI trong sáng tạo nội dung",
              "Sử dụng AI có trách nhiệm và đạo đức",
            ].map((skill, index) => (
              <div key={index} className="flex items-center gap-2 text-sm">
                <span className="text-green-600">✓</span>
                <span className="text-gray-700">{skill}</span>
              </div>
            ))}
          </div>

          <h3 className="text-xl font-semibold mb-4">Khó khăn & Cách khắc phục</h3>
          <div className="space-y-3 mb-6 text-sm">
            {[
              { problem: "Làm quen với nhiều công cụ mới cùng lúc", solution: "Học từng công cụ một, thực hành nhiều và ghi chú lại" },
              { problem: "Đánh giá độ tin cậy của nguồn thông tin", solution: "Áp dụng checklist CRAAP test và cross-reference nhiều nguồn" },
              { problem: "Viết prompt hiệu quả cho AI", solution: "Thực hành iterative prompting và học từ các best practices" },
              { problem: "Cân bằng giữa sử dụng AI và tự học", solution: "Xác định rõ mục đích sử dụng AI là hỗ trợ, không thay thế" },
            ].map((item, index) => (
              <div key={index} className="border-l-4 border-blue-600 pl-3">
                <p className="font-medium text-gray-800">⚠ {item.problem}</p>
                <p className="text-gray-600">→ {item.solution}</p>
              </div>
            ))}
          </div>

          <h3 className="text-xl font-semibold mb-4">Cảm nhận cá nhân</h3>
          <div className="bg-blue-50 p-4 rounded-lg mb-6">
            <p className="text-gray-700 leading-relaxed mb-3">
              Học phần này đã mở ra cho tôi một góc nhìn mới về việc học tập trong thời đại số. 
              AI không phải là mối đe dọa mà là công cụ mạnh mẽ giúp tăng cường năng lực nếu chúng ta biết sử dụng đúng cách.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Điều quan trọng nhất tôi học được là <strong className="text-blue-700">sử dụng AI có trách nhiệm</strong> - 
              biết khi nào cần dùng, khi nào nên tự làm, và luôn giữ vững đạo đức học thuật.
            </p>
            <p className="italic text-gray-500 mt-4 text-center">
              "Công nghệ là công cụ, con người mới là chủ nhân của tri thức."
            </p>
          </div>
        </div>

        {/* Page 6: 7 Principles */}
        <div className="py-8">
          <h2 className="text-xl font-bold text-blue-600 border-b-2 border-blue-600 pb-2 mb-6">
            7 NGUYÊN TẮC SỬ DỤNG AI CÓ TRÁCH NHIỆM
          </h2>

          <div className="space-y-4">
            {[
              { title: "Minh bạch", desc: "Luôn công khai việc sử dụng AI trong sản phẩm học tập" },
              { title: "Trung thực", desc: "Không sao chép nguyên văn output của AI mà không chỉnh sửa" },
              { title: "Kiểm chứng", desc: "Luôn fact-check thông tin AI cung cấp" },
              { title: "Học hỏi", desc: "Sử dụng AI như công cụ hỗ trợ, không thay thế việc học" },
              { title: "Sáng tạo", desc: "Đóng góp ý tưởng và góc nhìn cá nhân vào sản phẩm" },
              { title: "Bảo mật", desc: "Không chia sẻ thông tin nhạy cảm với AI" },
              { title: "Phát triển", desc: "Liên tục cập nhật kiến thức về AI và công nghệ mới" },
            ].map((principle, index) => (
              <div key={index} className="flex items-start gap-4">
                <span className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0">
                  {index + 1}
                </span>
                <div>
                  <strong className="text-gray-800">{principle.title}:</strong>
                  <span className="text-gray-600"> {principle.desc}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 pt-8 border-t text-center text-gray-500 text-sm">
            <p>Portfolio Kỹ năng số và Ứng dụng AI</p>
            <p>© 2024 - Nguyễn Văn A</p>
          </div>
        </div>
      </div>

      {/* Print styles */}
      <style>{`
        @media print {
          body {
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
          }
          @page {
            margin: 1.5cm;
            size: A4;
          }
        }
      `}</style>
    </>
  );
};

export default ExportPDF;
