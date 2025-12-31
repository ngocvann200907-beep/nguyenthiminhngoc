import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import {
  User,
  GraduationCap,
  Target,
  Heart,
  ArrowRight,
  BookOpen,
  Cpu,
  Users,
} from "lucide-react";

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
        {/* Background decoration */}
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="absolute top-20 right-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block text-accent font-medium text-sm uppercase tracking-wider mb-4 animate-fade-in">
              Portfolio Kỹ năng số
            </span>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 animate-slide-up leading-tight">
              Xin chào, tôi là{" "}
              <span className="text-accent">Nguyễn Thị Minh Ngọc</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 animate-fade-in stagger-2 max-w-2xl mx-auto">
              Sinh viên ngành Công nghệ Thông tin, đam mê khám phá công nghệ số
              và ứng dụng AI trong học tập và cuộc sống.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in stagger-3">
              <Button
                asChild
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 font-medium px-8"
              >
                <Link to="/projects">
                  Xem dự án <ArrowRight className="ml-2" size={18} />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-primary/20 hover:bg-secondary font-medium px-8"
              >
                <Link to="/conclusion">Tổng kết học tập</Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
          <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex items-start justify-center p-2">
            <div className="w-1.5 h-3 bg-muted-foreground/50 rounded-full animate-bounce" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-card">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Image/Avatar side */}
              <div className="relative animate-slide-in-left">
                <div className="aspect-square max-w-md mx-auto bg-gradient-navy rounded-2xl overflow-hidden shadow-xl">
                  <div className="w-full h-full flex items-center justify-center">
                    <User
                      size={120}
                      className="text-primary-foreground/30"
                    />
                  </div>
                </div>
                <div className="absolute -bottom-4 -right-4 bg-accent text-accent-foreground p-4 rounded-xl shadow-lg">
                  <GraduationCap size={32} />
                </div>
              </div>

              {/* Content side */}
              <div className="animate-fade-in">
                <span className="inline-block text-accent font-medium text-sm uppercase tracking-wider mb-3">
                  Về tôi
                </span>
                <h2 className="font-heading text-3xl md:text-4xl font-semibold text-foreground mb-6">
                  Giới thiệu bản thân
                </h2>

                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Tôi là sinh viên năm thứ 2 ngành{" "}
                    <strong className="text-foreground">
                      Công nghệ Thông tin
                    </strong>{" "}
                    tại Trường Đại học ABC. Với niềm đam mê về công nghệ và mong
                    muốn ứng dụng AI vào học tập, tôi luôn tìm cách khám phá và
                    áp dụng những công cụ số mới nhất.
                  </p>
                  <p>
                    Portfolio này là nơi tôi tổng hợp những kiến thức và kỹ năng
                    đã học được trong học phần{" "}
                    <strong className="text-foreground">
                      Kỹ năng số và Ứng dụng AI
                    </strong>
                    , đồng thời thể hiện tư duy học tập có trách nhiệm và sáng
                    tạo.
                  </p>
                </div>

                {/* Info cards */}
                <div className="grid grid-cols-2 gap-4 mt-8">
                  <div className="bg-background p-4 rounded-lg">
                    <Target
                      className="text-accent mb-2"
                      size={24}
                    />
                    <h4 className="font-semibold text-foreground text-sm mb-1">
                      Mục tiêu học tập
                    </h4>
                    <p className="text-muted-foreground text-xs">
                      Làm chủ kỹ năng số trong thời đại AI
                    </p>
                  </div>
                  <div className="bg-background p-4 rounded-lg">
                    <Heart className="text-accent mb-2" size={24} />
                    <h4 className="font-semibold text-foreground text-sm mb-1">
                      Sở thích
                    </h4>
                    <p className="text-muted-foreground text-xs">
                      Lập trình, AI, Đọc sách, Âm nhạc
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Purpose */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <span className="inline-block text-accent font-medium text-sm uppercase tracking-wider mb-3">
              Mục đích
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-semibold text-foreground mb-12">
              Tại sao tạo Portfolio này?
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-card p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow animate-scale-in stagger-1">
                <div className="w-14 h-14 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="text-accent" size={28} />
                </div>
                <h3 className="font-heading text-lg font-semibold text-foreground mb-2">
                  Lưu trữ học tập
                </h3>
                <p className="text-muted-foreground text-sm">
                  Tổng hợp tất cả sản phẩm và bài tập trong một nơi dễ truy cập
                </p>
              </div>

              <div className="bg-card p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow animate-scale-in stagger-2">
                <div className="w-14 h-14 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Cpu className="text-accent" size={28} />
                </div>
                <h3 className="font-heading text-lg font-semibold text-foreground mb-2">
                  Thể hiện kỹ năng số
                </h3>
                <p className="text-muted-foreground text-sm">
                  Chứng minh khả năng sử dụng công nghệ và AI trong thực tế
                </p>
              </div>

              <div className="bg-card p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow animate-scale-in stagger-3">
                <div className="w-14 h-14 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="text-accent" size={28} />
                </div>
                <h3 className="font-heading text-lg font-semibold text-foreground mb-2">
                  Phát triển cá nhân
                </h3>
                <p className="text-muted-foreground text-sm">
                  Xây dựng thương hiệu cá nhân và định hướng nghề nghiệp
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-navy text-primary-foreground">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-semibold mb-4">
            Khám phá các dự án của tôi
          </h2>
          <p className="text-primary-foreground/70 mb-8 max-w-xl mx-auto">
            6 bài tập thực hành về kỹ năng số và ứng dụng AI trong học tập
          </p>
          <Button
            asChild
            size="lg"
            className="bg-accent text-accent-foreground hover:bg-accent/90 font-medium px-8"
          >
            <Link to="/projects">
              Xem tất cả dự án <ArrowRight className="ml-2" size={18} />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
