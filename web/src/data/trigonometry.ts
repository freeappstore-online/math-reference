import type { Formula } from "./types";

export const trigonometryFormulas: Formula[] = [
  {
    id: "sin-definition",
    category: "trigonometry",
    subcategory: "Definitions",
    name: "Sine (SOH)",
    formula: `sin(θ) = opposite / hypotenuse`,
    description:
      "In a right triangle, sine is the ratio of the side opposite the angle to the hypotenuse.",
    example: {
      problem: "Find sin(θ) if opposite = 3, hypotenuse = 5",
      steps: ["sin(θ) = 3/5 = 0.6", "θ = arcsin(0.6) ≈ 36.87°"],
    },
    interactiveFields: [
      { label: "opposite", key: "opp", type: "number", placeholder: "3" },
      { label: "hypotenuse", key: "hyp", type: "number", placeholder: "5" },
    ],
    calculate: (inputs) => {
      const { opp, hyp } = inputs;
      if (opp === undefined || hyp === undefined) return "Enter both values";
      if (hyp === 0) return "Hypotenuse cannot be zero";
      const val = opp / hyp;
      const angle = Math.asin(Math.min(1, Math.max(-1, val))) * (180 / Math.PI);
      return `sin(θ) = ${val.toFixed(4)}, θ ≈ ${angle.toFixed(2)}°`;
    },
  },
  {
    id: "cos-definition",
    category: "trigonometry",
    subcategory: "Definitions",
    name: "Cosine (CAH)",
    formula: `cos(θ) = adjacent / hypotenuse`,
    description:
      "In a right triangle, cosine is the ratio of the adjacent side to the hypotenuse.",
    example: {
      problem: "Find cos(θ) if adjacent = 4, hypotenuse = 5",
      steps: ["cos(θ) = 4/5 = 0.8", "θ = arccos(0.8) ≈ 36.87°"],
    },
    interactiveFields: [
      { label: "adjacent", key: "adj", type: "number", placeholder: "4" },
      { label: "hypotenuse", key: "hyp", type: "number", placeholder: "5" },
    ],
    calculate: (inputs) => {
      const { adj, hyp } = inputs;
      if (adj === undefined || hyp === undefined) return "Enter both values";
      if (hyp === 0) return "Hypotenuse cannot be zero";
      const val = adj / hyp;
      const angle = Math.acos(Math.min(1, Math.max(-1, val))) * (180 / Math.PI);
      return `cos(θ) = ${val.toFixed(4)}, θ ≈ ${angle.toFixed(2)}°`;
    },
  },
  {
    id: "tan-definition",
    category: "trigonometry",
    subcategory: "Definitions",
    name: "Tangent (TOA)",
    formula: `tan(θ) = opposite / adjacent`,
    description:
      "In a right triangle, tangent is the ratio of the opposite side to the adjacent side.",
    example: {
      problem: "Find tan(θ) if opposite = 3, adjacent = 4",
      steps: ["tan(θ) = 3/4 = 0.75", "θ = arctan(0.75) ≈ 36.87°"],
    },
    interactiveFields: [
      { label: "opposite", key: "opp", type: "number", placeholder: "3" },
      { label: "adjacent", key: "adj", type: "number", placeholder: "4" },
    ],
    calculate: (inputs) => {
      const { opp, adj } = inputs;
      if (opp === undefined || adj === undefined) return "Enter both values";
      if (adj === 0) return "Adjacent cannot be zero (tan undefined at 90°)";
      const val = opp / adj;
      const angle = Math.atan(val) * (180 / Math.PI);
      return `tan(θ) = ${val.toFixed(4)}, θ ≈ ${angle.toFixed(2)}°`;
    },
  },
  {
    id: "pythagorean-identity",
    category: "trigonometry",
    subcategory: "Identities",
    name: "Pythagorean Identity",
    formula: `sin²(θ) + cos²(θ) = 1`,
    description:
      "The fundamental trigonometric identity. Follows directly from the Pythagorean theorem applied to the unit circle.",
    example: {
      problem: "Verify for θ = 30°",
      steps: [
        "sin(30°) = 1/2, cos(30°) = √3/2",
        "(1/2)² + (√3/2)² = 1/4 + 3/4 = 1",
      ],
    },
    interactiveFields: [
      { label: "angle (deg)", key: "deg", type: "number", placeholder: "30" },
    ],
    calculate: (inputs) => {
      const { deg } = inputs;
      if (deg === undefined) return "Enter an angle";
      const rad = (deg * Math.PI) / 180;
      const s = Math.sin(rad);
      const c = Math.cos(rad);
      return `sin²(${deg}°) + cos²(${deg}°) = ${(s * s).toFixed(6)} + ${(c * c).toFixed(6)} = ${(s * s + c * c).toFixed(6)}`;
    },
  },
  {
    id: "tan-identity",
    category: "trigonometry",
    subcategory: "Identities",
    name: "Tangent Identity",
    formula: `1 + tan²(θ) = sec²(θ)`,
    description:
      "Derived from dividing the Pythagorean identity by cos²(θ).",
    example: {
      problem: "Verify for θ = 45°",
      steps: [
        "tan(45°) = 1, sec(45°) = √2",
        "1 + 1² = 2 and (√2)² = 2",
      ],
    },
  },
  {
    id: "cot-identity",
    category: "trigonometry",
    subcategory: "Identities",
    name: "Cotangent Identity",
    formula: `1 + cot²(θ) = csc²(θ)`,
    description:
      "Derived from dividing the Pythagorean identity by sin²(θ).",
    example: {
      problem: "Verify for θ = 60°",
      steps: [
        "cot(60°) = 1/√3, csc(60°) = 2/√3",
        "1 + 1/3 = 4/3 and (2/√3)² = 4/3",
      ],
    },
  },
  {
    id: "double-angle-sin",
    category: "trigonometry",
    subcategory: "Double Angle",
    name: "Double Angle (Sine)",
    formula: `sin(2θ) = 2 sin(θ) cos(θ)`,
    description:
      "Expresses the sine of twice an angle in terms of sine and cosine of the original angle.",
    example: {
      problem: "Find sin(60°) using double angle",
      steps: [
        "sin(60°) = sin(2 · 30°) = 2 sin(30°) cos(30°)",
        "= 2 · (1/2) · (√3/2) = √3/2 ≈ 0.866",
      ],
    },
    interactiveFields: [
      { label: "θ (deg)", key: "deg", type: "number", placeholder: "30" },
    ],
    calculate: (inputs) => {
      const { deg } = inputs;
      if (deg === undefined) return "Enter an angle";
      const rad = (deg * Math.PI) / 180;
      const result = 2 * Math.sin(rad) * Math.cos(rad);
      return `sin(${2 * deg}°) = ${result.toFixed(6)}`;
    },
  },
  {
    id: "double-angle-cos",
    category: "trigonometry",
    subcategory: "Double Angle",
    name: "Double Angle (Cosine)",
    formula: `cos(2θ) = cos²(θ) − sin²(θ)`,
    description:
      "Also equals 2cos²(θ) − 1 or 1 − 2sin²(θ). Three equivalent forms.",
    example: {
      problem: "Find cos(60°) using double angle",
      steps: [
        "cos(60°) = cos(2 · 30°) = cos²(30°) − sin²(30°)",
        "= (√3/2)² − (1/2)² = 3/4 − 1/4 = 1/2",
      ],
    },
    interactiveFields: [
      { label: "θ (deg)", key: "deg", type: "number", placeholder: "30" },
    ],
    calculate: (inputs) => {
      const { deg } = inputs;
      if (deg === undefined) return "Enter an angle";
      const rad = (deg * Math.PI) / 180;
      const c = Math.cos(rad);
      const s = Math.sin(rad);
      return `cos(${2 * deg}°) = ${(c * c - s * s).toFixed(6)}`;
    },
  },
  {
    id: "half-angle-sin",
    category: "trigonometry",
    subcategory: "Half Angle",
    name: "Half Angle (Sine)",
    formula: `sin(θ/2) = ±√((1 − cos θ) / 2)`,
    description:
      "The sign depends on the quadrant of θ/2.",
    example: {
      problem: "Find sin(15°)",
      steps: [
        "sin(15°) = sin(30°/2) = √((1 − cos 30°) / 2)",
        "= √((1 − √3/2) / 2) ≈ √(0.0670) ≈ 0.2588",
      ],
    },
  },
  {
    id: "half-angle-cos",
    category: "trigonometry",
    subcategory: "Half Angle",
    name: "Half Angle (Cosine)",
    formula: `cos(θ/2) = ±√((1 + cos θ) / 2)`,
    description: "The sign depends on the quadrant of θ/2.",
    example: {
      problem: "Find cos(15°)",
      steps: [
        "cos(15°) = cos(30°/2) = √((1 + cos 30°) / 2)",
        "= √((1 + √3/2) / 2) ≈ √(0.9330) ≈ 0.9659",
      ],
    },
  },
  {
    id: "sum-sin",
    category: "trigonometry",
    subcategory: "Sum/Difference",
    name: "Sum Formula (Sine)",
    formula: `sin(A ± B) = sin A cos B ± cos A sin B`,
    description:
      "Expands the sine of a sum or difference of two angles.",
    example: {
      problem: "Find sin(75°)",
      steps: [
        "sin(75°) = sin(45° + 30°)",
        "= sin 45° cos 30° + cos 45° sin 30°",
        "= (√2/2)(√3/2) + (√2/2)(1/2)",
        "= (√6 + √2) / 4 ≈ 0.9659",
      ],
    },
  },
  {
    id: "sum-cos",
    category: "trigonometry",
    subcategory: "Sum/Difference",
    name: "Sum Formula (Cosine)",
    formula: `cos(A ± B) = cos A cos B ∓ sin A sin B`,
    description:
      "Expands the cosine of a sum or difference. Note the sign flips.",
    example: {
      problem: "Find cos(75°)",
      steps: [
        "cos(75°) = cos(45° + 30°)",
        "= cos 45° cos 30° − sin 45° sin 30°",
        "= (√2/2)(√3/2) − (√2/2)(1/2)",
        "= (√6 − √2) / 4 ≈ 0.2588",
      ],
    },
  },
  {
    id: "product-to-sum",
    category: "trigonometry",
    subcategory: "Product-to-Sum",
    name: "Product-to-Sum (sin · sin)",
    formula: `sin A · sin B = ½[cos(A−B) − cos(A+B)]`,
    description:
      "Converts a product of sines into a sum of cosines.",
    example: {
      problem: "Express sin(3x) · sin(x) as a sum",
      steps: [
        "½[cos(3x − x) − cos(3x + x)]",
        "= ½[cos(2x) − cos(4x)]",
      ],
    },
  },
  {
    id: "law-of-sines",
    category: "trigonometry",
    subcategory: "Triangle Laws",
    name: "Law of Sines",
    formula: `a/sin A = b/sin B = c/sin C`,
    description:
      "Relates sides of any triangle to the sines of their opposite angles. Used when you know AAS, ASA, or SSA.",
    example: {
      problem: "Find b if a = 10, A = 30°, B = 45°",
      steps: [
        "a/sin A = b/sin B",
        "10/sin 30° = b/sin 45°",
        "10/0.5 = b/0.7071",
        "b = 20 · 0.7071 ≈ 14.14",
      ],
    },
    interactiveFields: [
      { label: "side a", key: "a", type: "number", placeholder: "10" },
      { label: "angle A (deg)", key: "A", type: "number", placeholder: "30" },
      { label: "angle B (deg)", key: "B", type: "number", placeholder: "45" },
    ],
    calculate: (inputs) => {
      const { a, A, B } = inputs;
      if (a === undefined || A === undefined || B === undefined) return "Enter all values";
      const radA = (A * Math.PI) / 180;
      const radB = (B * Math.PI) / 180;
      const sinA = Math.sin(radA);
      if (sinA === 0) return "sin(A) is zero";
      const b = (a * Math.sin(radB)) / sinA;
      return `b = ${b.toFixed(4)}`;
    },
  },
  {
    id: "law-of-cosines",
    category: "trigonometry",
    subcategory: "Triangle Laws",
    name: "Law of Cosines",
    formula: `c² = a² + b² − 2ab cos(C)`,
    description:
      "Generalizes the Pythagorean theorem to any triangle. Used when you know SAS or SSS.",
    example: {
      problem: "Find c if a = 5, b = 7, C = 60°",
      steps: [
        "c² = 25 + 49 − 2(5)(7)cos(60°)",
        "c² = 74 − 70(0.5) = 74 − 35 = 39",
        "c = √39 ≈ 6.245",
      ],
    },
    interactiveFields: [
      { label: "side a", key: "a", type: "number", placeholder: "5" },
      { label: "side b", key: "b", type: "number", placeholder: "7" },
      { label: "angle C (deg)", key: "C", type: "number", placeholder: "60" },
    ],
    calculate: (inputs) => {
      const { a, b, C } = inputs;
      if (a === undefined || b === undefined || C === undefined) return "Enter all values";
      const radC = (C * Math.PI) / 180;
      const cSq = a * a + b * b - 2 * a * b * Math.cos(radC);
      if (cSq < 0) return "Invalid (negative c²)";
      return `c = ${Math.sqrt(cSq).toFixed(4)}`;
    },
  },
  {
    id: "unit-circle",
    category: "trigonometry",
    subcategory: "Definitions",
    name: "Unit Circle",
    formula: `(cos θ, sin θ) on x² + y² = 1`,
    description:
      "A circle of radius 1 centered at the origin. Any point on it is (cos θ, sin θ) where θ is the angle from the positive x-axis.",
    example: {
      problem: "Find coordinates at θ = π/4 (45°)",
      steps: [
        "cos(π/4) = √2/2 ≈ 0.7071",
        "sin(π/4) = √2/2 ≈ 0.7071",
        "Point: (0.7071, 0.7071)",
      ],
    },
    interactiveFields: [
      { label: "angle (deg)", key: "deg", type: "number", placeholder: "45" },
    ],
    calculate: (inputs) => {
      const { deg } = inputs;
      if (deg === undefined) return "Enter an angle";
      const rad = (deg * Math.PI) / 180;
      return `(${Math.cos(rad).toFixed(4)}, ${Math.sin(rad).toFixed(4)})`;
    },
  },
  {
    id: "inverse-sin",
    category: "trigonometry",
    subcategory: "Inverse Trig",
    name: "Inverse Sine (arcsin)",
    formula: `θ = arcsin(x), domain: −1 ≤ x ≤ 1`,
    description:
      "Returns the angle whose sine is x. Range: [−π/2, π/2] or [−90°, 90°].",
    example: {
      problem: "Find arcsin(0.5)",
      steps: ["arcsin(0.5) = π/6 = 30°"],
    },
    interactiveFields: [
      { label: "x value", key: "x", type: "number", placeholder: "0.5" },
    ],
    calculate: (inputs) => {
      const { x } = inputs;
      if (x === undefined) return "Enter a value";
      if (x < -1 || x > 1) return "x must be between -1 and 1";
      const rad = Math.asin(x);
      return `arcsin(${x}) = ${rad.toFixed(4)} rad = ${(rad * 180 / Math.PI).toFixed(2)}°`;
    },
  },
  {
    id: "inverse-cos",
    category: "trigonometry",
    subcategory: "Inverse Trig",
    name: "Inverse Cosine (arccos)",
    formula: `θ = arccos(x), domain: −1 ≤ x ≤ 1`,
    description:
      "Returns the angle whose cosine is x. Range: [0, π] or [0°, 180°].",
    example: {
      problem: "Find arccos(0)",
      steps: ["arccos(0) = π/2 = 90°"],
    },
    interactiveFields: [
      { label: "x value", key: "x", type: "number", placeholder: "0" },
    ],
    calculate: (inputs) => {
      const { x } = inputs;
      if (x === undefined) return "Enter a value";
      if (x < -1 || x > 1) return "x must be between -1 and 1";
      const rad = Math.acos(x);
      return `arccos(${x}) = ${rad.toFixed(4)} rad = ${(rad * 180 / Math.PI).toFixed(2)}°`;
    },
  },
  {
    id: "inverse-tan",
    category: "trigonometry",
    subcategory: "Inverse Trig",
    name: "Inverse Tangent (arctan)",
    formula: `θ = arctan(x), domain: all reals`,
    description:
      "Returns the angle whose tangent is x. Range: (−π/2, π/2) or (−90°, 90°).",
    example: {
      problem: "Find arctan(1)",
      steps: ["arctan(1) = π/4 = 45°"],
    },
    interactiveFields: [
      { label: "x value", key: "x", type: "number", placeholder: "1" },
    ],
    calculate: (inputs) => {
      const { x } = inputs;
      if (x === undefined) return "Enter a value";
      const rad = Math.atan(x);
      return `arctan(${x}) = ${rad.toFixed(4)} rad = ${(rad * 180 / Math.PI).toFixed(2)}°`;
    },
  },
];
