export const calculateAptitude = (inputs) => {
  const internalFields = [
    { key: 'assignment', max: 12, weight: 6 },
    { key: 'attendance', max: 4, weight: 4 },
    { key: 'mst1', max: 20, weight: 10 },
    { key: 'surpriseTest', max: 12, weight: 4 },
    { key: 'mst2', max: 20, weight: 10 },
    { key: 'quiz', max: 6, weight: 6 },
  ];

  let internalTotal = 0;

  internalFields.forEach(field => {
    const val = parseFloat(inputs[field.key]) || 0;
    const weighted = (val / field.max) * field.weight;
    internalTotal += weighted;
  });

  const external = parseFloat(inputs['external']) || 0;
  const finalScore = internalTotal + external;
  const percentage = (finalScore / 100) * 100;

  return {
    internalTotal: internalTotal.toFixed(2),
    externalTotal: external.toFixed(2),
    finalScore: finalScore.toFixed(2),
    percentage: percentage.toFixed(2),
  };
};
