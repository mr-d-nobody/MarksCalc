export const calculatePractical = (inputs) => {
  const internalFields = [
    { key: 'exp1', max: 30, weight: 4.5 },
    { key: 'exp2', max: 30, weight: 4.5 },
    { key: 'exp3', max: 30, weight: 4.5 },
    { key: 'exp4', max: 30, weight: 4.5 },
    { key: 'exp5', max: 30, weight: 4.5 },
    { key: 'exp6', max: 30, weight: 4.5 },
    { key: 'exp7', max: 30, weight: 4.5 },
    { key: 'exp8', max: 30, weight: 4.5 },
    { key: 'exp9', max: 30, weight: 4.5 },
    { key: 'exp10', max: 30, weight: 4.5 },
    { key: 'midTermTest', max: 15, weight: 15 },
  ];

  let internalTotal = 0;

  internalFields.forEach(field => {
    const val = parseFloat(inputs[field.key]) || 0;
    const weighted = (val / field.max) * field.weight;
    internalTotal += weighted;
  });

  const externalInput = parseFloat(inputs['externalViva']) || 0; // max 40
  
  const finalScore = internalTotal + externalInput;

  return {
    internalTotal: internalTotal.toFixed(2),
    externalTotal: externalInput.toFixed(2),
    finalScore: finalScore.toFixed(2),
    percentage: finalScore.toFixed(2) // out of 100
  };
};
