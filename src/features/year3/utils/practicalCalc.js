/**
 * Year 3 – Practical Calculator
 *
 * Internal components (sum of weights = 60):
 *   weighted_value = (obtained / max) * weight
 *   internalTotal  = Σ weighted_value  → capped at 60
 *
 * External component:
 *   externalViva: raw marks, max 40 → added directly
 *
 * Final:
 *   finalScore = internalTotal + externalViva  → out of 100
 */
export const calculatePractical = (inputs) => {
  // ── Internal fields ────────────────────────────────────────────────────────
  // Weights must sum to 60 (internal out of 60)
  const internalFields = [
    { key: 'exp1',        max: 30, weight: 4.5 },
    { key: 'exp2',        max: 30, weight: 4.5 },
    { key: 'exp3',        max: 30, weight: 4.5 },
    { key: 'exp4',        max: 30, weight: 4.5 },
    { key: 'exp5',        max: 30, weight: 4.5 },
    { key: 'exp6',        max: 30, weight: 4.5 },
    { key: 'exp7',        max: 30, weight: 4.5 },
    { key: 'exp8',        max: 30, weight: 4.5 },
    { key: 'exp9',        max: 30, weight: 4.5 },
    { key: 'exp10',       max: 30, weight: 4.5 },
    { key: 'midTermTest', max: 15, weight: 15  },
    // Total internal weight = 4.5×10 + 15 = 60 ✓
  ];

  let internalTotal = 0;

  internalFields.forEach(field => {
    const val = parseFloat(inputs[field.key]) || 0;
    const weighted = (val / field.max) * field.weight;
    internalTotal += weighted;
  });

  // Hard cap: internal must never exceed 60
  internalTotal = Math.min(internalTotal, 60);

  // ── External field ─────────────────────────────────────────────────────────
  // External Viva: raw marks, max 40 (no scaling needed)
  const externalInput = parseFloat(inputs['externalViva']) || 0;

  // ── Final score ────────────────────────────────────────────────────────────
  const finalScore = internalTotal + externalInput; // out of 100

  return {
    internalTotal: internalTotal.toFixed(2),
    externalTotal: externalInput.toFixed(2),
    finalScore:    finalScore.toFixed(2),
    percentage:    finalScore.toFixed(2),
  };
};
