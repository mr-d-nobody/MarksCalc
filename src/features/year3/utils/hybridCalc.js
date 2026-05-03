export const calculateHybrid = (inputs) => {
  const internalFields = [
    { key: 'practEval', max: 40, weight: 20 },
    { key: 'attendance', max: 2, weight: 2 },
    { key: 'surpriseTest', max: 12, weight: 4 },
    { key: 'practMst', max: 10, weight: 4 },
    // 10 Worksheets
    { key: 'ws1', max: 30, weight: 2 },
    { key: 'ws2', max: 30, weight: 2 },
    { key: 'ws3', max: 30, weight: 2 },
    { key: 'ws4', max: 30, weight: 2 },
    { key: 'ws5', max: 30, weight: 2 },
    { key: 'ws6', max: 30, weight: 2 },
    { key: 'ws7', max: 30, weight: 2 },
    { key: 'ws8', max: 30, weight: 2 },
    { key: 'ws9', max: 30, weight: 2 },
    { key: 'ws10', max: 30, weight: 2 },
    
    { key: 'quiz', max: 4, weight: 4 },
    { key: 'assignment', max: 10, weight: 6 },
    { key: 'mst1', max: 20, weight: 5 },
    { key: 'mst2', max: 20, weight: 5 },
  ];

  let internalTotal = 0;

  internalFields.forEach(field => {
    const val = parseFloat(inputs[field.key]) || 0;
    const weighted = (val / field.max) * field.weight;
    internalTotal += weighted;
  });

  const externalInput = parseFloat(inputs['endTermHybridTheory']) || 0; // max 60
  const externalScaled = (externalInput / 60) * 30;
  
  const finalScore = internalTotal + externalScaled;

  return {
    internalTotal: internalTotal.toFixed(2),
    externalScaled: externalScaled.toFixed(2),
    finalScore: finalScore.toFixed(2),
    percentage: finalScore.toFixed(2) // out of 100
  };
};
