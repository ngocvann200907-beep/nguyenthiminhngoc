import { useParams, Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import { projects } from "@/data/projects";
import { Button } from "@/components/ui/button";
import {
  ArrowLeft,
  Target,
  Wrench,
  AlertTriangle,
  CheckCircle,
  ExternalLink,
} from "lucide-react";

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <Layout>
        <section className="pt-32 pb-24 min-h-screen">
          <div className="container mx-auto px-6 text-center">
            <h1 className="font-heading text-3xl font-semibold mb-4">
              Không tìm thấy dự án
            </h1>
            <Button asChild>
              <Link to="/projects">
                <ArrowLeft className="mr-2" size={18} /> Quay lại
              </Link>
            </Button>
          </div>
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      <section className="pt-32 pb-24">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            {/* Back button */}
            <Link
              to="/projects"
              className="inline-flex items-center text-muted-foreground hover:text-accent transition-colors mb-8"
            >
              <ArrowLeft size={18} className="mr-2" /> Quay lại danh sách
            </Link>

            {/* Header */}
            <div className="mb-12 animate-slide-up">
              <span className="inline-block bg-accent text-accent-foreground px-4 py-1.5 rounded-full text-sm font-medium mb-4">
                Bài {project.number}
              </span>
              <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                {project.title}
              </h1>
              <p className="text-lg text-muted-foreground">
                {project.shortDescription}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-6">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-secondary text-secondary-foreground px-3 py-1 rounded-lg text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Content Grid */}
            <div className="space-y-8">
              {/* Objectives */}
              <div className="bg-card p-6 md:p-8 rounded-xl shadow-md animate-fade-in">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-accent/10 rounded-lg">
                    <Target className="text-accent" size={24} />
                  </div>
                  <h2 className="font-heading text-xl font-semibold text-foreground">
                    Mục tiêu bài tập
                  </h2>
                </div>
                <ul className="space-y-3">
                  {project.objectives.map((obj, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-3 text-muted-foreground"
                    >
                      <CheckCircle
                        className="text-accent mt-0.5 flex-shrink-0"
                        size={18}
                      />
                      <span>{obj}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Process */}
              <div className="bg-card p-6 md:p-8 rounded-xl shadow-md animate-fade-in stagger-1">
                <h2 className="font-heading text-xl font-semibold text-foreground mb-4">
                  Quá trình thực hiện
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  {project.process}
                </p>
              </div>

              {/* Tools */}
              <div className="bg-card p-6 md:p-8 rounded-xl shadow-md animate-fade-in stagger-2">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-accent/10 rounded-lg">
                    <Wrench className="text-accent" size={24} />
                  </div>
                  <h2 className="font-heading text-xl font-semibold text-foreground">
                    Công cụ sử dụng
                  </h2>
                </div>
                <div className="flex flex-wrap gap-3">
                  {project.tools.map((tool) => (
                    <span
                      key={tool}
                      className="bg-primary text-primary-foreground px-4 py-2 rounded-lg text-sm font-medium"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              {/* Challenges */}
              {project.challenges && (
                <div className="bg-card p-6 md:p-8 rounded-xl shadow-md animate-fade-in stagger-3">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-destructive/10 rounded-lg">
                      <AlertTriangle className="text-destructive" size={24} />
                    </div>
                    <h2 className="font-heading text-xl font-semibold text-foreground">
                      Khó khăn & Giải pháp
                    </h2>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {project.challenges}
                  </p>
                </div>
              )}

              {/* Results */}
              {project.results && (
                <div className="bg-gradient-navy text-primary-foreground p-6 md:p-8 rounded-xl shadow-lg animate-fade-in stagger-4">
                  <h2 className="font-heading text-xl font-semibold mb-4">
                    Kết quả đạt được
                  </h2>
                  <p className="text-primary-foreground/90 leading-relaxed">
                    {project.results}
                  </p>
                </div>
              )}

              {/* Evidence placeholder */}
              <div className="bg-card p-6 md:p-8 rounded-xl shadow-md border-2 border-dashed border-border">
                <h2 className="font-heading text-xl font-semibold text-foreground mb-4">
                  Minh chứng sản phẩm
                </h2>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="aspect-video bg-secondary rounded-lg flex items-center justify-center">
                    <span className="text-muted-foreground text-sm">
                      Ảnh minh chứng 1
                    </span>
                  </div>
                  <div className="aspect-video bg-secondary rounded-lg flex items-center justify-center">
                    <span className="text-muted-foreground text-sm">
                      Ảnh minh chứng 2
                    </span>
                  </div>
                </div>
                <p className="text-muted-foreground text-sm mt-4 italic">
                  * Thêm ảnh chụp màn hình, file, hoặc link minh chứng tại đây
                </p>
              </div>

              {/* Links */}
              {project.links && project.links.length > 0 && (
                <div className="flex flex-wrap gap-4">
                  {project.links.map((link) => (
                    <Button
                      key={link.label}
                      asChild
                      variant="outline"
                      className="gap-2"
                    >
                      <a href={link.url} target="_blank" rel="noopener noreferrer">
                        {link.label} <ExternalLink size={16} />
                      </a>
                    </Button>
                  ))}
                </div>
              )}
            </div>

            {/* Navigation */}
            <div className="flex justify-between items-center mt-12 pt-8 border-t border-border">
              {Number(project.number) > 1 ? (
                <Button asChild variant="ghost">
                  <Link
                    to={`/projects/${
                      projects[Number(project.number) - 2].id
                    }`}
                  >
                    <ArrowLeft className="mr-2" size={18} /> Bài trước
                  </Link>
                </Button>
              ) : (
                <div />
              )}
              {Number(project.number) < projects.length ? (
                <Button asChild variant="ghost">
                  <Link to={`/projects/${projects[Number(project.number)].id}`}>
                    Bài tiếp theo <ArrowLeft className="ml-2 rotate-180" size={18} />
                  </Link>
                </Button>
              ) : (
                <Button asChild>
                  <Link to="/conclusion">
                    Xem tổng kết <ArrowLeft className="ml-2 rotate-180" size={18} />
                  </Link>
                </Button>
              )}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ProjectDetail;
