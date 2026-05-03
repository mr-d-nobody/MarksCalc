/**
 * Year 2 – Theory Calculator
 *
 * Internal components (sum of weights = 40):
 *   weighted_value = (obtained / max) * weight
 *   internalTotal  = Σ weighted_value  → capped at 40
 *
 * External component:
 *   external: raw marks, max 60 → added directly
 *
 * Final:
 *   finalTotal = internalTotal + external  → out of 100
 */
export const calculateTheory = (inputs) => {
  // ── Internal fields ────────────────────────────────────────────────────────
  // Weights must sum to 40 (internal out of 40)
  const internalFields = [
    { key: 'assignment',   max: 10, weight: 10 },
    { key: 'attendance',   max: 2,  weight: 2  },
    { key: 'mst1',         max: 20, weight: 10 },
    { key: 'mst2',         max: 20, weight: 10 },
    { key: 'quiz',         max: 4,  weight: 4  },
    { key: 'surpriseTest', max: 12, weight: 4  },
    // Total internal weight = 10+2+10+10+4+4 = 40 ✓
  ];

  let internalTotal = 0;

  internalFields.forEach(field => {
    const val = parseFloat(inputs[field.key]) || 0;
    const weighted = (val / field.max) * field.weight;
    internalTotal += weighted;
  });

  // Hard cap: internal must never exceed 40
  internalTotal = Math.min(internalTotal, 40);

  // ── External field ─────────────────────────────────────────────────────────
  // External Exam: raw marks, max 60 (no scaling needed)
  const external = parseFloat(inputs['external']) || 0;

  // ── Final score ────────────────────────────────────────────────────────────
  const finalTotal = internalTotal + external; // out of 100

  return {
    internalTotal: internalTotal.toFixed(2),
    externalTotal: external.toFixed(2),
    finalScore:    finalTotal.toFixed(2),
    percentage:    finalTotal.toFixed(2),
  };
};
