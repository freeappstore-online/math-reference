import { useState, useMemo, useCallback } from "react";
import { allFormulas, categories } from "./data";
import type { Formula } from "./data/types";
import { getFavorites, toggleFavorite } from "./lib/favorites";
import SearchBar from "./components/SearchBar";
import Sidebar from "./components/Sidebar";
import MobileNav from "./components/MobileNav";
import CategoryCard from "./components/CategoryCard";
import Breadcrumbs, { type Crumb } from "./components/Breadcrumbs";
import FormulaCard from "./components/FormulaCard";

type View =
  | { type: "home" }
  | { type: "category"; id: string }
  | { type: "favorites" }
  | { type: "search" };

export default function App() {
  const [view, setView] = useState<View>({ type: "home" });
  const [search, setSearch] = useState("");
  const [favorites, setFavorites] = useState<Set<string>>(getFavorites);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  // Count formulas per category
  const formulaCountByCategory = useMemo(() => {
    const counts: Record<string, number> = {};
    for (const f of allFormulas) {
      counts[f.category] = (counts[f.category] ?? 0) + 1;
    }
    return counts;
  }, []);

  // Determine which view to render based on search
  const effectiveView = search.length > 0 ? { type: "search" as const } : view;

  // Filter formulas
  const visibleFormulas = useMemo((): Formula[] => {
    if (effectiveView.type === "search") {
      const q = search.toLowerCase();
      return allFormulas.filter(
        (f) =>
          f.name.toLowerCase().includes(q) ||
          f.category.toLowerCase().includes(q) ||
          f.subcategory.toLowerCase().includes(q) ||
          f.formula.toLowerCase().includes(q) ||
          f.description.toLowerCase().includes(q),
      );
    }
    if (effectiveView.type === "category") {
      return allFormulas.filter((f) => f.category === effectiveView.id);
    }
    if (effectiveView.type === "favorites") {
      return allFormulas.filter((f) => favorites.has(f.id));
    }
    return [];
  }, [effectiveView, search, favorites]);

  // Group formulas by subcategory for display
  const groupedFormulas = useMemo(() => {
    const groups: { subcategory: string; formulas: Formula[] }[] = [];
    const seen = new Map<string, Formula[]>();
    for (const f of visibleFormulas) {
      const existing = seen.get(f.subcategory);
      if (existing) {
        existing.push(f);
      } else {
        const arr = [f];
        seen.set(f.subcategory, arr);
        groups.push({ subcategory: f.subcategory, formulas: arr });
      }
    }
    return groups;
  }, [visibleFormulas]);

  const handleToggleFavorite = useCallback((id: string) => {
    const updated = toggleFavorite(id);
    setFavorites(new Set(updated));
  }, []);

  const handleSelectCategory = useCallback((id: string) => {
    setSearch("");
    setView({ type: "category", id });
  }, []);

  const handleShowFavorites = useCallback(() => {
    setSearch("");
    setView({ type: "favorites" });
  }, []);

  const handleShowHome = useCallback(() => {
    setSearch("");
    setView({ type: "home" });
  }, []);

  // Resolve category color
  const activeCategory =
    effectiveView.type === "category"
      ? categories.find((c) => c.id === effectiveView.id)
      : undefined;
  const accentColor = activeCategory?.color ?? "var(--accent)";

  // Build breadcrumbs
  const breadcrumbs = useMemo(() => {
    const crumbs: Crumb[] = [{ label: "Home", onClick: handleShowHome }];
    if (effectiveView.type === "category" && activeCategory) {
      crumbs.push({ label: activeCategory.name });
    } else if (effectiveView.type === "favorites") {
      crumbs.push({ label: "Favorites" });
    } else if (effectiveView.type === "search") {
      crumbs.push({ label: `Search: "${search}"` });
    }
    return crumbs;
  }, [effectiveView, activeCategory, search, handleShowHome]);

  // Find category color for a formula
  const getCategoryColor = useCallback((categoryId: string): string => {
    return categories.find((c) => c.id === categoryId)?.color ?? "var(--accent)";
  }, []);

  return (
    <div className="flex h-screen" style={{ background: "var(--paper)" }}>
      {/* Desktop Sidebar */}
      <div className="hidden lg:flex">
        <Sidebar
          categories={categories}
          activeCategory={effectiveView.type === "category" ? effectiveView.id : null}
          showFavorites={effectiveView.type === "favorites"}
          favoritesCount={favorites.size}
          onSelectCategory={handleSelectCategory}
          onShowFavorites={handleShowFavorites}
          onShowHome={handleShowHome}
          formulaCountByCategory={formulaCountByCategory}
        />
      </div>

      {/* Mobile Nav Drawer */}
      <MobileNav
        categories={categories}
        activeCategory={effectiveView.type === "category" ? effectiveView.id : null}
        showFavorites={effectiveView.type === "favorites"}
        favoritesCount={favorites.size}
        onSelectCategory={handleSelectCategory}
        onShowFavorites={handleShowFavorites}
        onShowHome={handleShowHome}
        isOpen={mobileNavOpen}
        onClose={() => setMobileNavOpen(false)}
        formulaCountByCategory={formulaCountByCategory}
      />

      {/* Main content */}
      <main className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header
          className="shrink-0 flex items-center gap-3 px-4 py-3 lg:px-6"
          style={{ borderBottom: "1px solid var(--line)", background: "var(--glass)" }}
        >
          <button
            onClick={() => setMobileNavOpen(true)}
            className="lg:hidden w-8 h-8 flex items-center justify-center rounded-lg cursor-pointer"
            style={{ background: "var(--panel)", border: "none", color: "var(--ink)" }}
            aria-label="Open navigation"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          <h1
            className="text-lg font-bold formula-display hidden sm:block"
            style={{ color: "var(--ink)" }}
          >
            Math Reference
          </h1>
          <div className="flex-1 max-w-md ml-auto">
            <SearchBar value={search} onChange={setSearch} />
          </div>
        </header>

        {/* Scrollable content area */}
        <div className="flex-1 overflow-y-auto px-4 py-5 lg:px-6">
          {/* Home view */}
          {effectiveView.type === "home" && (
            <div>
              <div className="mb-6">
                <h2
                  className="text-2xl font-bold formula-display"
                  style={{ color: "var(--ink)" }}
                >
                  Math Formula Reference
                </h2>
                <p className="text-sm mt-1" style={{ color: "var(--muted)" }}>
                  {allFormulas.length} formulas across {categories.length} categories.
                  Search, explore, and calculate.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4">
                {categories.map((cat) => (
                  <CategoryCard
                    key={cat.id}
                    category={cat}
                    count={formulaCountByCategory[cat.id] ?? 0}
                    onClick={() => handleSelectCategory(cat.id)}
                  />
                ))}
              </div>

              {/* Quick favorites preview */}
              {favorites.size > 0 && (
                <div className="mt-8">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-base font-semibold" style={{ color: "var(--ink)" }}>
                      Your Favorites
                    </h3>
                    <button
                      onClick={handleShowFavorites}
                      className="text-xs font-medium cursor-pointer"
                      style={{ color: "var(--accent)", background: "none", border: "none" }}
                    >
                      View all ({favorites.size})
                    </button>
                  </div>
                  <div className="space-y-2">
                    {allFormulas
                      .filter((f) => favorites.has(f.id))
                      .slice(0, 3)
                      .map((f) => (
                        <FormulaCard
                          key={f.id}
                          formula={f}
                          accentColor={getCategoryColor(f.category)}
                          isFavorite={true}
                          onToggleFavorite={handleToggleFavorite}
                        />
                      ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Category / Favorites / Search views */}
          {effectiveView.type !== "home" && (
            <div>
              <Breadcrumbs crumbs={breadcrumbs} />

              {effectiveView.type === "search" && (
                <p className="text-sm mb-4" style={{ color: "var(--muted)" }}>
                  {visibleFormulas.length} result{visibleFormulas.length === 1 ? "" : "s"} found
                </p>
              )}

              {effectiveView.type === "favorites" && favorites.size === 0 && (
                <div
                  className="text-center py-16 rounded-xl"
                  style={{ background: "var(--panel)" }}
                >
                  <p className="text-3xl mb-2">☆</p>
                  <p className="text-sm font-medium" style={{ color: "var(--ink)" }}>
                    No favorites yet
                  </p>
                  <p className="text-xs mt-1" style={{ color: "var(--muted)" }}>
                    Star formulas to save them here for quick access
                  </p>
                </div>
              )}

              {effectiveView.type === "search" && visibleFormulas.length === 0 && (
                <div
                  className="text-center py-16 rounded-xl"
                  style={{ background: "var(--panel)" }}
                >
                  <p className="text-3xl mb-2">?</p>
                  <p className="text-sm font-medium" style={{ color: "var(--ink)" }}>
                    No formulas match "{search}"
                  </p>
                  <p className="text-xs mt-1" style={{ color: "var(--muted)" }}>
                    Try a different keyword or browse categories
                  </p>
                </div>
              )}

              {groupedFormulas.map((group) => (
                <div key={group.subcategory} className="mb-6">
                  <h3
                    className="text-xs font-semibold uppercase tracking-wider mb-2 px-1"
                    style={{ color: "var(--muted)" }}
                  >
                    {group.subcategory}
                  </h3>
                  <div className="space-y-2">
                    {group.formulas.map((f) => (
                      <FormulaCard
                        key={f.id}
                        formula={f}
                        accentColor={
                          effectiveView.type === "category"
                            ? accentColor
                            : getCategoryColor(f.category)
                        }
                        isFavorite={favorites.has(f.id)}
                        onToggleFavorite={handleToggleFavorite}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        <footer
          className="shrink-0 flex items-center justify-center px-4 py-2 text-xs"
          style={{ borderTop: "1px solid var(--line)", color: "var(--muted)" }}
        >
          Math Reference — Free on FreeAppStore
        </footer>
      </main>
    </div>
  );
}
