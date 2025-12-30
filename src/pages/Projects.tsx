import Layout from "@/components/layout/Layout";
import SectionTitle from "@/components/ui/SectionTitle";
import ProjectCard from "@/components/ui/ProjectCard";
import { projects } from "@/data/projects";

const Projects = () => {
  return (
    <Layout>
      <section className="pt-32 pb-24">
        <div className="container mx-auto px-6">
          <SectionTitle
            subtitle="Bài tập thực hành"
            title="Các Dự án"
            description="Tổng hợp 6 bài tập thực hành về kỹ năng số và ứng dụng AI đã hoàn thành trong học phần."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className={`animate-scale-in stagger-${index + 1}`}
              >
                <ProjectCard
                  id={project.id}
                  number={project.number}
                  title={project.title}
                  description={project.shortDescription}
                  tags={project.tags}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Projects;
