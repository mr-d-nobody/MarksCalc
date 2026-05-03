/**
 * Year 2 – Hybrid Calculator
 *
 * Internal components (sum of weights = 70):
 *   weighted_value = (obtained / max) * weight
 *   internalTotal  = Σ weighted_value  → capped at 70
 *
 * External component:
 *   externalScaled = (endTermTheory / 60) * 30
 *
 * Final:
 *   finalScore = internalTotal + externalScaled  → out of 100
 */
export const calculateHybrid = (inputs) => {
  // ── Internal fields ────────────────────────────────────────────────────────
  // Weights must sum to 70 (internal out of 70)
  const internalFields = [
    { key: 'attendance',         max: 2,  weight: 2  },
    { key: 'mst1',               max: 20, weight: 5  },
    { key: 'mst2',               max: 20, weight: 5  },
    { key: 'exp1',               max: 30, weight: 5  },
    { key: 'exp2',               max: 30, weight: 5  },
    { key: 'exp3',               max: 30, weight: 5  },
    { key: 'exp4',               max: 30, weight: 5  },
    { key: 'classPerf',          max: 10, weight: 5  },
    { key: 'endTermPractical',   max: 40, weight: 20 },
    { key: 'assignment',         max: 10, weight: 2  },
    { key: 'quiz',               max: 4,  weight: 2  },
    { key: 'surpriseTest',       max: 12, weight: 2  },
    { key: 'courseProject',      max: 5,  weight: 2  },
    { key: 'industryAssessment', max: 10, weight: 5  },
    // Total internal weight = 2+5+5+5+5+5+5+5+20+2+2+2+2+5 = 70 ✓
  ];

  let internalTotal = 0;

  internalFields.forEach(field => {
    const val = parseFloat(inputs[field.key]) || 0;
    const weighted = (val / field.max) * field.weight;
    internalTotal += weighted;
  });

  // Hard cap: internal must never exceed 70
  internalTotal = Math.min(internalTotal, 70);

  // ── External field ─────────────────────────────────────────────────────────
  // End Term Theory: max 60 marks → scaled to 30
  const externalRaw    = parseFloat(inputs['endTermTheory']) || 0;
  const externalScaled = (externalRaw / 60) * 30;

  // ── Final score ────────────────────────────────────────────────────────────
  const finalScore = internalTotal + externalScaled; // out of 100
  const percentage = finalScore; // already out of 100

  return {
    internalTotal:  internalTotal.toFixed(2),
    externalScaled: externalScaled.toFixed(2),
    finalScore:     finalScore.toFixed(2),
    percentage:     percentage.toFixed(2),
  };
};
