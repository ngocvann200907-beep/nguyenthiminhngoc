import Layout from "@/components/layout/Layout";
import SectionTitle from "@/components/ui/SectionTitle";
import {
  BookOpen,
  Lightbulb,
  TrendingUp,
  Heart,
  CheckCircle,
  AlertCircle,
} from "lucide-react";

const skillsLearned = [
  "Quản lý tệp và thư mục hiệu quả",
  "Tìm kiếm và đánh giá thông tin học thuật",
  "Viết prompt hiệu quả cho AI",
  "Sử dụng công cụ hợp tác trực tuyến",
  "Ứng dụng AI trong sáng tạo nội dung",
  "Sử dụng AI có trách nhiệm và đạo đức",
];

const challenges = [
  {
    problem: "Làm quen với nhiều công cụ mới cùng lúc",
    solution: "Học từng công cụ một, thực hành nhiều và ghi chú lại",
  },
  {
    problem: "Đánh giá độ tin cậy của nguồn thông tin",
    solution: "Áp dụng checklist CRAAP test và cross-reference nhiều nguồn",
  },
  {
    problem: "Viết prompt hiệu quả cho AI",
    solution: "Thực hành iterative prompting và học từ các best practices",
  },
  {
    problem: "Cân bằng giữa sử dụng AI và tự học",
    solution: "Xác định rõ mục đích sử dụng AI là hỗ trợ, không thay thế",
  },
];

const Conclusion = () => {
  return (
    <Layout>
      <section className="pt-32 pb-24">
        <div className="container mx-auto px-6">
          <SectionTitle
            subtitle="Reflection"
            title="Tổng kết"
            description="Nhìn lại hành trình học tập và những điều đã đạt được trong học phần Kỹ năng số và Ứng dụng AI."
          />

          <div className="max-w-4xl mx-auto space-y-12">
            {/* Summary */}
            <div className="bg-card p-8 rounded-xl shadow-md animate-slide-up">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-accent/10 rounded-full">
                  <BookOpen className="text-accent" size={28} />
                </div>
                <h2 className="font-heading text-2xl font-semibold text-foreground">
                  Tổng kết quá trình
                </h2>
              </div>
              <div className="prose prose-lg text-muted-foreground">
                <p>
                  Portfolio này là kết quả của một học kỳ học tập và thực hành
                  về kỹ năng số. Thông qua 6 bài tập thực hành, tôi đã có cơ hội
                  tiếp cận và làm chủ nhiều công cụ số hiện đại, đặc biệt là các
                  ứng dụng AI trong học tập.
                </p>
                <p className="mt-4">
                  Quá trình xây dựng portfolio này không chỉ giúp tôi tổng hợp
                  kiến thức mà còn rèn luyện tư duy phản biện, kỹ năng trình bày
                  và khả năng tự đánh giá bản thân. Mỗi bài tập là một bước tiến
                  trong hành trình trở thành một người học có trách nhiệm trong
                  kỷ nguyên số.
                </p>
              </div>
            </div>

            {/* Skills Learned */}
            <div className="bg-card p-8 rounded-xl shadow-md animate-fade-in stagger-1">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-accent/10 rounded-full">
                  <Lightbulb className="text-accent" size={28} />
                </div>
                <h2 className="font-heading text-2xl font-semibold text-foreground">
                  Kiến thức & Kỹ năng đạt được
                </h2>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                {skillsLearned.map((skill, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-4 bg-background rounded-lg"
                  >
                    <CheckCircle
                      className="text-accent flex-shrink-0 mt-0.5"
                      size={20}
                    />
                    <span className="text-foreground">{skill}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Challenges */}
            <div className="bg-card p-8 rounded-xl shadow-md animate-fade-in stagger-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-accent/10 rounded-full">
                  <TrendingUp className="text-accent" size={28} />
                </div>
                <h2 className="font-heading text-2xl font-semibold text-foreground">
                  Khó khăn & Cách khắc phục
                </h2>
              </div>
              <div className="space-y-4">
                {challenges.map((item, index) => (
                  <div
                    key={index}
                    className="p-4 bg-background rounded-lg border-l-4 border-accent"
                  >
                    <div className="flex items-start gap-2 mb-2">
                      <AlertCircle
                        className="text-destructive flex-shrink-0 mt-0.5"
                        size={18}
                      />
                      <span className="font-medium text-foreground">
                        {item.problem}
                      </span>
                    </div>
                    <div className="flex items-start gap-2 pl-6">
                      <CheckCircle
                        className="text-accent flex-shrink-0 mt-0.5"
                        size={16}
                      />
                      <span className="text-muted-foreground text-sm">
                        {item.solution}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Personal Reflection */}
            <div className="bg-gradient-navy text-primary-foreground p-8 rounded-xl shadow-lg animate-fade-in stagger-3">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-primary-foreground/10 rounded-full">
                  <Heart className="text-accent" size={28} />
                </div>
                <h2 className="font-heading text-2xl font-semibold">
                  Cảm nhận cá nhân
                </h2>
              </div>
              <div className="space-y-4 text-primary-foreground/90">
                <p>
                  Học phần này đã mở ra cho tôi một góc nhìn mới về việc học tập
                  trong thời đại số. AI không phải là mối đe dọa mà là công cụ
                  mạnh mẽ giúp tăng cường năng lực nếu chúng ta biết sử dụng
                  đúng cách.
                </p>
                <p>
                  Điều quan trọng nhất tôi học được là{" "}
                  <strong className="text-accent">
                    sử dụng AI có trách nhiệm
                  </strong>{" "}
                  - biết khi nào cần dùng, khi nào nên tự làm, và luôn giữ vững
                  đạo đức học thuật. Đây sẽ là kim chỉ nam cho tôi trong suốt
                  hành trình học tập và làm việc sau này.
                </p>
                <p className="italic mt-6 text-primary-foreground/70">
                  "Công nghệ là công cụ, con người mới là chủ nhân của tri thức."
                </p>
              </div>
            </div>

            {/* 7 Principles */}
            <div className="bg-card p-8 rounded-xl shadow-md animate-fade-in stagger-4">
              <h2 className="font-heading text-2xl font-semibold text-foreground mb-6 text-center">
                7 Nguyên tắc sử dụng AI có trách nhiệm
              </h2>
              <div className="grid gap-4">
                {[
                  "Minh bạch: Luôn công khai việc sử dụng AI trong sản phẩm học tập",
                  "Trung thực: Không sao chép nguyên văn output của AI mà không chỉnh sửa",
                  "Kiểm chứng: Luôn fact-check thông tin AI cung cấp",
                  "Học hỏi: Sử dụng AI như công cụ hỗ trợ, không thay thế việc học",
                  "Sáng tạo: Đóng góp ý tưởng và góc nhìn cá nhân vào sản phẩm",
                  "Bảo mật: Không chia sẻ thông tin nhạy cảm với AI",
                  "Phát triển: Liên tục cập nhật kiến thức về AI và công nghệ mới",
                ].map((principle, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 p-4 bg-background rounded-lg"
                  >
                    <span className="flex-shrink-0 w-8 h-8 bg-accent text-accent-foreground rounded-full flex items-center justify-center font-semibold text-sm">
                      {index + 1}
                    </span>
                    <span className="text-foreground">{principle}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Conclusion;
