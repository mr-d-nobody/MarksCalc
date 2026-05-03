export const calculateHybrid = (inputs) => {
  const fields = [
    { key: 'attendance', max: 2, weight: 2 },
    { key: 'mst1', max: 20, weight: 5 },
    { key: 'mst2', max: 20, weight: 5 },
    { key: 'exp1', max: 30, weight: 5 },
    { key: 'exp2', max: 30, weight: 5 },
    { key: 'exp3', max: 30, weight: 5 },
    { key: 'exp4', max: 30, weight: 5 },
    { key: 'classPerf', max: 10, weight: 5 },
    { key: 'endTermPractical', max: 40, weight: 20 },
    { key: 'assignment', max: 10, weight: 2 },
    { key: 'quiz', max: 4, weight: 2 },
    { key: 'surpriseTest', max: 12, weight: 2 },
    { key: 'endTermTheory', max: 60, weight: 30 },
    { key: 'courseProject', max: 5, weight: 2 },
    { key: 'industryAssessment', max: 10, weight: 5 },
  ];

  let totalWeighted = 0;
  let totalMaxWeight = 0;

  fields.forEach(field => {
    totalMaxWeight += field.weight;
    const val = parseFloat(inputs[field.key]) || 0;
    const weighted = (val / field.max) * field.weight;
    totalWeighted += weighted;
  });

  const finalOutOf70 = (totalWeighted / totalMaxWeight) * 70;
  const percentage = (totalWeighted / totalMaxWeight) * 100;

  return {
    totalWeighted: totalWeighted.toFixed(2),
    finalOutOf70: finalOutOf70.toFixed(2),
    percentage: percentage.toFixed(2),
    totalMaxWeight
  };
};
