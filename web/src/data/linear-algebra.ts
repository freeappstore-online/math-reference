import type { Formula } from "./types";

export const linearAlgebraFormulas: Formula[] = [
  {
    id: "matrix-addition",
    category: "linear-algebra",
    subcategory: "Matrix Operations",
    name: "Matrix Addition",
    formula: `[A + B]<sub>ij</sub> = A<sub>ij</sub> + B<sub>ij</sub>`,
    description:
      "Add matrices element by element. Matrices must have the same dimensions.",
    example: {
      problem: "Add [1 2; 3 4] + [5 6; 7 8]",
      steps: [
        "[1+5  2+6]   [6   8]",
        "[3+7  4+8] = [10  12]",
      ],
    },
  },
  {
    id: "matrix-scalar-multiply",
    category: "linear-algebra",
    subcategory: "Matrix Operations",
    name: "Scalar Multiplication",
    formula: `[cA]<sub>ij</sub> = c · A<sub>ij</sub>`,
    description:
      "Multiply every element of the matrix by the scalar c.",
    example: {
      problem: "Compute 3 · [2 1; 4 3]",
      steps: [
        "3 · [2 1; 4 3] = [6 3; 12 9]",
      ],
    },
  },
  {
    id: "matrix-multiplication",
    category: "linear-algebra",
    subcategory: "Matrix Operations",
    name: "Matrix Multiplication",
    formula: `[AB]<sub>ij</sub> = Σ<sub>k</sub> A<sub>ik</sub> · B<sub>kj</sub>`,
    description:
      "Dot product of row i of A with column j of B. A must have as many columns as B has rows. Not commutative (AB ≠ BA in general).",
    example: {
      problem: "Multiply [1 2; 3 4] · [5 6; 7 8]",
      steps: [
        "C₁₁ = 1·5 + 2·7 = 19",
        "C₁₂ = 1·6 + 2·8 = 22",
        "C₂₁ = 3·5 + 4·7 = 43",
        "C₂₂ = 3·6 + 4·8 = 50",
        "Result: [19 22; 43 50]",
      ],
    },
  },
  {
    id: "matrix-transpose",
    category: "linear-algebra",
    subcategory: "Matrix Operations",
    name: "Transpose",
    formula: `[A<sup>T</sup>]<sub>ij</sub> = A<sub>ji</sub>`,
    description:
      "Flip rows and columns: the element at row i, column j becomes the element at row j, column i.",
    example: {
      problem: "Transpose [1 2 3; 4 5 6]",
      steps: [
        "Rows become columns:",
        "[1 4]",
        "[2 5]",
        "[3 6]",
      ],
    },
  },
  {
    id: "determinant-2x2",
    category: "linear-algebra",
    subcategory: "Determinant",
    name: "Determinant (2x2)",
    formula: `det [a b; c d] = ad − bc`,
    description:
      "The determinant of a 2x2 matrix. If nonzero, the matrix is invertible.",
    example: {
      problem: "Find det [3 8; 4 6]",
      steps: ["det = 3·6 − 8·4", "= 18 − 32 = −14"],
    },
    interactiveFields: [
      { label: "a", key: "a", type: "number", placeholder: "3" },
      { label: "b", key: "b", type: "number", placeholder: "8" },
      { label: "c", key: "c", type: "number", placeholder: "4" },
      { label: "d", key: "d", type: "number", placeholder: "6" },
    ],
    calculate: (inputs) => {
      const { a, b, c, d } = inputs;
      if (a === undefined || b === undefined || c === undefined || d === undefined)
        return "Enter all values";
      return `det = ${a * d - b * c}`;
    },
  },
  {
    id: "determinant-3x3",
    category: "linear-algebra",
    subcategory: "Determinant",
    name: "Determinant (3x3)",
    formula: `det A = a(ei − fh) − b(di − fg) + c(dh − eg)`,
    description:
      "Computed via cofactor expansion along the first row for [a b c; d e f; g h i].",
    example: {
      problem: "Find det [1 2 3; 4 5 6; 7 8 9]",
      steps: [
        "= 1(5·9 − 6·8) − 2(4·9 − 6·7) + 3(4·8 − 5·7)",
        "= 1(45 − 48) − 2(36 − 42) + 3(32 − 35)",
        "= 1(−3) − 2(−6) + 3(−3)",
        "= −3 + 12 − 9 = 0",
      ],
    },
  },
  {
    id: "inverse-2x2",
    category: "linear-algebra",
    subcategory: "Inverse",
    name: "Inverse of a 2x2 Matrix",
    formula: `A<sup>−1</sup> = (1/det A) · [d −b; −c a]`,
    description:
      "Swap the diagonal elements, negate the off-diagonal, divide by the determinant. Only works if det ≠ 0.",
    example: {
      problem: "Find inverse of [2 1; 5 3]",
      steps: [
        "det = 2·3 − 1·5 = 1",
        "A⁻¹ = (1/1) · [3 −1; −5 2]",
        "= [3 −1; −5 2]",
      ],
    },
    interactiveFields: [
      { label: "a", key: "a", type: "number", placeholder: "2" },
      { label: "b", key: "b", type: "number", placeholder: "1" },
      { label: "c", key: "c", type: "number", placeholder: "5" },
      { label: "d", key: "d", type: "number", placeholder: "3" },
    ],
    calculate: (inputs) => {
      const { a, b, c, d } = inputs;
      if (a === undefined || b === undefined || c === undefined || d === undefined)
        return "Enter all values";
      const det = a * d - b * c;
      if (det === 0) return "Matrix is singular (det = 0), no inverse";
      const inv = [d / det, -b / det, -c / det, a / det];
      return `A⁻¹ = [${inv[0]?.toFixed(3)} ${inv[1]?.toFixed(3)}; ${inv[2]?.toFixed(3)} ${inv[3]?.toFixed(3)}]`;
    },
  },
  {
    id: "dot-product",
    category: "linear-algebra",
    subcategory: "Vectors",
    name: "Dot Product",
    formula: `a · b = Σ a<sub>i</sub>b<sub>i</sub> = |a||b|cos(θ)`,
    description:
      "Sum of component-wise products. Yields a scalar. Zero when vectors are perpendicular.",
    example: {
      problem: "Find (3, 4) · (1, 2)",
      steps: ["3·1 + 4·2 = 3 + 8 = 11"],
    },
    interactiveFields: [
      { label: "a₁", key: "a1", type: "number", placeholder: "3" },
      { label: "a₂", key: "a2", type: "number", placeholder: "4" },
      { label: "b₁", key: "b1", type: "number", placeholder: "1" },
      { label: "b₂", key: "b2", type: "number", placeholder: "2" },
    ],
    calculate: (inputs) => {
      const { a1, a2, b1, b2 } = inputs;
      if (a1 === undefined || a2 === undefined || b1 === undefined || b2 === undefined)
        return "Enter all components";
      const dot = a1 * b1 + a2 * b2;
      const magA = Math.sqrt(a1 * a1 + a2 * a2);
      const magB = Math.sqrt(b1 * b1 + b2 * b2);
      const angle = magA > 0 && magB > 0
        ? (Math.acos(Math.min(1, Math.max(-1, dot / (magA * magB)))) * 180 / Math.PI).toFixed(2)
        : "N/A";
      return `a · b = ${dot}, angle ≈ ${angle}°`;
    },
  },
  {
    id: "cross-product",
    category: "linear-algebra",
    subcategory: "Vectors",
    name: "Cross Product",
    formula: `a × b = (a₂b₃−a₃b₂, a₃b₁−a₁b₃, a₁b₂−a₂b₁)`,
    description:
      "Only defined in 3D. Yields a vector perpendicular to both inputs. Magnitude = |a||b|sin(θ).",
    example: {
      problem: "Find (1,0,0) × (0,1,0)",
      steps: [
        "i: 0·0 − 0·1 = 0",
        "j: 0·0 − 1·0 = 0",
        "k: 1·1 − 0·0 = 1",
        "Result: (0, 0, 1)",
      ],
    },
    interactiveFields: [
      { label: "a₁", key: "a1", type: "number", placeholder: "1" },
      { label: "a₂", key: "a2", type: "number", placeholder: "0" },
      { label: "a₃", key: "a3", type: "number", placeholder: "0" },
      { label: "b₁", key: "b1", type: "number", placeholder: "0" },
      { label: "b₂", key: "b2", type: "number", placeholder: "1" },
      { label: "b₃", key: "b3", type: "number", placeholder: "0" },
    ],
    calculate: (inputs) => {
      const { a1, a2, a3, b1, b2, b3 } = inputs;
      if (a1 === undefined || a2 === undefined || a3 === undefined ||
          b1 === undefined || b2 === undefined || b3 === undefined)
        return "Enter all 6 components";
      const i = a2 * b3 - a3 * b2;
      const j = a3 * b1 - a1 * b3;
      const k = a1 * b2 - a2 * b1;
      return `a × b = (${i}, ${j}, ${k})`;
    },
  },
  {
    id: "eigenvalue-concept",
    category: "linear-algebra",
    subcategory: "Eigenvalues",
    name: "Eigenvalue Equation",
    formula: `Av = λv, or det(A − λI) = 0`,
    description:
      "An eigenvalue λ is a scalar such that Av = λv for some nonzero vector v (the eigenvector). Find λ by solving the characteristic polynomial det(A − λI) = 0.",
    example: {
      problem: "Find eigenvalues of [2 1; 1 2]",
      steps: [
        "det([2−λ 1; 1 2−λ]) = 0",
        "(2−λ)² − 1 = 0",
        "4 − 4λ + λ² − 1 = 0",
        "λ² − 4λ + 3 = 0",
        "(λ − 1)(λ − 3) = 0",
        "λ = 1 or λ = 3",
      ],
    },
    interactiveFields: [
      { label: "a (top-left)", key: "a", type: "number", placeholder: "2" },
      { label: "b (top-right)", key: "b", type: "number", placeholder: "1" },
      { label: "c (bot-left)", key: "c", type: "number", placeholder: "1" },
      { label: "d (bot-right)", key: "d", type: "number", placeholder: "2" },
    ],
    calculate: (inputs) => {
      const { a, b, c, d } = inputs;
      if (a === undefined || b === undefined || c === undefined || d === undefined)
        return "Enter all 4 matrix entries";
      const trace = a + d;
      const det = a * d - b * c;
      const disc = trace * trace - 4 * det;
      if (disc < 0) {
        const real = (trace / 2).toFixed(4);
        const imag = (Math.sqrt(-disc) / 2).toFixed(4);
        return `Complex eigenvalues: ${real} ± ${imag}i`;
      }
      const l1 = (trace + Math.sqrt(disc)) / 2;
      const l2 = (trace - Math.sqrt(disc)) / 2;
      return `λ₁ = ${l1.toFixed(4)}, λ₂ = ${l2.toFixed(4)}`;
    },
  },
];
