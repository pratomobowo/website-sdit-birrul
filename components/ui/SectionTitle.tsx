interface SectionTitleProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
}

export default function SectionTitle({
  title,
  subtitle,
  centered = true,
  light = false,
}: SectionTitleProps) {
  return (
    <div className={`mb-12 ${centered ? "text-center" : ""}`}>
      <h2
        className={`font-display text-3xl md:text-4xl font-bold mb-4 ${
          light ? "text-white" : "text-emerald-800"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p className={`text-lg ${light ? "text-emerald-100" : "text-gray-600"}`}>
          {subtitle}
        </p>
      )}
      <div className={`w-24 h-1 bg-gold-500 mt-4 ${centered ? "mx-auto" : ""}`} />
    </div>
  );
}
