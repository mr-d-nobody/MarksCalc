export const calculateHybrid = (inputs) => {
  const internalFields = [
    { key: 'practEval', max: 40, weight: 20 },
    { key: 'attendance', max: 2, weight: 2 },
    { key: 'mst1', max: 20, weight: 5 },
    { key: 'mst2', max: 20, weight: 5 },
    { key: 'practMidTerm', max: 30, weight: 7.5 },
    { key: 'practAss1', max: 30, weight: 7.5 },
    { key: 'practAss2', max: 30, weight: 7.5 },
    { key: 'practAss3', max: 30, weight: 7.5 },
    { key: 'courseProject', max: 20, weight: 5 },
    { key: 'surpriseTest', max: 12, weight: 3 },
    { key: 'assignment', max: 12, weight: 5 },
  ];

  let internalTotal = 0;

  internalFields.forEach(field => {
    const val = parseFloat(inputs[field.key]) || 0;
    const weighted = (val / field.max) * field.weight;
    internalTotal += weighted;
  });

  const externalInput = parseFloat(inputs['endTermTheory']) || 0; // max 60
  const externalScaled = (externalInput / 60) * 25;
  
  const finalScore = internalTotal + externalScaled;

  return {
    internalTotal: internalTotal.toFixed(2),
    externalScaled: externalScaled.toFixed(2),
    finalScore: finalScore.toFixed(2),
    percentage: finalScore.toFixed(2) // out of 100
  };
};
