import type { Category } from "../data/types";

interface SidebarProps {
  categories: Category[];
  activeCategory: string | null;
  showFavorites: boolean;
  favoritesCount: number;
  onSelectCategory: (id: string) => void;
  onShowFavorites: () => void;
  onShowHome: () => void;
  formulaCountByCategory: Record<string, number>;
}

export default function Sidebar({
  categories,
  activeCategory,
  showFavorites,
  favoritesCount,
  onSelectCategory,
  onShowFavorites,
  onShowHome,
  formulaCountByCategory,
}: SidebarProps) {
  return (
    <aside
      className="w-60 shrink-0 flex flex-col gap-1 p-3 overflow-y-auto"
      style={{
        borderRight: "1px solid var(--line)",
        background: "var(--panel)",
      }}
    >
      {/* Home */}
      <button
        onClick={onShowHome}
        className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium text-left cursor-pointer transition-colors w-full"
        style={{
          background: !activeCategory && !showFavorites ? "var(--accent)" : "transparent",
          color: !activeCategory && !showFavorites ? "white" : "var(--ink)",
          border: "none",
        }}
      >
        <span className="text-base">~</span>
        Home
      </button>

      {/* Favorites */}
      <button
        onClick={onShowFavorites}
        className="flex items-center justify-between px-3 py-2 rounded-lg text-sm font-medium text-left cursor-pointer transition-colors w-full"
        style={{
          background: showFavorites ? "var(--accent)" : "transparent",
          color: showFavorites ? "white" : "var(--ink)",
          border: "none",
        }}
      >
        <span className="flex items-center gap-2">
          <span className="text-base">{"★"}</span>
          Favorites
        </span>
        {favoritesCount > 0 && (
          <span
            className="text-[10px] font-semibold px-1.5 py-0.5 rounded-full"
            style={{
              background: showFavorites ? "rgba(255,255,255,0.25)" : "var(--line)",
              color: showFavorites ? "white" : "var(--muted)",
            }}
          >
            {favoritesCount}
          </span>
        )}
      </button>

      <hr className="my-1" style={{ border: "none", borderTop: "1px solid var(--line)" }} />

      {/* Categories */}
      {categories.map((cat) => {
        const count = formulaCountByCategory[cat.id] ?? 0;
        const isActive = activeCategory === cat.id;
        return (
          <button
            key={cat.id}
            onClick={() => onSelectCategory(cat.id)}
            className="flex items-center justify-between px-3 py-2 rounded-lg text-sm font-medium text-left cursor-pointer transition-colors w-full"
            style={{
              background: isActive ? cat.color : "transparent",
              color: isActive ? "white" : "var(--ink)",
              border: "none",
            }}
          >
            <span className="flex items-center gap-2">
              <span
                className="w-5 h-5 rounded flex items-center justify-center text-xs formula-display font-bold"
                style={{
                  background: isActive ? "rgba(255,255,255,0.25)" : `${cat.color}18`,
                  color: isActive ? "white" : cat.color,
                }}
              >
                {cat.icon}
              </span>
              {cat.name}
            </span>
            <span
              className="text-[10px] font-semibold px-1.5 py-0.5 rounded-full"
              style={{
                background: isActive ? "rgba(255,255,255,0.25)" : "var(--line)",
                color: isActive ? "white" : "var(--muted)",
              }}
            >
              {count}
            </span>
          </button>
        );
      })}
    </aside>
  );
}
