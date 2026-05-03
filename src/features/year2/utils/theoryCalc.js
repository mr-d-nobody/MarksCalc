export const calculateTheory = (inputs) => {
  const internalFields = [
    { key: 'assignment', max: 10, weight: 10 },
    { key: 'attendance', max: 2, weight: 2 },
    { key: 'mst1', max: 20, weight: 10 },
    { key: 'mst2', max: 20, weight: 10 },
    { key: 'quiz', max: 4, weight: 4 },
    { key: 'surpriseTest', max: 12, weight: 4 },
  ];

  let internalTotal = 0;

  internalFields.forEach(field => {
    const val = parseFloat(inputs[field.key]) || 0;
    const weighted = (val / field.max) * field.weight;
    internalTotal += weighted;
  });

  const external = parseFloat(inputs['external']) || 0; // Max 60, no scaling
  const finalTotal = internalTotal + external;
  const percentage = (finalTotal / 100) * 100; // max is 100 (40 + 60)

  return {
    internalTotal: internalTotal.toFixed(2),
    externalTotal: external.toFixed(2),
    finalTotal: finalTotal.toFixed(2),
    percentage: percentage.toFixed(2)
  };
};
