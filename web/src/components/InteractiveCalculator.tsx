import { useState, useCallback } from "react";
import type { InteractiveField } from "../data/types";

interface InteractiveCalculatorProps {
  fields: InteractiveField[];
  calculate: (inputs: Record<string, number>) => string;
  accentColor: string;
}

export default function InteractiveCalculator({
  fields,
  calculate,
  accentColor,
}: InteractiveCalculatorProps) {
  const [values, setValues] = useState<Record<string, string>>({});
  const [result, setResult] = useState<string | null>(null);

  const handleChange = useCallback(
    (key: string, val: string) => {
      setValues((prev) => ({ ...prev, [key]: val }));
    },
    [],
  );

  const handleCalculate = useCallback(() => {
    const numericInputs: Record<string, number> = {};
    for (const field of fields) {
      const raw = values[field.key];
      if (raw === undefined || raw === "") continue;
      const num = parseFloat(raw);
      if (isNaN(num)) {
        setResult(`Invalid input for "${field.label}"`);
        return;
      }
      numericInputs[field.key] = num;
    }
    setResult(calculate(numericInputs));
  }, [fields, values, calculate]);

  return (
    <div
      className="mt-3 p-4 rounded-lg"
      style={{ background: "var(--panel)", border: "1px solid var(--line)" }}
    >
      <h4
        className="text-xs font-semibold uppercase tracking-wider mb-3"
        style={{ color: "var(--muted)" }}
      >
        Calculator
      </h4>
      <div className="flex flex-wrap gap-2 mb-3">
        {fields.map((field) => (
          <div key={field.key} className="flex flex-col gap-1">
            <label className="text-xs font-medium" style={{ color: "var(--muted)" }}>
              {field.label}
            </label>
            <input
              type="number"
              value={values[field.key] ?? ""}
              onChange={(e) => handleChange(field.key, e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") handleCalculate();
              }}
              placeholder={field.placeholder}
              className="px-3 py-1.5 rounded-md text-sm w-24 outline-none"
              style={{
                background: "var(--paper)",
                border: "1px solid var(--line)",
                color: "var(--ink)",
              }}
            />
          </div>
        ))}
      </div>
      <button
        onClick={handleCalculate}
        className="px-4 py-1.5 rounded-md text-sm font-medium text-white cursor-pointer transition-opacity hover:opacity-90"
        style={{ background: accentColor, border: "none" }}
      >
        Calculate
      </button>
      {result !== null && (
        <div
          className="mt-3 px-3 py-2 rounded-md text-sm font-mono formula-display"
          style={{
            background: `${accentColor}12`,
            color: accentColor,
            border: `1px solid ${accentColor}30`,
          }}
        >
          {result}
        </div>
      )}
    </div>
  );
}
