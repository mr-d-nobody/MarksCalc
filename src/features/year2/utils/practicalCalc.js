export const calculatePractical = (inputs) => {
  const internalFields = [
    { key: 'classPerf', max: 10, weight: 5 },
    { key: 'exp1', max: 30, weight: 10 },
    { key: 'exp2', max: 30, weight: 10 },
    { key: 'exp3', max: 30, weight: 10 },
    { key: 'exp4', max: 30, weight: 10 },
    { key: 'industryAssessment', max: 10, weight: 10 },
    { key: 'courseProject', max: 5, weight: 5 },
  ];

  let internalTotal = 0;

  internalFields.forEach(field => {
    const val = parseFloat(inputs[field.key]) || 0;
    const weighted = (val / field.max) * field.weight;
    internalTotal += weighted;
  });

  const external = parseFloat(inputs['externalViva']) || 0; // Max 40
  // Internal max weight is 60 (5 + 10*4 + 10 + 5)
  // Total sum is out of 100
  const finalScore100 = internalTotal + external;
  // Scaled out of 60
  const finalScore60 = (finalScore100 / 100) * 60;
  const percentage = (finalScore100 / 100) * 100;

  return {
    internalTotal: internalTotal.toFixed(2),
    externalTotal: external.toFixed(2),
    finalTotal100: finalScore100.toFixed(2),
    finalScore60: finalScore60.toFixed(2),
    percentage: percentage.toFixed(2)
  };
};
