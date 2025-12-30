import { Heart, Mail, Github, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h3 className="font-heading text-xl font-semibold mb-2">
              Portfolio Kỹ năng số
            </h3>
            <p className="text-primary-foreground/70 text-sm">
              Học phần Kỹ năng số và Ứng dụng AI
            </p>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="mailto:example@email.com"
              className="p-2 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
            <a
              href="#"
              className="p-2 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors"
              aria-label="Github"
            >
              <Github size={20} />
            </a>
            <a
              href="#"
              className="p-2 rounded-full bg-primary-foreground/10 hover:bg-primary-foreground/20 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-primary-foreground/10 text-center">
          <p className="text-primary-foreground/60 text-sm flex items-center justify-center gap-1">
            Được tạo với <Heart size={14} className="text-accent fill-accent" /> bởi Sinh viên
          </p>
          <p className="text-primary-foreground/40 text-xs mt-2">
            © 2025 - Tất cả quyền được bảo lưu
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
