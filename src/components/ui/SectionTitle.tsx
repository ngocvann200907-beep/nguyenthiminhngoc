interface SectionTitleProps {
  subtitle?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

const SectionTitle = ({
  subtitle,
  title,
  description,
  align = "center",
}: SectionTitleProps) => {
  return (
    <div
      className={`mb-12 ${
        align === "center" ? "text-center" : "text-left"
      }`}
    >
      {subtitle && (
        <span className="inline-block text-accent font-medium text-sm uppercase tracking-wider mb-3 animate-fade-in">
          {subtitle}
        </span>
      )}
      <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-4 animate-slide-up">
        {title}
      </h2>
      {description && (
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto animate-fade-in stagger-2">
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;
