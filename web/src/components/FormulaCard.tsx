import { useState, useCallback } from "react";
import type { Formula } from "../data/types";
import InteractiveCalculator from "./InteractiveCalculator";

interface FormulaCardProps {
  formula: Formula;
  accentColor: string;
  isFavorite: boolean;
  onToggleFavorite: (id: string) => void;
  defaultExpanded?: boolean;
}

export default function FormulaCard({
  formula,
  accentColor,
  isFavorite,
  onToggleFavorite,
  defaultExpanded,
}: FormulaCardProps) {
  const [expanded, setExpanded] = useState(defaultExpanded ?? false);
  const [copied, setCopied] = useState(false);

  const handleCopy = useCallback(() => {
    // Strip HTML tags for plain-text copy
    const plain = formula.formula
      .replace(/<sup>/g, "^")
      .replace(/<\/sup>/g, "")
      .replace(/<sub>/g, "_")
      .replace(/<\/sub>/g, "")
      .replace(/<[^>]*>/g, "");
    navigator.clipboard.writeText(plain).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    }).catch(() => {
      // clipboard not available
    });
  }, [formula.formula]);

  return (
    <div
      className="rounded-xl overflow-hidden transition-all"
      style={{
        background: "var(--panel)",
        border: `1px solid ${expanded ? accentColor + "40" : "var(--line)"}`,
      }}
    >
      {/* Header */}
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full flex items-start gap-3 p-4 text-left cursor-pointer"
        style={{ background: "transparent", border: "none" }}
      >
        <span
          className="mt-0.5 text-xs font-mono w-5 h-5 flex items-center justify-center rounded transition-transform"
          style={{
            color: "var(--muted)",
            transform: expanded ? "rotate(90deg)" : "none",
          }}
        >
          &rsaquo;
        </span>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap">
            <h3 className="text-sm font-semibold" style={{ color: "var(--ink)" }}>
              {formula.name}
            </h3>
            <span
              className="text-[10px] font-medium px-1.5 py-0.5 rounded-full"
              style={{ background: `${accentColor}15`, color: accentColor }}
            >
              {formula.subcategory}
            </span>
          </div>
          <div
            className="text-base mt-1 formula-display font-bold"
            style={{ color: accentColor }}
            dangerouslySetInnerHTML={{ __html: formula.formula }}
          />
        </div>
        <div className="flex items-center gap-1 shrink-0">
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleCopy();
            }}
            className="w-7 h-7 flex items-center justify-center rounded-md cursor-pointer text-xs transition-colors"
            style={{
              background: copied ? `${accentColor}20` : "transparent",
              border: "none",
              color: copied ? accentColor : "var(--muted)",
            }}
            title="Copy formula"
            aria-label="Copy formula"
          >
            {copied ? "ok" : "cp"}
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onToggleFavorite(formula.id);
            }}
            className="w-7 h-7 flex items-center justify-center rounded-md cursor-pointer text-sm transition-colors"
            style={{
              background: isFavorite ? `${accentColor}20` : "transparent",
              border: "none",
              color: isFavorite ? accentColor : "var(--muted)",
            }}
            title={isFavorite ? "Remove from favorites" : "Add to favorites"}
            aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
          >
            {isFavorite ? "★" : "☆"}
          </button>
        </div>
      </button>

      {/* Expanded content */}
      {expanded && (
        <div className="px-4 pb-4 pt-0 ml-8">
          {/* Description */}
          <p className="text-sm mb-3" style={{ color: "var(--muted)" }}>
            {formula.description}
          </p>

          {/* Example */}
          <div
            className="p-3 rounded-lg mb-3"
            style={{ background: "var(--paper)", border: "1px solid var(--line)" }}
          >
            <h4
              className="text-xs font-semibold uppercase tracking-wider mb-2"
              style={{ color: "var(--muted)" }}
            >
              Example
            </h4>
            <p className="text-sm font-medium mb-2" style={{ color: "var(--ink)" }}>
              {formula.example.problem}
            </p>
            <ol className="list-decimal list-inside space-y-1">
              {formula.example.steps.map((step, i) => (
                <li key={i} className="text-sm" style={{ color: "var(--ink)" }}>
                  {step}
                </li>
              ))}
            </ol>
          </div>

          {/* Interactive calculator */}
          {formula.interactiveFields && formula.calculate && (
            <InteractiveCalculator
              fields={formula.interactiveFields}
              calculate={formula.calculate}
              accentColor={accentColor}
            />
          )}
        </div>
      )}
    </div>
  );
}
