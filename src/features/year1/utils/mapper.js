/**
 * Year 1 Calculator Mapper
 */

const MAX_VALUES = {
  practEval: 40,
  attendance: 2,
  mst1: 20,
  mst2: 20,
  practMidTerm: 30,
  practMst: 30,
  practAss1: 30,
  practAss2: 30,
  practAss3: 30,
  courseProject: 20,
  surpriseTest: 12,
  assignment: 12,
  endTermTheory: 60,
  externalTheory: 60,
  externalViva: 40
};

const getBestNumber = (rawNumbers, max) => {
  const validNumbers = rawNumbers.filter(n => n <= max);
  if (validNumbers.length === 0) return null;
  return validNumbers[0];
};

export const mapToCalculator = (parsedData, calculatorType) => {
  const mapped = {};
  
  Object.keys(parsedData).forEach(key => {
    if (MAX_VALUES[key] !== undefined) {
      const data = parsedData[key];
      const max = MAX_VALUES[key];
      const bestValue = getBestNumber(data.rawNumbers, max);
      
      if (bestValue !== null) {
        let confidence = 'low';
        if (data.rawNumbers.length === 1) {
          confidence = 'medium';
        } else if (data.rawNumbers.includes(max) && bestValue <= max) {
          confidence = 'high';
        } else {
          confidence = 'medium';
        }

        mapped[key] = {
          value: bestValue,
          confidence,
          max
        };
      } else {
        mapped[key] = {
          value: null,
          confidence: 'low',
          max
        };
      }
    }
  });

  return mapped;
};
