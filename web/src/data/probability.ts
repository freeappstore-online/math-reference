import type { Formula } from "./types";

export const probabilityFormulas: Formula[] = [
  {
    id: "permutations",
    category: "probability",
    subcategory: "Counting",
    name: "Permutations",
    formula: `P(n, r) = n! / (n − r)!`,
    description:
      "The number of ways to arrange r items from n distinct items where order matters.",
    example: {
      problem: "How many ways to arrange 3 letters from {A,B,C,D,E}?",
      steps: ["P(5, 3) = 5! / 2! = 120 / 2 = 60"],
    },
    interactiveFields: [
      { label: "n", key: "n", type: "number", placeholder: "5" },
      { label: "r", key: "r", type: "number", placeholder: "3" },
    ],
    calculate: (inputs) => {
      const { n, r } = inputs;
      if (n === undefined || r === undefined) return "Enter n and r";
      if (r > n) return "r cannot exceed n";
      if (n < 0 || r < 0) return "Values must be non-negative";
      const fact = (x: number): number => { let f = 1; for (let i = 2; i <= x; i++) f *= i; return f; };
      return `P(${n}, ${r}) = ${fact(n) / fact(n - r)}`;
    },
  },
  {
    id: "combinations",
    category: "probability",
    subcategory: "Counting",
    name: "Combinations",
    formula: `C(n, r) = n! / (r!(n − r)!)`,
    description:
      "The number of ways to choose r items from n distinct items where order does not matter.",
    example: {
      problem: "How many 3-card hands from a 5-card set?",
      steps: ["C(5, 3) = 5! / (3! · 2!) = 120 / 12 = 10"],
    },
    interactiveFields: [
      { label: "n", key: "n", type: "number", placeholder: "5" },
      { label: "r", key: "r", type: "number", placeholder: "3" },
    ],
    calculate: (inputs) => {
      const { n, r } = inputs;
      if (n === undefined || r === undefined) return "Enter n and r";
      if (r > n) return "r cannot exceed n";
      if (n < 0 || r < 0) return "Values must be non-negative";
      const fact = (x: number): number => { let f = 1; for (let i = 2; i <= x; i++) f *= i; return f; };
      return `C(${n}, ${r}) = ${fact(n) / (fact(r) * fact(n - r))}`;
    },
  },
  {
    id: "bayes-theorem",
    category: "probability",
    subcategory: "Conditional Probability",
    name: "Bayes' Theorem",
    formula: `P(A|B) = P(B|A) · P(A) / P(B)`,
    description:
      "Updates the probability of A given new evidence B. Fundamental to statistical inference and machine learning.",
    example: {
      problem: "A test is 99% accurate. Disease prevalence is 1%. If positive, what's P(disease)?",
      steps: [
        "P(D) = 0.01, P(+|D) = 0.99, P(+|no D) = 0.01",
        "P(+) = P(+|D)P(D) + P(+|no D)P(no D)",
        "= 0.99 · 0.01 + 0.01 · 0.99 = 0.0099 + 0.0099 = 0.0198",
        "P(D|+) = 0.0099 / 0.0198 = 0.5 = 50%",
      ],
    },
    interactiveFields: [
      { label: "P(B|A)", key: "pba", type: "number", placeholder: "0.99" },
      { label: "P(A)", key: "pa", type: "number", placeholder: "0.01" },
      { label: "P(B)", key: "pb", type: "number", placeholder: "0.0198" },
    ],
    calculate: (inputs) => {
      const { pba, pa, pb } = inputs;
      if (pba === undefined || pa === undefined || pb === undefined) return "Enter all probabilities";
      if (pb === 0) return "P(B) cannot be zero";
      return `P(A|B) = ${((pba * pa) / pb).toFixed(6)}`;
    },
  },
  {
    id: "expected-value",
    category: "probability",
    subcategory: "Descriptive",
    name: "Expected Value",
    formula: `E[X] = Σ x<sub>i</sub> · P(x<sub>i</sub>)`,
    description:
      "The weighted average of all possible outcomes, where weights are probabilities. The long-run average.",
    example: {
      problem: "E[X] for a fair die",
      steps: [
        "E[X] = 1(1/6) + 2(1/6) + 3(1/6) + 4(1/6) + 5(1/6) + 6(1/6)",
        "= 21/6 = 3.5",
      ],
    },
  },
  {
    id: "variance",
    category: "probability",
    subcategory: "Descriptive",
    name: "Variance",
    formula: `Var(X) = E[(X − μ)²] = E[X²] − (E[X])²`,
    description:
      "Measures spread: the expected squared deviation from the mean. Standard deviation is √Var(X).",
    example: {
      problem: "Var(X) for a fair die",
      steps: [
        "E[X] = 3.5",
        "E[X²] = (1+4+9+16+25+36)/6 = 91/6 ≈ 15.167",
        "Var(X) = 15.167 − 12.25 = 2.917",
        "σ = √2.917 ≈ 1.708",
      ],
    },
  },
  {
    id: "normal-distribution",
    category: "probability",
    subcategory: "Distributions",
    name: "Normal Distribution",
    formula: `f(x) = (1 / σ√(2π)) · e<sup>−(x−μ)²/(2σ²)</sup>`,
    description:
      "The bell curve. Parameterized by mean μ and standard deviation σ. ~68% of data within 1σ, ~95% within 2σ, ~99.7% within 3σ.",
    example: {
      problem: "For μ = 100, σ = 15, find P(X < 115)",
      steps: [
        "z = (115 − 100) / 15 = 1.0",
        "P(Z < 1.0) ≈ 0.8413 from z-table",
        "About 84.13% of values are below 115",
      ],
    },
  },
  {
    id: "binomial-distribution",
    category: "probability",
    subcategory: "Distributions",
    name: "Binomial Distribution",
    formula: `P(X = k) = C(n,k) · p<sup>k</sup> · (1−p)<sup>n−k</sup>`,
    description:
      "Probability of exactly k successes in n independent Bernoulli trials, each with success probability p.",
    example: {
      problem: "P(3 heads in 5 fair coin flips)",
      steps: [
        "n = 5, k = 3, p = 0.5",
        "C(5,3) = 10",
        "P = 10 · 0.5³ · 0.5² = 10 · 0.03125 = 0.3125",
      ],
    },
    interactiveFields: [
      { label: "n (trials)", key: "n", type: "number", placeholder: "5" },
      { label: "k (successes)", key: "k", type: "number", placeholder: "3" },
      { label: "p (probability)", key: "p", type: "number", placeholder: "0.5" },
    ],
    calculate: (inputs) => {
      const { n, k, p } = inputs;
      if (n === undefined || k === undefined || p === undefined) return "Enter all values";
      if (k > n || k < 0 || n < 0) return "Invalid: need 0 ≤ k ≤ n";
      if (p < 0 || p > 1) return "p must be between 0 and 1";
      const fact = (x: number): number => { let f = 1; for (let i = 2; i <= x; i++) f *= i; return f; };
      const comb = fact(n) / (fact(k) * fact(n - k));
      const prob = comb * Math.pow(p, k) * Math.pow(1 - p, n - k);
      return `P(X = ${k}) = ${prob.toFixed(6)}`;
    },
  },
  {
    id: "poisson-distribution",
    category: "probability",
    subcategory: "Distributions",
    name: "Poisson Distribution",
    formula: `P(X = k) = (λ<sup>k</sup> · e<sup>−λ</sup>) / k!`,
    description:
      "Models the number of events in a fixed interval when events occur independently at rate λ.",
    example: {
      problem: "Average 3 calls/hour. P(5 calls in an hour)?",
      steps: [
        "λ = 3, k = 5",
        "P = 3⁵ · e⁻³ / 5!",
        "= 243 · 0.04979 / 120 ≈ 0.1008",
      ],
    },
    interactiveFields: [
      { label: "λ (rate)", key: "lambda", type: "number", placeholder: "3" },
      { label: "k (events)", key: "k", type: "number", placeholder: "5" },
    ],
    calculate: (inputs) => {
      const { lambda, k } = inputs;
      if (lambda === undefined || k === undefined) return "Enter lambda and k";
      if (k < 0 || !Number.isInteger(k)) return "k must be a non-negative integer";
      const fact = (x: number): number => { let f = 1; for (let i = 2; i <= x; i++) f *= i; return f; };
      const prob = (Math.pow(lambda, k) * Math.exp(-lambda)) / fact(k);
      return `P(X = ${k}) = ${prob.toFixed(6)}`;
    },
  },
  {
    id: "geometric-distribution",
    category: "probability",
    subcategory: "Distributions",
    name: "Geometric Distribution",
    formula: `P(X = k) = (1 − p)<sup>k−1</sup> · p`,
    description:
      "Probability that the first success occurs on the k-th trial.",
    example: {
      problem: "P(first head on 4th flip)?",
      steps: [
        "p = 0.5, k = 4",
        "P = (0.5)³ · 0.5 = 0.0625",
      ],
    },
    interactiveFields: [
      { label: "p (success prob)", key: "p", type: "number", placeholder: "0.5" },
      { label: "k (trial #)", key: "k", type: "number", placeholder: "4" },
    ],
    calculate: (inputs) => {
      const { p, k } = inputs;
      if (p === undefined || k === undefined) return "Enter p and k";
      if (p <= 0 || p > 1) return "p must be in (0, 1]";
      if (k < 1 || !Number.isInteger(k)) return "k must be a positive integer";
      const prob = Math.pow(1 - p, k - 1) * p;
      return `P(X = ${k}) = ${prob.toFixed(6)}`;
    },
  },
  {
    id: "conditional-probability",
    category: "probability",
    subcategory: "Conditional Probability",
    name: "Conditional Probability",
    formula: `P(A|B) = P(A ∩ B) / P(B)`,
    description:
      "The probability of A given that B has occurred. Requires P(B) > 0.",
    example: {
      problem: "P(A ∩ B) = 0.15, P(B) = 0.30. Find P(A|B).",
      steps: ["P(A|B) = 0.15 / 0.30 = 0.5"],
    },
    interactiveFields: [
      { label: "P(A ∩ B)", key: "pab", type: "number", placeholder: "0.15" },
      { label: "P(B)", key: "pb", type: "number", placeholder: "0.30" },
    ],
    calculate: (inputs) => {
      const { pab, pb } = inputs;
      if (pab === undefined || pb === undefined) return "Enter both probabilities";
      if (pb === 0) return "P(B) cannot be zero";
      return `P(A|B) = ${(pab / pb).toFixed(6)}`;
    },
  },
  {
    id: "law-of-total-probability",
    category: "probability",
    subcategory: "Conditional Probability",
    name: "Law of Total Probability",
    formula: `P(B) = Σ P(B|A<sub>i</sub>) · P(A<sub>i</sub>)`,
    description:
      "Computes P(B) by summing over a partition of the sample space. Foundation for Bayes' theorem.",
    example: {
      problem: "Two factories: F1 (60%, 2% defect), F2 (40%, 5% defect). P(defect)?",
      steps: [
        "P(D) = P(D|F1)P(F1) + P(D|F2)P(F2)",
        "= 0.02 · 0.60 + 0.05 · 0.40",
        "= 0.012 + 0.020 = 0.032 = 3.2%",
      ],
    },
  },
];
