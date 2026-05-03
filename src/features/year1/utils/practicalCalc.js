export const calculatePractical = (inputs) => {
  const internalFields = [
    { key: 'practAss1', max: 30, weight: 15 },
    { key: 'practAss2', max: 30, weight: 15 },
    { key: 'practAss3', max: 30, weight: 15 },
    { key: 'practMst', max: 30, weight: 15 },
  ];

  let internalTotal = 0;

  internalFields.forEach(field => {
    const val = parseFloat(inputs[field.key]) || 0;
    const weighted = (val / field.max) * field.weight;
    internalTotal += weighted;
  });

  const externalInput = parseFloat(inputs['externalViva']) || 0; // max 40, weight 40
  
  const finalScore = internalTotal + externalInput;

  return {
    internalTotal: internalTotal.toFixed(2),
    externalTotal: externalInput.toFixed(2),
    finalScore: finalScore.toFixed(2),
    percentage: finalScore.toFixed(2) // out of 100
  };
};
