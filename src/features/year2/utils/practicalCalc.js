/**
 * Year 2 – Practical Calculator
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
    { key: 'classPerf',          max: 10, weight: 5  },
    { key: 'exp1',               max: 30, weight: 10 },
    { key: 'exp2',               max: 30, weight: 10 },
    { key: 'exp3',               max: 30, weight: 10 },
    { key: 'exp4',               max: 30, weight: 10 },
    { key: 'industryAssessment', max: 10, weight: 10 },
    { key: 'courseProject',      max: 5,  weight: 5  },
    // Total internal weight = 5+10+10+10+10+10+5 = 60 ✓
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
  const externalViva = parseFloat(inputs['externalViva']) || 0;

  // ── Final score ────────────────────────────────────────────────────────────
  const finalScore = internalTotal + externalViva; // out of 100
  const percentage = finalScore; // already out of 100

  return {
    internalTotal: internalTotal.toFixed(2),
    externalTotal: externalViva.toFixed(2),
    finalScore:    finalScore.toFixed(2),
    percentage:    percentage.toFixed(2),
  };
};
