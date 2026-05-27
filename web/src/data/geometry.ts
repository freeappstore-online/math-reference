import type { Formula } from "./types";

export const geometryFormulas: Formula[] = [
  {
    id: "area-circle",
    category: "geometry",
    subcategory: "Area",
    name: "Area of a Circle",
    formula: `A = πr²`,
    description:
      "The area enclosed by a circle with radius r.",
    example: {
      problem: "Find the area of a circle with radius 5",
      steps: ["A = π(5)²", "A = 25π", "A ≈ 78.54"],
    },
    interactiveFields: [
      { label: "radius r", key: "r", type: "number", placeholder: "5" },
    ],
    calculate: (inputs) => {
      const { r } = inputs;
      if (r === undefined) return "Enter radius";
      if (r < 0) return "Radius must be non-negative";
      return `A = ${(Math.PI * r * r).toFixed(4)}`;
    },
  },
  {
    id: "circumference-circle",
    category: "geometry",
    subcategory: "Perimeter",
    name: "Circumference of a Circle",
    formula: `C = 2πr`,
    description:
      "The perimeter (circumference) of a circle with radius r.",
    example: {
      problem: "Find the circumference of a circle with radius 7",
      steps: ["C = 2π(7)", "C = 14π", "C ≈ 43.98"],
    },
    interactiveFields: [
      { label: "radius r", key: "r", type: "number", placeholder: "7" },
    ],
    calculate: (inputs) => {
      const { r } = inputs;
      if (r === undefined) return "Enter radius";
      return `C = ${(2 * Math.PI * r).toFixed(4)}`;
    },
  },
  {
    id: "area-triangle",
    category: "geometry",
    subcategory: "Area",
    name: "Area of a Triangle",
    formula: `A = ½ · b · h`,
    description:
      "The area of a triangle with base b and height h.",
    example: {
      problem: "Find the area of a triangle with base 10 and height 6",
      steps: ["A = ½ · 10 · 6", "A = 30"],
    },
    interactiveFields: [
      { label: "base b", key: "b", type: "number", placeholder: "10" },
      { label: "height h", key: "h", type: "number", placeholder: "6" },
    ],
    calculate: (inputs) => {
      const { b, h } = inputs;
      if (b === undefined || h === undefined) return "Enter base and height";
      return `A = ${(0.5 * b * h).toFixed(4)}`;
    },
  },
  {
    id: "herons-formula",
    category: "geometry",
    subcategory: "Area",
    name: "Heron's Formula",
    formula: `A = √(s(s−a)(s−b)(s−c)), s = (a+b+c)/2`,
    description:
      "Calculates triangle area from its three side lengths using the semi-perimeter s.",
    example: {
      problem: "Find the area of a triangle with sides 3, 4, 5",
      steps: [
        "s = (3 + 4 + 5) / 2 = 6",
        "A = √(6 · 3 · 2 · 1) = √36 = 6",
      ],
    },
    interactiveFields: [
      { label: "side a", key: "a", type: "number", placeholder: "3" },
      { label: "side b", key: "b", type: "number", placeholder: "4" },
      { label: "side c", key: "c", type: "number", placeholder: "5" },
    ],
    calculate: (inputs) => {
      const { a, b, c } = inputs;
      if (a === undefined || b === undefined || c === undefined) return "Enter all sides";
      const s = (a + b + c) / 2;
      const val = s * (s - a) * (s - b) * (s - c);
      if (val < 0) return "Invalid triangle (sides don't satisfy triangle inequality)";
      return `A = ${Math.sqrt(val).toFixed(4)}`;
    },
  },
  {
    id: "area-rectangle",
    category: "geometry",
    subcategory: "Area",
    name: "Area of a Rectangle",
    formula: `A = l · w`,
    description: "The area of a rectangle with length l and width w.",
    example: {
      problem: "Find the area of a rectangle 8 × 5",
      steps: ["A = 8 · 5 = 40"],
    },
    interactiveFields: [
      { label: "length l", key: "l", type: "number", placeholder: "8" },
      { label: "width w", key: "w", type: "number", placeholder: "5" },
    ],
    calculate: (inputs) => {
      const { l, w } = inputs;
      if (l === undefined || w === undefined) return "Enter length and width";
      return `A = ${(l * w).toFixed(4)}`;
    },
  },
  {
    id: "perimeter-rectangle",
    category: "geometry",
    subcategory: "Perimeter",
    name: "Perimeter of a Rectangle",
    formula: `P = 2(l + w)`,
    description: "The perimeter of a rectangle with length l and width w.",
    example: {
      problem: "Find the perimeter of a rectangle 8 × 5",
      steps: ["P = 2(8 + 5) = 2(13) = 26"],
    },
    interactiveFields: [
      { label: "length l", key: "l", type: "number", placeholder: "8" },
      { label: "width w", key: "w", type: "number", placeholder: "5" },
    ],
    calculate: (inputs) => {
      const { l, w } = inputs;
      if (l === undefined || w === undefined) return "Enter length and width";
      return `P = ${(2 * (l + w)).toFixed(4)}`;
    },
  },
  {
    id: "area-parallelogram",
    category: "geometry",
    subcategory: "Area",
    name: "Area of a Parallelogram",
    formula: `A = b · h`,
    description: "The area of a parallelogram with base b and perpendicular height h.",
    example: {
      problem: "Find the area of a parallelogram with base 12 and height 7",
      steps: ["A = 12 · 7 = 84"],
    },
    interactiveFields: [
      { label: "base b", key: "b", type: "number", placeholder: "12" },
      { label: "height h", key: "h", type: "number", placeholder: "7" },
    ],
    calculate: (inputs) => {
      const { b, h } = inputs;
      if (b === undefined || h === undefined) return "Enter base and height";
      return `A = ${(b * h).toFixed(4)}`;
    },
  },
  {
    id: "area-trapezoid",
    category: "geometry",
    subcategory: "Area",
    name: "Area of a Trapezoid",
    formula: `A = ½(a + b) · h`,
    description:
      "The area of a trapezoid with parallel sides a and b, and height h.",
    example: {
      problem: "Find the area with bases 6 and 10, height 4",
      steps: ["A = ½(6 + 10) · 4", "A = ½ · 16 · 4 = 32"],
    },
    interactiveFields: [
      { label: "base a", key: "a", type: "number", placeholder: "6" },
      { label: "base b", key: "b", type: "number", placeholder: "10" },
      { label: "height h", key: "h", type: "number", placeholder: "4" },
    ],
    calculate: (inputs) => {
      const { a, b, h } = inputs;
      if (a === undefined || b === undefined || h === undefined) return "Enter all values";
      return `A = ${(0.5 * (a + b) * h).toFixed(4)}`;
    },
  },
  {
    id: "pythagorean-theorem",
    category: "geometry",
    subcategory: "Theorems",
    name: "Pythagorean Theorem",
    formula: `a² + b² = c²`,
    description:
      "In a right triangle, the square of the hypotenuse equals the sum of the squares of the other two sides.",
    example: {
      problem: "Find c when a = 3, b = 4",
      steps: ["c² = 3² + 4² = 9 + 16 = 25", "c = √25 = 5"],
    },
    interactiveFields: [
      { label: "side a", key: "a", type: "number", placeholder: "3" },
      { label: "side b", key: "b", type: "number", placeholder: "4" },
    ],
    calculate: (inputs) => {
      const { a, b } = inputs;
      if (a === undefined || b === undefined) return "Enter both sides";
      const c = Math.sqrt(a * a + b * b);
      return `c = ${c.toFixed(4)}`;
    },
  },
  {
    id: "volume-sphere",
    category: "geometry",
    subcategory: "Volume",
    name: "Volume of a Sphere",
    formula: `V = (4/3)πr³`,
    description: "The volume of a sphere with radius r.",
    example: {
      problem: "Find the volume of a sphere with radius 3",
      steps: ["V = (4/3)π(3)³", "V = (4/3)π(27)", "V = 36π ≈ 113.10"],
    },
    interactiveFields: [
      { label: "radius r", key: "r", type: "number", placeholder: "3" },
    ],
    calculate: (inputs) => {
      const { r } = inputs;
      if (r === undefined) return "Enter radius";
      return `V = ${((4 / 3) * Math.PI * r * r * r).toFixed(4)}`;
    },
  },
  {
    id: "surface-area-sphere",
    category: "geometry",
    subcategory: "Surface Area",
    name: "Surface Area of a Sphere",
    formula: `SA = 4πr²`,
    description: "The total surface area of a sphere with radius r.",
    example: {
      problem: "Find the surface area of a sphere with radius 3",
      steps: ["SA = 4π(3)² = 4π(9) = 36π ≈ 113.10"],
    },
    interactiveFields: [
      { label: "radius r", key: "r", type: "number", placeholder: "3" },
    ],
    calculate: (inputs) => {
      const { r } = inputs;
      if (r === undefined) return "Enter radius";
      return `SA = ${(4 * Math.PI * r * r).toFixed(4)}`;
    },
  },
  {
    id: "volume-cylinder",
    category: "geometry",
    subcategory: "Volume",
    name: "Volume of a Cylinder",
    formula: `V = πr²h`,
    description: "The volume of a cylinder with radius r and height h.",
    example: {
      problem: "Find the volume with r = 4, h = 10",
      steps: ["V = π(4)²(10)", "V = 160π ≈ 502.65"],
    },
    interactiveFields: [
      { label: "radius r", key: "r", type: "number", placeholder: "4" },
      { label: "height h", key: "h", type: "number", placeholder: "10" },
    ],
    calculate: (inputs) => {
      const { r, h } = inputs;
      if (r === undefined || h === undefined) return "Enter radius and height";
      return `V = ${(Math.PI * r * r * h).toFixed(4)}`;
    },
  },
  {
    id: "volume-cone",
    category: "geometry",
    subcategory: "Volume",
    name: "Volume of a Cone",
    formula: `V = (1/3)πr²h`,
    description: "The volume of a cone with base radius r and height h.",
    example: {
      problem: "Find the volume with r = 3, h = 7",
      steps: ["V = (1/3)π(3)²(7)", "V = (1/3)π(9)(7) = 21π ≈ 65.97"],
    },
    interactiveFields: [
      { label: "radius r", key: "r", type: "number", placeholder: "3" },
      { label: "height h", key: "h", type: "number", placeholder: "7" },
    ],
    calculate: (inputs) => {
      const { r, h } = inputs;
      if (r === undefined || h === undefined) return "Enter radius and height";
      return `V = ${((1 / 3) * Math.PI * r * r * h).toFixed(4)}`;
    },
  },
  {
    id: "volume-cube",
    category: "geometry",
    subcategory: "Volume",
    name: "Volume of a Cube",
    formula: `V = s³`,
    description: "The volume of a cube with side length s.",
    example: {
      problem: "Find the volume of a cube with side 4",
      steps: ["V = 4³ = 64"],
    },
    interactiveFields: [
      { label: "side s", key: "s", type: "number", placeholder: "4" },
    ],
    calculate: (inputs) => {
      const { s } = inputs;
      if (s === undefined) return "Enter side length";
      return `V = ${(s * s * s).toFixed(4)}`;
    },
  },
  {
    id: "volume-prism",
    category: "geometry",
    subcategory: "Volume",
    name: "Volume of a Rectangular Prism",
    formula: `V = l · w · h`,
    description: "The volume of a rectangular prism (box) with length, width, and height.",
    example: {
      problem: "Find the volume with l = 5, w = 3, h = 8",
      steps: ["V = 5 · 3 · 8 = 120"],
    },
    interactiveFields: [
      { label: "length l", key: "l", type: "number", placeholder: "5" },
      { label: "width w", key: "w", type: "number", placeholder: "3" },
      { label: "height h", key: "h", type: "number", placeholder: "8" },
    ],
    calculate: (inputs) => {
      const { l, w, h } = inputs;
      if (l === undefined || w === undefined || h === undefined) return "Enter all dimensions";
      return `V = ${(l * w * h).toFixed(4)}`;
    },
  },
  {
    id: "circle-arc-length",
    category: "geometry",
    subcategory: "Theorems",
    name: "Arc Length",
    formula: `s = rθ (θ in radians)`,
    description: "The length of an arc of a circle with radius r subtended by angle theta (in radians).",
    example: {
      problem: "Find the arc length with r = 10, θ = π/3",
      steps: ["s = 10 · π/3", "s = 10π/3 ≈ 10.47"],
    },
    interactiveFields: [
      { label: "radius r", key: "r", type: "number", placeholder: "10" },
      { label: "angle (deg)", key: "deg", type: "number", placeholder: "60" },
    ],
    calculate: (inputs) => {
      const { r, deg } = inputs;
      if (r === undefined || deg === undefined) return "Enter radius and angle";
      const theta = (deg * Math.PI) / 180;
      return `s = ${(r * theta).toFixed(4)}`;
    },
  },
  {
    id: "circle-sector-area",
    category: "geometry",
    subcategory: "Area",
    name: "Area of a Sector",
    formula: `A = ½r²θ (θ in radians)`,
    description: "The area of a sector of a circle with radius r and central angle theta.",
    example: {
      problem: "Find the sector area with r = 6, θ = 90°",
      steps: ["Convert 90° to radians: π/2", "A = ½(6)²(π/2) = 9π ≈ 28.27"],
    },
    interactiveFields: [
      { label: "radius r", key: "r", type: "number", placeholder: "6" },
      { label: "angle (deg)", key: "deg", type: "number", placeholder: "90" },
    ],
    calculate: (inputs) => {
      const { r, deg } = inputs;
      if (r === undefined || deg === undefined) return "Enter radius and angle";
      const theta = (deg * Math.PI) / 180;
      return `A = ${(0.5 * r * r * theta).toFixed(4)}`;
    },
  },
];
