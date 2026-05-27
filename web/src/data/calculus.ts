import type { Formula } from "./types";

export const calculusFormulas: Formula[] = [
  {
    id: "power-rule-derivative",
    category: "calculus",
    subcategory: "Derivative Rules",
    name: "Power Rule",
    formula: `d/dx [x<sup>n</sup>] = n · x<sup>n−1</sup>`,
    description:
      "The most fundamental derivative rule. Multiply by the exponent, then decrease the exponent by 1.",
    example: {
      problem: "Find d/dx [x⁵]",
      steps: ["Apply power rule: n = 5", "d/dx [x⁵] = 5x⁴"],
    },
    interactiveFields: [
      { label: "exponent n", key: "n", type: "number", placeholder: "5" },
    ],
    calculate: (inputs) => {
      const { n } = inputs;
      if (n === undefined) return "Enter exponent";
      if (n === 1) return "d/dx [x] = 1";
      if (n === 0) return "d/dx [1] = 0";
      return `d/dx [x^${n}] = ${n}x^${n - 1}`;
    },
  },
  {
    id: "product-rule",
    category: "calculus",
    subcategory: "Derivative Rules",
    name: "Product Rule",
    formula: `d/dx [f · g] = f' · g + f · g'`,
    description:
      'Derivative of a product: "first times derivative of second plus second times derivative of first."',
    example: {
      problem: "Find d/dx [x² · sin(x)]",
      steps: [
        "f = x², g = sin(x)",
        "f' = 2x, g' = cos(x)",
        "d/dx = 2x · sin(x) + x² · cos(x)",
      ],
    },
  },
  {
    id: "quotient-rule",
    category: "calculus",
    subcategory: "Derivative Rules",
    name: "Quotient Rule",
    formula: `d/dx [f/g] = (f'g − fg') / g²`,
    description:
      '"Low d-high minus high d-low, all over the square of what\'s below."',
    example: {
      problem: "Find d/dx [x²/sin(x)]",
      steps: [
        "f = x², g = sin(x)",
        "f' = 2x, g' = cos(x)",
        "= (2x · sin(x) − x² · cos(x)) / sin²(x)",
      ],
    },
  },
  {
    id: "chain-rule",
    category: "calculus",
    subcategory: "Derivative Rules",
    name: "Chain Rule",
    formula: `d/dx [f(g(x))] = f'(g(x)) · g'(x)`,
    description:
      "For composite functions: take the outer derivative evaluated at the inner, then multiply by the inner derivative.",
    example: {
      problem: "Find d/dx [sin(x²)]",
      steps: [
        "Outer: sin(u), inner: u = x²",
        "Outer derivative: cos(u) = cos(x²)",
        "Inner derivative: 2x",
        "d/dx [sin(x²)] = cos(x²) · 2x = 2x cos(x²)",
      ],
    },
  },
  {
    id: "derivative-sin",
    category: "calculus",
    subcategory: "Common Derivatives",
    name: "Derivative of sin(x)",
    formula: `d/dx [sin(x)] = cos(x)`,
    description: "The derivative of sine is cosine.",
    example: {
      problem: "Find d/dx [3 sin(x)]",
      steps: ["= 3 · d/dx [sin(x)]", "= 3 cos(x)"],
    },
  },
  {
    id: "derivative-cos",
    category: "calculus",
    subcategory: "Common Derivatives",
    name: "Derivative of cos(x)",
    formula: `d/dx [cos(x)] = −sin(x)`,
    description: "The derivative of cosine is negative sine.",
    example: {
      problem: "Find d/dx [2 cos(x)]",
      steps: ["= 2 · d/dx [cos(x)]", "= −2 sin(x)"],
    },
  },
  {
    id: "derivative-tan",
    category: "calculus",
    subcategory: "Common Derivatives",
    name: "Derivative of tan(x)",
    formula: `d/dx [tan(x)] = sec²(x)`,
    description: "The derivative of tangent is secant squared.",
    example: {
      problem: "Find d/dx [tan(3x)]",
      steps: ["By chain rule: sec²(3x) · 3", "= 3 sec²(3x)"],
    },
  },
  {
    id: "derivative-exp",
    category: "calculus",
    subcategory: "Common Derivatives",
    name: "Derivative of e<sup>x</sup>",
    formula: `d/dx [e<sup>x</sup>] = e<sup>x</sup>`,
    description: "The exponential function is its own derivative.",
    example: {
      problem: "Find d/dx [5e<sup>x</sup>]",
      steps: ["= 5 · d/dx [e^x]", "= 5e^x"],
    },
  },
  {
    id: "derivative-ln",
    category: "calculus",
    subcategory: "Common Derivatives",
    name: "Derivative of ln(x)",
    formula: `d/dx [ln(x)] = 1/x`,
    description: "The derivative of the natural logarithm is 1/x.",
    example: {
      problem: "Find d/dx [ln(3x)]",
      steps: ["By chain rule: (1/3x) · 3", "= 1/x"],
    },
  },
  {
    id: "power-rule-integral",
    category: "calculus",
    subcategory: "Integral Rules",
    name: "Power Rule (Integration)",
    formula: `∫ x<sup>n</sup> dx = x<sup>n+1</sup>/(n+1) + C (n ≠ −1)`,
    description:
      "The reverse of the power rule for derivatives. Add 1 to the exponent and divide by the new exponent.",
    example: {
      problem: "Find ∫ x³ dx",
      steps: ["∫ x³ dx = x⁴/4 + C"],
    },
    interactiveFields: [
      { label: "exponent n", key: "n", type: "number", placeholder: "3" },
    ],
    calculate: (inputs) => {
      const { n } = inputs;
      if (n === undefined) return "Enter exponent";
      if (n === -1) return "∫ x^(-1) dx = ln|x| + C";
      return `∫ x^${n} dx = x^${n + 1}/${n + 1} + C`;
    },
  },
  {
    id: "integral-sin",
    category: "calculus",
    subcategory: "Common Integrals",
    name: "Integral of sin(x)",
    formula: `∫ sin(x) dx = −cos(x) + C`,
    description: "The antiderivative of sine is negative cosine.",
    example: {
      problem: "Find ∫ sin(x) dx from 0 to π",
      steps: ["= [−cos(x)] from 0 to π", "= −cos(π) − (−cos(0))", "= 1 + 1 = 2"],
    },
  },
  {
    id: "integral-cos",
    category: "calculus",
    subcategory: "Common Integrals",
    name: "Integral of cos(x)",
    formula: `∫ cos(x) dx = sin(x) + C`,
    description: "The antiderivative of cosine is sine.",
    example: {
      problem: "Find ∫ cos(x) dx from 0 to π/2",
      steps: ["= [sin(x)] from 0 to π/2", "= sin(π/2) − sin(0)", "= 1 − 0 = 1"],
    },
  },
  {
    id: "integral-exp",
    category: "calculus",
    subcategory: "Common Integrals",
    name: "Integral of e<sup>x</sup>",
    formula: `∫ e<sup>x</sup> dx = e<sup>x</sup> + C`,
    description: "The exponential function is its own antiderivative.",
    example: {
      problem: "Find ∫ e^x dx from 0 to 1",
      steps: ["= [e^x] from 0 to 1", "= e¹ − e⁰", "= e − 1 ≈ 1.7183"],
    },
  },
  {
    id: "integral-1-over-x",
    category: "calculus",
    subcategory: "Common Integrals",
    name: "Integral of 1/x",
    formula: `∫ (1/x) dx = ln|x| + C`,
    description: "The antiderivative of 1/x is the natural logarithm of the absolute value of x.",
    example: {
      problem: "Find ∫ (1/x) dx from 1 to e",
      steps: ["= [ln|x|] from 1 to e", "= ln(e) − ln(1)", "= 1 − 0 = 1"],
    },
  },
  {
    id: "fundamental-theorem",
    category: "calculus",
    subcategory: "Theorems",
    name: "Fundamental Theorem of Calculus",
    formula: `∫<sub>a</sub><sup>b</sup> f(x) dx = F(b) − F(a)`,
    description:
      "If F is an antiderivative of f, the definite integral from a to b equals F(b) minus F(a). Links differentiation and integration.",
    example: {
      problem: "Evaluate ∫₀² x² dx",
      steps: [
        "F(x) = x³/3",
        "F(2) − F(0) = 8/3 − 0 = 8/3 ≈ 2.667",
      ],
    },
  },
  {
    id: "limit-definition",
    category: "calculus",
    subcategory: "Limits",
    name: "Limit Definition of Derivative",
    formula: `f'(x) = lim<sub>h→0</sub> [f(x+h) − f(x)] / h`,
    description:
      "The formal definition of the derivative as the limit of the difference quotient.",
    example: {
      problem: "Find f'(x) for f(x) = x² using the limit",
      steps: [
        "lim [((x+h)² − x²) / h]",
        "= lim [(x² + 2xh + h² − x²) / h]",
        "= lim [(2xh + h²) / h]",
        "= lim [2x + h] = 2x",
      ],
    },
  },
  {
    id: "lhopitals-rule",
    category: "calculus",
    subcategory: "Limits",
    name: "L'Hopital's Rule",
    formula: `lim f(x)/g(x) = lim f'(x)/g'(x)`,
    description:
      "When a limit gives 0/0 or ∞/∞, take the derivative of top and bottom separately and re-evaluate.",
    example: {
      problem: "Find lim(x→0) sin(x)/x",
      steps: [
        "Direct substitution gives 0/0 (indeterminate)",
        "Apply L'Hopital: lim cos(x)/1",
        "= cos(0)/1 = 1",
      ],
    },
  },
  {
    id: "integration-by-parts",
    category: "calculus",
    subcategory: "Integral Rules",
    name: "Integration by Parts",
    formula: `∫ u dv = uv − ∫ v du`,
    description:
      "The integration counterpart of the product rule. Choose u (to differentiate) and dv (to integrate) using LIATE.",
    example: {
      problem: "Find ∫ x · e^x dx",
      steps: [
        "Let u = x, dv = e^x dx",
        "du = dx, v = e^x",
        "∫ x · e^x dx = x · e^x − ∫ e^x dx",
        "= x · e^x − e^x + C = e^x(x − 1) + C",
      ],
    },
  },
  {
    id: "u-substitution",
    category: "calculus",
    subcategory: "Integral Rules",
    name: "U-Substitution",
    formula: `∫ f(g(x)) · g'(x) dx = ∫ f(u) du`,
    description:
      "The integration counterpart of the chain rule. Substitute u = g(x) to simplify the integral.",
    example: {
      problem: "Find ∫ 2x · cos(x²) dx",
      steps: [
        "Let u = x², du = 2x dx",
        "∫ cos(u) du = sin(u) + C",
        "= sin(x²) + C",
      ],
    },
  },
];
