import type { ServiceCardProps } from "../types";

export function Card({
  number,
  icon,
  title,
  description,
  features,
  featured = false,
}: ServiceCardProps) {
  return (
    <article
      className={`group relative overflow-hidden rounded-2xl border border-(--border) bg-(--surface) p-7 md:p-8 hover:border-(--primary) transition-colors duration-500 ${
        featured ? "lg:col-span-2" : ""
      }`}
    >
      
      <span className="absolute top-0 left-0 h-1 w-full bg-(--border) group-hover:bg-(--primary) transition-colors duration-500" />

      <div
        className={`flex ${
          featured ? "flex-col md:flex-row md:items-start md:gap-10" : "flex-col"
        }`}
      >
        
        <div className={featured ? "md:w-2/5" : ""}>
          <div className="flex items-center justify-between mb-6">
            <div className="h-14 w-14 rounded-xl bg-(--background) border border-(--border) flex items-center justify-center text-(--primary) text-2xl group-hover:bg-(--primary) group-hover:text-white group-hover:border-(--primary) transition-colors duration-500">
              <i className={icon} />
            </div>
            <span className="font-mono text-sm text-(--text-muted)">
              {number}
            </span>
          </div>

          <h3 className="text-xl md:text-2xl font-bold text-(--text) mb-2">
            {title}
          </h3>
          <p className="text-(--text-muted) text-sm md:text-base leading-relaxed">
            {description}
          </p>
        </div>

        
        <ul
          className={`mt-6 space-y-3 ${
            featured ? "md:mt-0 md:w-3/5 md:border-l md:border-(--border) md:pl-8" : ""
          }`}
        >
          {features.map((feature) => (
            <li
              key={feature}
              className="flex items-start gap-3 text-sm md:text-base text-(--text)"
            >
              <i className="ri-checkbox-circle-fill text-(--primary) text-lg mt-0.5 shrink-0" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      {featured && (
         <a
          href="#contact"
          className="mt-8 inline-flex items-center gap-2 text-(--primary) font-medium text-sm hover:gap-3 transition-all duration-300"
        >
          Discutons de votre projet
          <i className="ri-arrow-right-line" />
        </a>
      )}
    </article>
  );
}