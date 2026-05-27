import type { Category } from "../data/types";

interface CategoryCardProps {
  category: Category;
  count: number;
  onClick: () => void;
}

export default function CategoryCard({ category, count, onClick }: CategoryCardProps) {
  return (
    <button
      onClick={onClick}
      className="flex flex-col items-start gap-2 p-5 rounded-xl cursor-pointer text-left transition-all hover:scale-[1.02] active:scale-[0.98]"
      style={{
        background: "var(--panel)",
        border: "1px solid var(--line)",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = category.color;
        e.currentTarget.style.boxShadow = `0 4px 12px ${category.color}20`;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = "var(--line)";
        e.currentTarget.style.boxShadow = "none";
      }}
    >
      <div
        className="w-10 h-10 rounded-lg flex items-center justify-center text-lg font-bold formula-display"
        style={{
          background: `${category.color}18`,
          color: category.color,
        }}
      >
        {category.icon}
      </div>
      <div>
        <h3 className="text-base font-semibold" style={{ color: "var(--ink)" }}>
          {category.name}
        </h3>
        <p className="text-xs mt-0.5" style={{ color: "var(--muted)" }}>
          {category.description}
        </p>
      </div>
      <span
        className="text-xs font-medium px-2 py-0.5 rounded-full"
        style={{
          background: `${category.color}18`,
          color: category.color,
        }}
      >
        {count} formulas
      </span>
    </button>
  );
}
