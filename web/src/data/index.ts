export type { Formula, Category, InteractiveField } from "./types";
export { categories } from "./categories";
export { algebraFormulas } from "./algebra";
export { geometryFormulas } from "./geometry";
export { trigonometryFormulas } from "./trigonometry";
export { calculusFormulas } from "./calculus";
export { linearAlgebraFormulas } from "./linear-algebra";
export { probabilityFormulas } from "./probability";
export { numberTheoryFormulas } from "./number-theory";

import type { Formula } from "./types";
import { algebraFormulas } from "./algebra";
import { geometryFormulas } from "./geometry";
import { trigonometryFormulas } from "./trigonometry";
import { calculusFormulas } from "./calculus";
import { linearAlgebraFormulas } from "./linear-algebra";
import { probabilityFormulas } from "./probability";
import { numberTheoryFormulas } from "./number-theory";

export const allFormulas: Formula[] = [
  ...algebraFormulas,
  ...geometryFormulas,
  ...trigonometryFormulas,
  ...calculusFormulas,
  ...linearAlgebraFormulas,
  ...probabilityFormulas,
  ...numberTheoryFormulas,
];
