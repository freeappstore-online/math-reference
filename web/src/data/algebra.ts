import type { Formula } from "./types";

export const algebraFormulas: Formula[] = [
  {
    id: "quadratic-formula",
    category: "algebra",
    subcategory: "Equations",
    name: "Quadratic Formula",
    formula: `x = (−b ± √(b² − 4ac)) / 2a`,
    description:
      "Solves any quadratic equation ax² + bx + c = 0 for x. The discriminant (b² − 4ac) determines whether roots are real or complex.",
    example: {
      problem: "Solve 2x² + 5x − 3 = 0",
      steps: [
        "Identify a = 2, b = 5, c = −3",
        "Discriminant: b² − 4ac = 25 − 4(2)(−3) = 25 + 24 = 49",
        "x = (−5 ± √49) / (2 · 2) = (−5 ± 7) / 4",
        "x₁ = (−5 + 7) / 4 = 1/2",
        "x₂ = (−5 − 7) / 4 = −3",
      ],
    },
    interactiveFields: [
      { label: "a", key: "a", type: "number", placeholder: "2" },
      { label: "b", key: "b", type: "number", placeholder: "5" },
      { label: "c", key: "c", type: "number", placeholder: "-3" },
    ],
    calculate: (inputs) => {
      const { a, b, c } = inputs;
      if (a === undefined || b === undefined || c === undefined) return "Enter all values";
      if (a === 0) return "a cannot be zero (not quadratic)";
      const disc = b * b - 4 * a * c;
      if (disc < 0) return `Complex roots: x = (${-b} ± ${Math.sqrt(-disc).toFixed(4)}i) / ${2 * a}`;
      const x1 = (-b + Math.sqrt(disc)) / (2 * a);
      const x2 = (-b - Math.sqrt(disc)) / (2 * a);
      if (disc === 0) return `Double root: x = ${x1.toFixed(4)}`;
      return `x₁ = ${x1.toFixed(4)}, x₂ = ${x2.toFixed(4)}`;
    },
  },
  {
    id: "completing-the-square",
    category: "algebra",
    subcategory: "Equations",
    name: "Completing the Square",
    formula: `ax² + bx + c = a(x + b/2a)² − b²/4a + c`,
    description:
      "Rewrites a quadratic expression in vertex form by adding and subtracting (b/2a)². Useful for finding the vertex of a parabola.",
    example: {
      problem: "Complete the square for x² + 6x + 2",
      steps: [
        "Half of 6 is 3, and 3² = 9",
        "x² + 6x + 9 − 9 + 2",
        "(x + 3)² − 7",
        "Vertex form: (x + 3)² − 7, vertex at (−3, −7)",
      ],
    },
    interactiveFields: [
      { label: "a", key: "a", type: "number", placeholder: "1" },
      { label: "b", key: "b", type: "number", placeholder: "6" },
      { label: "c", key: "c", type: "number", placeholder: "2" },
    ],
    calculate: (inputs) => {
      const { a, b, c } = inputs;
      if (a === undefined || b === undefined || c === undefined) return "Enter all values";
      if (a === 0) return "a cannot be zero";
      const h = -b / (2 * a);
      const k = c - (b * b) / (4 * a);
      return `${a === 1 ? "" : a}(x ${h >= 0 ? "−" : "+"} ${Math.abs(h).toFixed(2)})² ${k >= 0 ? "+" : "−"} ${Math.abs(k).toFixed(2)}`;
    },
  },
  {
    id: "difference-of-squares",
    category: "algebra",
    subcategory: "Factoring",
    name: "Difference of Squares",
    formula: `a² − b² = (a + b)(a − b)`,
    description:
      "Factors the difference of two perfect squares into a product of conjugate binomials.",
    example: {
      problem: "Factor x² − 16",
      steps: [
        "Recognize x² − 16 as a² − b² where a = x, b = 4",
        "Apply formula: (x + 4)(x − 4)",
      ],
    },
  },
  {
    id: "sum-of-cubes",
    category: "algebra",
    subcategory: "Factoring",
    name: "Sum of Cubes",
    formula: `a³ + b³ = (a + b)(a² − ab + b²)`,
    description:
      "Factors the sum of two cubes. Remember: Same, Opposite, Always Positive (SOAP).",
    example: {
      problem: "Factor x³ + 27",
      steps: [
        "Recognize x³ + 27 = x³ + 3³",
        "a = x, b = 3",
        "(x + 3)(x² − 3x + 9)",
      ],
    },
  },
  {
    id: "difference-of-cubes",
    category: "algebra",
    subcategory: "Factoring",
    name: "Difference of Cubes",
    formula: `a³ − b³ = (a − b)(a² + ab + b²)`,
    description:
      "Factors the difference of two cubes into a binomial times a trinomial.",
    example: {
      problem: "Factor 8x³ − 1",
      steps: [
        "Recognize 8x³ − 1 = (2x)³ − 1³",
        "a = 2x, b = 1",
        "(2x − 1)(4x² + 2x + 1)",
      ],
    },
  },
  {
    id: "product-rule-exponents",
    category: "algebra",
    subcategory: "Exponent Laws",
    name: "Product Rule",
    formula: `a<sup>m</sup> · a<sup>n</sup> = a<sup>m+n</sup>`,
    description:
      "When multiplying powers with the same base, add the exponents.",
    example: {
      problem: "Simplify x³ · x⁵",
      steps: ["Same base x, add exponents: 3 + 5 = 8", "x³ · x⁵ = x⁸"],
    },
  },
  {
    id: "quotient-rule-exponents",
    category: "algebra",
    subcategory: "Exponent Laws",
    name: "Quotient Rule",
    formula: `a<sup>m</sup> / a<sup>n</sup> = a<sup>m−n</sup>`,
    description:
      "When dividing powers with the same base, subtract the exponents.",
    example: {
      problem: "Simplify x⁷ / x²",
      steps: ["Same base x, subtract exponents: 7 − 2 = 5", "x⁷ / x² = x⁵"],
    },
  },
  {
    id: "power-rule-exponents",
    category: "algebra",
    subcategory: "Exponent Laws",
    name: "Power Rule",
    formula: `(a<sup>m</sup>)<sup>n</sup> = a<sup>mn</sup>`,
    description:
      "When raising a power to another power, multiply the exponents.",
    example: {
      problem: "Simplify (x³)⁴",
      steps: ["Multiply exponents: 3 × 4 = 12", "(x³)⁴ = x¹²"],
    },
  },
  {
    id: "zero-exponent",
    category: "algebra",
    subcategory: "Exponent Laws",
    name: "Zero Exponent",
    formula: `a<sup>0</sup> = 1 (a ≠ 0)`,
    description:
      "Any nonzero number raised to the power of zero equals 1.",
    example: {
      problem: "Evaluate 5⁰",
      steps: ["By the zero exponent rule, any nonzero base to the 0 power is 1", "5⁰ = 1"],
    },
  },
  {
    id: "negative-exponent",
    category: "algebra",
    subcategory: "Exponent Laws",
    name: "Negative Exponent",
    formula: `a<sup>−n</sup> = 1 / a<sup>n</sup>`,
    description:
      "A negative exponent means take the reciprocal and make the exponent positive.",
    example: {
      problem: "Simplify 2⁻³",
      steps: ["2⁻³ = 1 / 2³", "= 1 / 8 = 0.125"],
    },
  },
  {
    id: "log-product-rule",
    category: "algebra",
    subcategory: "Logarithm Rules",
    name: "Logarithm Product Rule",
    formula: `log<sub>b</sub>(xy) = log<sub>b</sub>(x) + log<sub>b</sub>(y)`,
    description:
      "The log of a product equals the sum of the logs.",
    example: {
      problem: "Expand log₂(8 · 4)",
      steps: ["log₂(8 · 4) = log₂(8) + log₂(4)", "= 3 + 2 = 5"],
    },
  },
  {
    id: "log-quotient-rule",
    category: "algebra",
    subcategory: "Logarithm Rules",
    name: "Logarithm Quotient Rule",
    formula: `log<sub>b</sub>(x/y) = log<sub>b</sub>(x) − log<sub>b</sub>(y)`,
    description:
      "The log of a quotient equals the difference of the logs.",
    example: {
      problem: "Expand log₃(27/9)",
      steps: ["log₃(27/9) = log₃(27) − log₃(9)", "= 3 − 2 = 1"],
    },
  },
  {
    id: "log-power-rule",
    category: "algebra",
    subcategory: "Logarithm Rules",
    name: "Logarithm Power Rule",
    formula: `log<sub>b</sub>(x<sup>n</sup>) = n · log<sub>b</sub>(x)`,
    description:
      "The log of a power equals the exponent times the log of the base.",
    example: {
      problem: "Simplify log₂(8³)",
      steps: ["log₂(8³) = 3 · log₂(8)", "= 3 · 3 = 9"],
    },
  },
  {
    id: "change-of-base",
    category: "algebra",
    subcategory: "Logarithm Rules",
    name: "Change of Base Formula",
    formula: `log<sub>b</sub>(x) = ln(x) / ln(b)`,
    description:
      "Convert a logarithm of any base to natural log (or any other base) for calculation.",
    example: {
      problem: "Calculate log₅(20)",
      steps: [
        "log₅(20) = ln(20) / ln(5)",
        "≈ 2.9957 / 1.6094",
        "≈ 1.8614",
      ],
    },
    interactiveFields: [
      { label: "base b", key: "b", type: "number", placeholder: "5" },
      { label: "value x", key: "x", type: "number", placeholder: "20" },
    ],
    calculate: (inputs) => {
      const { b, x } = inputs;
      if (b === undefined || x === undefined) return "Enter both values";
      if (b <= 0 || b === 1) return "Base must be positive and not 1";
      if (x <= 0) return "x must be positive";
      return `log_${b}(${x}) = ${(Math.log(x) / Math.log(b)).toFixed(6)}`;
    },
  },
  {
    id: "polynomial-long-division",
    category: "algebra",
    subcategory: "Polynomials",
    name: "Polynomial Long Division",
    formula: `f(x) = d(x) · q(x) + r(x)`,
    description:
      "Divide polynomial f(x) by divisor d(x) to get quotient q(x) and remainder r(x). Degree of r(x) < degree of d(x).",
    example: {
      problem: "Divide x³ + 2x² − 5x + 3 by x − 1",
      steps: [
        "x³ ÷ x = x². Multiply: x²(x − 1) = x³ − x²",
        "Subtract: (x³ + 2x² − 5x + 3) − (x³ − x²) = 3x² − 5x + 3",
        "3x² ÷ x = 3x. Multiply: 3x(x − 1) = 3x² − 3x",
        "Subtract: (3x² − 5x + 3) − (3x² − 3x) = −2x + 3",
        "−2x ÷ x = −2. Multiply: −2(x − 1) = −2x + 2",
        "Subtract: (−2x + 3) − (−2x + 2) = 1",
        "Result: x² + 3x − 2 remainder 1",
      ],
    },
  },
  {
    id: "binomial-theorem",
    category: "algebra",
    subcategory: "Polynomials",
    name: "Binomial Theorem",
    formula: `(a + b)<sup>n</sup> = Σ C(n,k) · a<sup>n−k</sup> · b<sup>k</sup>`,
    description:
      "Expands any binomial raised to a positive integer power using binomial coefficients C(n,k).",
    example: {
      problem: "Expand (x + 2)³",
      steps: [
        "C(3,0)x³·2⁰ + C(3,1)x²·2¹ + C(3,2)x¹·2² + C(3,3)x⁰·2³",
        "= 1·x³·1 + 3·x²·2 + 3·x·4 + 1·1·8",
        "= x³ + 6x² + 12x + 8",
      ],
    },
    interactiveFields: [
      { label: "n (power)", key: "n", type: "number", placeholder: "3" },
    ],
    calculate: (inputs) => {
      const { n } = inputs;
      if (n === undefined) return "Enter a value for n";
      if (n < 0 || n > 10 || !Number.isInteger(n)) return "n must be integer 0-10";
      const binom = (nn: number, kk: number): number => {
        if (kk === 0 || kk === nn) return 1;
        let result = 1;
        for (let i = 0; i < kk; i++) {
          result = result * (nn - i) / (i + 1);
        }
        return result;
      };
      const terms: string[] = [];
      for (let k = 0; k <= n; k++) {
        const coeff = binom(n, k);
        const aPow = n - k;
        const bPow = k;
        let term = coeff === 1 ? "" : String(coeff);
        if (aPow > 0) term += aPow === 1 ? "a" : `a^${aPow}`;
        if (bPow > 0) term += bPow === 1 ? "b" : `b^${bPow}`;
        if (term === "") term = "1";
        terms.push(term);
      }
      return terms.join(" + ");
    },
  },
];
