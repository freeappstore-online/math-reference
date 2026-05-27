export interface InteractiveField {
  label: string;
  key: string;
  type: "number" | "text";
  placeholder?: string;
}

export interface Formula {
  id: string;
  category: string;
  subcategory: string;
  name: string;
  formula: string;
  description: string;
  example: {
    problem: string;
    steps: string[];
  };
  interactiveFields?: InteractiveField[];
  calculate?: (inputs: Record<string, number>) => string;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  color: string;
  darkColor: string;
  description: string;
}
