export interface Crumb {
  label: string;
  onClick?: (() => void) | undefined;
}

interface BreadcrumbsProps {
  crumbs: Crumb[];
}

export default function Breadcrumbs({ crumbs }: BreadcrumbsProps) {
  return (
    <nav className="flex items-center gap-1.5 text-sm mb-4 flex-wrap">
      {crumbs.map((crumb, i) => {
        const isLast = i === crumbs.length - 1;
        return (
          <span key={i} className="flex items-center gap-1.5">
            {i > 0 && (
              <span style={{ color: "var(--muted)" }}>/</span>
            )}
            {crumb.onClick && !isLast ? (
              <button
                onClick={crumb.onClick}
                className="cursor-pointer hover:underline font-medium"
                style={{ color: "var(--accent)", background: "none", border: "none", padding: 0 }}
              >
                {crumb.label}
              </button>
            ) : (
              <span
                className="font-medium"
                style={{ color: isLast ? "var(--ink)" : "var(--muted)" }}
              >
                {crumb.label}
              </span>
            )}
          </span>
        );
      })}
    </nav>
  );
}
