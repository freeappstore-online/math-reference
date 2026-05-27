import type { Formula } from "./types";

export const numberTheoryFormulas: Formula[] = [
  {
    id: "prime-definition",
    category: "number-theory",
    subcategory: "Primes",
    name: "Prime Number Definition",
    formula: `p is prime ⟺ p > 1 and only divisible by 1 and p`,
    description:
      "A natural number greater than 1 with no positive divisors other than 1 and itself. Fundamental building blocks of all integers.",
    example: {
      problem: "Is 29 prime?",
      steps: [
        "Check divisibility by primes up to √29 ≈ 5.39",
        "29 / 2 = 14.5 (not divisible)",
        "29 / 3 = 9.67 (not divisible)",
        "29 / 5 = 5.8 (not divisible)",
        "29 is prime",
      ],
    },
    interactiveFields: [
      { label: "number n", key: "n", type: "number", placeholder: "29" },
    ],
    calculate: (inputs) => {
      const { n } = inputs;
      if (n === undefined) return "Enter a number";
      if (n < 2 || !Number.isInteger(n)) return "Enter an integer ≥ 2";
      for (let i = 2; i * i <= n; i++) {
        if (n % i === 0) return `${n} is NOT prime (divisible by ${i})`;
      }
      return `${n} is prime`;
    },
  },
  {
    id: "fundamental-theorem-arithmetic",
    category: "number-theory",
    subcategory: "Primes",
    name: "Fundamental Theorem of Arithmetic",
    formula: `n = p₁<sup>a₁</sup> · p₂<sup>a₂</sup> · ... · p<sub>k</sub><sup>a<sub>k</sub></sup>`,
    description:
      "Every integer > 1 can be written uniquely as a product of prime powers (up to reordering).",
    example: {
      problem: "Factor 360",
      steps: [
        "360 = 2 · 180 = 2 · 2 · 90 = 4 · 90",
        "= 4 · 9 · 10 = 4 · 9 · 2 · 5",
        "= 2³ · 3² · 5",
      ],
    },
    interactiveFields: [
      { label: "number n", key: "n", type: "number", placeholder: "360" },
    ],
    calculate: (inputs) => {
      const { n } = inputs;
      if (n === undefined) return "Enter a number";
      if (n < 2 || !Number.isInteger(n)) return "Enter an integer ≥ 2";
      let num = n;
      const factors: string[] = [];
      for (let d = 2; d * d <= num; d++) {
        let count = 0;
        while (num % d === 0) {
          count++;
          num /= d;
        }
        if (count > 0) factors.push(count === 1 ? `${d}` : `${d}^${count}`);
      }
      if (num > 1) factors.push(`${num}`);
      return `${n} = ${factors.join(" · ")}`;
    },
  },
  {
    id: "gcd",
    category: "number-theory",
    subcategory: "Divisibility",
    name: "Greatest Common Divisor (GCD)",
    formula: `gcd(a, b) via Euclidean algorithm`,
    description:
      "The largest positive integer that divides both a and b. Found efficiently using the Euclidean algorithm: gcd(a, b) = gcd(b, a mod b).",
    example: {
      problem: "Find gcd(48, 18)",
      steps: [
        "gcd(48, 18) = gcd(18, 48 mod 18) = gcd(18, 12)",
        "gcd(18, 12) = gcd(12, 18 mod 12) = gcd(12, 6)",
        "gcd(12, 6) = gcd(6, 0) = 6",
      ],
    },
    interactiveFields: [
      { label: "a", key: "a", type: "number", placeholder: "48" },
      { label: "b", key: "b", type: "number", placeholder: "18" },
    ],
    calculate: (inputs) => {
      const { a, b } = inputs;
      if (a === undefined || b === undefined) return "Enter both numbers";
      let x = Math.abs(Math.round(a));
      let y = Math.abs(Math.round(b));
      while (y !== 0) {
        const temp = y;
        y = x % y;
        x = temp;
      }
      return `gcd(${Math.round(a)}, ${Math.round(b)}) = ${x}`;
    },
  },
  {
    id: "lcm",
    category: "number-theory",
    subcategory: "Divisibility",
    name: "Least Common Multiple (LCM)",
    formula: `lcm(a, b) = |a · b| / gcd(a, b)`,
    description:
      "The smallest positive integer divisible by both a and b. Related to GCD by the formula above.",
    example: {
      problem: "Find lcm(12, 18)",
      steps: [
        "gcd(12, 18) = 6",
        "lcm(12, 18) = |12 · 18| / 6 = 216 / 6 = 36",
      ],
    },
    interactiveFields: [
      { label: "a", key: "a", type: "number", placeholder: "12" },
      { label: "b", key: "b", type: "number", placeholder: "18" },
    ],
    calculate: (inputs) => {
      const { a, b } = inputs;
      if (a === undefined || b === undefined) return "Enter both numbers";
      const ai = Math.abs(Math.round(a));
      const bi = Math.abs(Math.round(b));
      let x = ai;
      let y = bi;
      while (y !== 0) {
        const temp = y;
        y = x % y;
        x = temp;
      }
      const gcd = x;
      if (gcd === 0) return "Cannot compute (both are zero)";
      return `lcm(${Math.round(a)}, ${Math.round(b)}) = ${(ai * bi) / gcd}`;
    },
  },
  {
    id: "modular-arithmetic",
    category: "number-theory",
    subcategory: "Modular Arithmetic",
    name: "Modular Arithmetic",
    formula: `a ≡ b (mod n) ⟺ n | (a − b)`,
    description:
      "a and b are congruent modulo n if their difference is divisible by n. The foundation of clock arithmetic and cryptography.",
    example: {
      problem: "Is 17 ≡ 5 (mod 4)?",
      steps: [
        "17 − 5 = 12",
        "12 / 4 = 3 (integer, so divisible)",
        "Yes, 17 ≡ 5 (mod 4)",
      ],
    },
    interactiveFields: [
      { label: "a", key: "a", type: "number", placeholder: "17" },
      { label: "b", key: "b", type: "number", placeholder: "5" },
      { label: "n (modulus)", key: "n", type: "number", placeholder: "4" },
    ],
    calculate: (inputs) => {
      const { a, b, n } = inputs;
      if (a === undefined || b === undefined || n === undefined) return "Enter all values";
      if (n === 0) return "Modulus cannot be zero";
      const diff = Math.round(a) - Math.round(b);
      const divisible = diff % Math.round(n) === 0;
      return divisible
        ? `${Math.round(a)} ≡ ${Math.round(b)} (mod ${Math.round(n)}) — TRUE`
        : `${Math.round(a)} ≢ ${Math.round(b)} (mod ${Math.round(n)}) — FALSE (${Math.round(a)} mod ${Math.round(n)} = ${((Math.round(a) % Math.round(n)) + Math.round(n)) % Math.round(n)})`;
    },
  },
  {
    id: "modular-exponentiation",
    category: "number-theory",
    subcategory: "Modular Arithmetic",
    name: "Modular Exponentiation",
    formula: `a<sup>b</sup> mod n`,
    description:
      "Computes a^b mod n efficiently. Essential for RSA and other public-key cryptosystems.",
    example: {
      problem: "Find 3⁵ mod 7",
      steps: [
        "3¹ mod 7 = 3",
        "3² mod 7 = 9 mod 7 = 2",
        "3⁴ mod 7 = 2² mod 7 = 4",
        "3⁵ = 3⁴ · 3¹ mod 7 = 4 · 3 = 12 mod 7 = 5",
      ],
    },
    interactiveFields: [
      { label: "base a", key: "a", type: "number", placeholder: "3" },
      { label: "exponent b", key: "b", type: "number", placeholder: "5" },
      { label: "modulus n", key: "n", type: "number", placeholder: "7" },
    ],
    calculate: (inputs) => {
      const { a, b, n } = inputs;
      if (a === undefined || b === undefined || n === undefined) return "Enter all values";
      if (n <= 0) return "Modulus must be positive";
      if (b < 0) return "Exponent must be non-negative";
      let result = 1;
      let base = ((Math.round(a) % Math.round(n)) + Math.round(n)) % Math.round(n);
      let exp = Math.round(b);
      const mod = Math.round(n);
      while (exp > 0) {
        if (exp % 2 === 1) result = (result * base) % mod;
        exp = Math.floor(exp / 2);
        base = (base * base) % mod;
      }
      return `${Math.round(a)}^${Math.round(b)} mod ${mod} = ${result}`;
    },
  },
  {
    id: "fermats-little-theorem",
    category: "number-theory",
    subcategory: "Theorems",
    name: "Fermat's Little Theorem",
    formula: `a<sup>p−1</sup> ≡ 1 (mod p) if p is prime and gcd(a,p) = 1`,
    description:
      "For prime p and integer a not divisible by p, a raised to p-1 is congruent to 1 mod p. Basis for primality tests.",
    example: {
      problem: "Verify: 2⁶ ≡ 1 (mod 7)",
      steps: [
        "p = 7 (prime), a = 2, gcd(2, 7) = 1",
        "2⁶ = 64",
        "64 mod 7 = 1",
        "Confirmed: 2⁶ ≡ 1 (mod 7)",
      ],
    },
  },
  {
    id: "fibonacci-sequence",
    category: "number-theory",
    subcategory: "Sequences",
    name: "Fibonacci Sequence",
    formula: `F(n) = F(n−1) + F(n−2), F(0)=0, F(1)=1`,
    description:
      "Each number is the sum of the two preceding ones. Appears in nature, art, and algorithms. Ratio of consecutive terms approaches the golden ratio φ ≈ 1.618.",
    example: {
      problem: "Find F(10)",
      steps: [
        "F: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55",
        "F(10) = 55",
      ],
    },
    interactiveFields: [
      { label: "n", key: "n", type: "number", placeholder: "10" },
    ],
    calculate: (inputs) => {
      const { n } = inputs;
      if (n === undefined) return "Enter n";
      if (n < 0 || !Number.isInteger(n)) return "n must be a non-negative integer";
      if (n > 70) return "n too large (would lose precision)";
      if (n === 0) return "F(0) = 0";
      let a = 0;
      let b = 1;
      for (let i = 2; i <= n; i++) {
        const temp = a + b;
        a = b;
        b = temp;
      }
      return `F(${n}) = ${b}`;
    },
  },
  {
    id: "eulers-totient",
    category: "number-theory",
    subcategory: "Theorems",
    name: "Euler's Totient Function",
    formula: `φ(n) = n · Π(1 − 1/p) for each prime p dividing n`,
    description:
      "Counts how many integers from 1 to n are coprime to n. Key to RSA: φ(pq) = (p−1)(q−1) for distinct primes.",
    example: {
      problem: "Find φ(12)",
      steps: [
        "12 = 2² · 3",
        "φ(12) = 12 · (1 − 1/2) · (1 − 1/3)",
        "= 12 · 1/2 · 2/3 = 4",
        "Coprime to 12: {1, 5, 7, 11}",
      ],
    },
    interactiveFields: [
      { label: "n", key: "n", type: "number", placeholder: "12" },
    ],
    calculate: (inputs) => {
      const { n } = inputs;
      if (n === undefined) return "Enter n";
      if (n < 1 || !Number.isInteger(n)) return "n must be a positive integer";
      let result = n;
      let num = n;
      for (let p = 2; p * p <= num; p++) {
        if (num % p === 0) {
          while (num % p === 0) num /= p;
          result -= result / p;
        }
      }
      if (num > 1) result -= result / num;
      return `φ(${n}) = ${result}`;
    },
  },
];
