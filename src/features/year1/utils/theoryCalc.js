export const calculateTheory = (inputs) => {
  const internalFields = [
    { key: 'attendance', max: 2, weight: 2 },
    { key: 'mst1', max: 20, weight: 10 },
    { key: 'mst2', max: 20, weight: 10 },
    { key: 'assignment', max: 12, weight: 12 },
    { key: 'surpriseTest', max: 12, weight: 6 },
    { key: 'courseProject', max: 20, weight: 10 },
  ];

  let internalTotal = 0;

  internalFields.forEach(field => {
    const val = parseFloat(inputs[field.key]) || 0;
    const weighted = (val / field.max) * field.weight;
    internalTotal += weighted;
  });

  const externalInput = parseFloat(inputs['externalTheory']) || 0; // max 60
  const externalScaled = (externalInput / 60) * 50;

  const finalScore = internalTotal + externalScaled;

  return {
    internalTotal: internalTotal.toFixed(2),
    externalScaled: externalScaled.toFixed(2),
    finalScore: finalScore.toFixed(2),
    percentage: finalScore.toFixed(2) // out of 100
  };
};
