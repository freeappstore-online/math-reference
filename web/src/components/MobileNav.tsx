import type { Category } from "../data/types";

interface MobileNavProps {
  categories: Category[];
  activeCategory: string | null;
  showFavorites: boolean;
  favoritesCount: number;
  onSelectCategory: (id: string) => void;
  onShowFavorites: () => void;
  onShowHome: () => void;
  isOpen: boolean;
  onClose: () => void;
  formulaCountByCategory: Record<string, number>;
}

export default function MobileNav({
  categories,
  activeCategory,
  showFavorites,
  favoritesCount,
  onSelectCategory,
  onShowFavorites,
  onShowHome,
  isOpen,
  onClose,
  formulaCountByCategory,
}: MobileNavProps) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 lg:hidden"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0" style={{ background: "rgba(0,0,0,0.4)" }} />

      {/* Drawer */}
      <div
        className="absolute left-0 top-0 bottom-0 w-72 flex flex-col gap-1 p-4 overflow-y-auto"
        style={{ background: "var(--paper)" }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-bold" style={{ color: "var(--ink)" }}>
            Categories
          </h2>
          <button
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center rounded-lg cursor-pointer text-lg"
            style={{ background: "var(--panel)", border: "none", color: "var(--muted)" }}
            aria-label="Close menu"
          >
            x
          </button>
        </div>

        <button
          onClick={() => { onShowHome(); onClose(); }}
          className="flex items-center gap-2 px-3 py-2.5 rounded-lg text-sm font-medium text-left cursor-pointer w-full"
          style={{
            background: !activeCategory && !showFavorites ? "var(--accent)" : "transparent",
            color: !activeCategory && !showFavorites ? "white" : "var(--ink)",
            border: "none",
          }}
        >
          <span className="text-base">~</span>
          Home
        </button>

        <button
          onClick={() => { onShowFavorites(); onClose(); }}
          className="flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-medium text-left cursor-pointer w-full"
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

        <hr className="my-2" style={{ border: "none", borderTop: "1px solid var(--line)" }} />

        {categories.map((cat) => {
          const count = formulaCountByCategory[cat.id] ?? 0;
          const isActive = activeCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => { onSelectCategory(cat.id); onClose(); }}
              className="flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-medium text-left cursor-pointer w-full"
              style={{
                background: isActive ? cat.color : "transparent",
                color: isActive ? "white" : "var(--ink)",
                border: "none",
              }}
            >
              <span className="flex items-center gap-2">
                <span
                  className="w-6 h-6 rounded flex items-center justify-center text-xs formula-display font-bold"
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
      </div>
    </div>
  );
}
