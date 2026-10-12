export default function PageHeader({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <section className="bg-brand-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-16 md:py-20">
        <span className="block w-10 h-[3px] bg-accent mb-5" />
        <h1 className="text-4xl md:text-5xl font-light tracking-tight">{title}</h1>
        {subtitle && (
          <p className="text-brand-100/80 mt-4 text-base md:text-lg max-w-2xl leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}